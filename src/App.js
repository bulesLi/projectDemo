/*
 * @Author: bulesLi.huawei 
 * @Date: 2019-09-25 10:50:48 
 * @Last Modified by: bulesLi.huawei
 * @Last Modified time: 2019-10-13 12:20:10
 */
import React, { Component } from 'react'
import { Button,Alert } from 'antd'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg1: '超人是好人么',
      count: 0
    }

  }
  componentDidMount() {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(this.state.count)
    })
    console.log(this.state.count)
  }
  render() {
    const msg = '我是超人，哈哈'
    return ( 
      <div>
        <Button type="primary"> 23424234 </Button> 
        <Alert>{2342424234}</Alert>
        <p> test </p>   { msg }  
        <p> { this.state.count } </p> 
      </div>

    )
  }
}