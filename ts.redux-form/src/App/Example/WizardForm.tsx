import * as React from 'react'
// import * as PropTypes from 'prop-types';
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'

class WizardForm extends React.Component<any, any> {

    state: any = {
        page: 1,
    }

    constructor(props: any) {
        super(props)
    }

    nextPage = () => {
        this.setState({page: this.state.page + 1})
    }

    previousPage = () => {
        this.setState({page: this.state.page - 1})
    }

    render() {
        const {onSubmit} = this.props
        const {page} = this.state
        return (<div>
                {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage}/>}
                {page === 2 &&
                // @ts-ignore
                <WizardFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>
                }
                {page === 3 &&
                // @ts-ignore
                <WizardFormThirdPage previousPage={this.previousPage} onSubmit={onSubmit}/>
                }
            </div>
        )
    }
}

// WizardForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired
// }

export default WizardForm