import React from "react";
import {
  iconMapper, 
  alertClassMapper
} from '../lib/types'
import _ from 'lodash';

class Alert extends React.Component {

  render() {

    const { status, text, options } = this.props.questionAlert;

    const renderIcon = (icon = '') => {
      if(!_.isEmpty(icon)) {
        return <i className={iconMapper[icon]} />
      }
      return '';
    }
    
    return (
      <div className={alertClassMapper[status]}>{renderIcon(status)} {text}</div>
    );
  }
}

Alert.defaultProps = {
  status  : '',
  text    : '',
  options : []
}

export default Alert;
