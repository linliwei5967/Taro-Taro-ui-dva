import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class InputNumber extends Component {

  render () {
    const { compStyle } = this.props
    return (
      <View className='comp-input-number' style={compStyle}>
        公共组件
      </View>
    )
  }
}

