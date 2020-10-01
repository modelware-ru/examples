const validate = (values:any) => {
    const errors:any = {}
    if(!values.clubName) {
        errors.clubName = 'Required'
    }
    if (!values.members || !values.members.length) {
        errors.members = { _error: 'At least one member must be entered' }
    } else {
        const membersArrayErrors:any = []
        values.members.forEach((member:any, memberIndex:number) => {
            const memberErrors:any = {}
            if (!member || !member.firstName) {
                memberErrors.firstName = 'Required'
                membersArrayErrors[memberIndex] = memberErrors
            }
            if (!member || !member.lastName) {
                memberErrors.lastName = 'Required'
                membersArrayErrors[memberIndex] = memberErrors
            }
            if (member && member.hobbies && member.hobbies.length) {
                const hobbyArrayErrors:any = []
                member.hobbies.forEach((hobby:string, hobbyIndex:number) => {
                    if (!hobby || !hobby.length) {
                        hobbyArrayErrors[hobbyIndex] =  'Required'
                    }
                })
                if(hobbyArrayErrors.length) {
                    memberErrors.hobbies = hobbyArrayErrors
                    membersArrayErrors[memberIndex] = memberErrors
                }
                if (member.hobbies.length > 5) {
                    if(!memberErrors.hobbies) {
                        memberErrors.hobbies = []
                    }
                    memberErrors.hobbies._error = 'No more than five hobbies allowed'
                    membersArrayErrors[memberIndex] = memberErrors
                }
            }
        })
        if(membersArrayErrors.length) {
            errors.members = membersArrayErrors
        }
    }
    return errors
}

export default validate