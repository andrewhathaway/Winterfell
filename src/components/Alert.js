import React from 'react';
import { iconMapper, alertClassMapper } from '../lib/types';
import _ from 'lodash';

class Alert extends React.Component {
    handleClick(e, action) {
        e.preventDefault();
        this.props.handleQuestionAction(e, this.props.questionSetId, this.props.questionId, action);
    }

    render() {
        const { status = '', text = '', options = [] } = this.props.alert;

        const renderIcon = (icon = '') => {
            if (!_.isEmpty(icon)) {
                return <i className={iconMapper[icon]} />;
            }
            return '';
        };

        const renderOptions = options => {
            if (!_.isEmpty(options)) {
                return [...options].map(option => {
                    const { text = '', action = '', icon = '' } = option;
                    return (
                        <div onClick={e => this.handleClick(e, action)}>
                            {!_.isEmpty(icon) ? <i className={icon} /> : ''} <div>{text}</div>
                        </div>
                    );
                });
            }
        };

        return (
            <div className={alertClassMapper[status]}>
                <div className='alert-wrap'>
                    <div>
                        {renderIcon(status)} {text}
                    </div>{' '}
                    {renderOptions(options)}
                </div>
            </div>
        );
    }
}

Alert.defaultProps = {
    status: '',
    text: '',
    options: [],
};

export default Alert;
