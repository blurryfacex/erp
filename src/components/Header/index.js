import React from 'react'
import { Row, Col } from 'antd'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'
export default class Footer extends React.Component {
  state = {}

  componentWillMount () {
    this.setState({
      userName: '123'
    })
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000)
  }

  // getWeatherAPIData () {
  //   let city = ''
  //   axios.jsonp({
  //     url: ''
  //   }).then((res) => {
  //     if (res.status === 'success') {}
  //
  //   })
  // }

  render () {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>wel come, {this.state.userName}</span>
            <a href="#" >quit</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime} </span>
            <span className="weather-detail">weather</span>
          </Col>
        </Row>
      </div>
    )
  }
}