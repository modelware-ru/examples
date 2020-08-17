import * as React from 'react';
import * as PropTypes from 'prop-types'

type Props = {
    name: string,
};

export class User extends React.Component<Props> {
    render() {
        console.log('<User/> render')
        const {name} = this.props;
        return (
            <div>
                <p>Привет, {name}!</p>
            </div>
        )
    }
}

// @ts-ignore
User.propTypes = {
    name: PropTypes.string.isRequired,
}