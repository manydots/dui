import React, { Component } from 'react';
import classNames from 'classnames';
import { getPrefix } from '../_util/method';
import './style/index.less';

interface Button {
  type?: 'success' | 'error' | 'warn' | 'info'
  message: React.ReactNode
  className?: string
}

export default class Alert extends Component<Button> {

  render() {
    const { type = 'info' } = this.props
    const prefix = getPrefix('alert')
    const className = classNames(prefix, `${prefix}-${type}`)
    return <div className={className}>{this.props.message}</div>
  }
}
