import * as React from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import asyncValidate from './asyncValidate'

const renderField = (
    {
        input,
        label,
        type,
        meta: {asyncValidating, touched, error}
    }: any) => (
    <div>
        <label>{label}</label>
        <div className={asyncValidating ? 'async-validating' : ''}>
            <input {...input} type={type} placeholder={label}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const AsyncBlurValidationForm = (props: any) => {
    const {handleSubmit, pristine, reset, submitting} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="username"
                type="text"
                component={renderField}
                label="Username"
            />
            <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
            />
            <div>
                <button type="submit" disabled={submitting}>
                    Sign Up
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'asyncValidation', // a unique identifier for this form
    validate,
    asyncValidate,
    asyncBlurFields: ['username'],
})(AsyncBlurValidationForm)