const validate = (values: any) => {
    const errors:any = {}
    if (!values.username) {
        errors.username = 'Required'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
}

export default validate