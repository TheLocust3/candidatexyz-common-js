import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

class Text extends React.Component {

    render() {
        let { className, type, children, ...props } = this.props;

        className = _.isEmpty(className) ? '' : className;

        return (
            <div className={`mdc-typography mdc-typography--${type}`} {...props}>
                <div className={className}>
                    {children}
                </div>
            </div>
        );
    }
}

Text.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    children: PropTypes.any,
};

export default Text;
