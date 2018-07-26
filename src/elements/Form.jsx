import _ from 'lodash'
import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text';

export default class Form extends React.Component {

    handleSubmit(event) {
        event.preventDefault();

        this.props.handleSubmit(event);
    }

    renderErrors() {
        if (_.isEmpty(this.props.errors)) return;

        return (
            <Text type='caption'>
                {_.map(this.props.errors, (errorMessage, errorName) => {
                    if (_.isEmpty(errorName)) {
                        <div key={errorName}>
                            {_.capitalize(_.join(errorMessage, ', '))}
                        </div>
                    } else {
                        return (
                            <div key={errorName}>
                                {_.capitalize(errorName)} {_.lowerCase(_.join(errorMessage, ', '))}
                            </div>
                        );
                    }
                })}
            </Text>
        )
    }

    render() {
        let { handleSubmit, errors, top, children, ...props } = this.props;

        return (
            <form className='form' onSubmit={this.handleSubmit.bind(this)} {...props}>
                {top ? this.renderErrors() : ''}

                {children}
                <br /><br />

                {!top ? this.renderErrors() : ''}
            </form>
        );
    }
}

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object,
    top: PropTypes.bool,
    children: PropTypes.any.isRequired
};
