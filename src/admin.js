import React from 'react'
import { Row, Col } from 'antd';
import Header from './components/Header'
import Footer from './components/Footer'
import Navleft from './components/Navleft'
import './components/style/common.less'

export default class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span="3" className="nav-left">
          <Navleft/>
        </Col>
        <Col span="21" className="main">
          <Header />
          <Row className="content">
            2
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}