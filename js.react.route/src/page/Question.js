import React, {Component, Fragment} from 'react';
import { withRouter } from "react-router";
import {Link} from 'react-router-dom';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {

        let id = this.state.id + 1;
        this.props.history.push('/question' + id);
    }

    componentDidMount() {
        this.setState({id: parseInt(this.props.match.params.id)});
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        let propsId = parseInt(nextProps.match.params.id);
        let stateId = parseInt(nextState.id);
        if (propsId !== stateId) {
            this.setState({id: propsId});
            return false;
        }
        return true;
    }

    render() {
        return (
            <Fragment>
                <h1>Question #{this.state.id}</h1>
                <button onClick={this.onClick}>GO TO NEXT Question</button>
            </Fragment>
        );
    }

}

const PageWithRouter = withRouter(Question);
export default PageWithRouter;