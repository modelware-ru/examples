import * as React from 'react'

const renderField = ({input, label, type, meta: {touched, error}}: any) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

export default renderField