import React from 'react'
import { Card, Button, Table, Form, Select, Modal, DatePicker, message } from 'antd'
import axios from '../../axios'
import Utils from '../../utils/utils'
import BaseForm from '../../components/BaseForm'

const FormItem = Form.Item
const Option = Select.Option

export default class Order extends React.Component {
  state = {
    orderInfo: {},
    orderConfirmVisible: false
  }

  params = {
    page: 1
  }

  formList = [
    {
      type: 'SELECT',
      label: '城市',
      field: 'city',
      placeholder: '全部',
      initialValue: '1',
      width: 80,
      list: [{ id: '0', name: '全部' }, { id: '1', name: '北京' }, { id: '2', name: '天津' }, { id: '3', name: '上海' }]
    },
    {
      type: 'TIME'
    },
    {
      type: 'SELECT',
      label: '订单状态',
      field:'order_status',
      placeholder: '全部',
      initialValue: '1',
      width: 80,
      list: [{ id: '0', name: '全部' }, { id: '1', name: '进行中' }, { id: '2', name: '结束行程' }]
    }
  ]

  componentDidMount() {
    this.requestList()
  }

  requestList = () => {
    let _this = this
    axios.ajax({
      url: '/order/list',
      data: {
        params: this.params
      }
    }).then((res) => {
      let list = re.result.item_list.map((item, index) => {
        item.key = index
        return item
      })
      this.setState({
        list,
        pagination: Utils.pagination(res, (current) => {
          _this.params.page = current
          _this.requestList()
        })
      })
    })
  }
}