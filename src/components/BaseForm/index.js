import React from 'react'
import { Input, Select, Form, Button, Checkbox, Radio, DatePicker } from 'antd'
import Utils from '../../utils/utils'

const FormItem = form.Item
const Option = Select.Option

class FilterForm extends React.Component {

  handleFilterSubmit = () => {
    let fieldValue = this.props.form.getFieldValue()
    this.props.filterSubmit(fieldValue)
  }

  reset = () => {
    this.props.form.resetFields()
  }

  initFormList = () => {
    const {getFieldDecorator} = this.props.form
    const formList = this.props.formList
    const formItemList = []
    if (formList && formList.length > 0) {
      formList.forEach((item, i) => {
        let label = item.label
        let field = item.field
        let initialValue = item.initialValue || ''
        let placeholder = item.placeholder
        let width = item.width

        if (item.type == 'TIME') {
          const begin_time = <FormItem label="订单查询" key={field}>
            {
              getFieldDecorator('baegin_time')(
                <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss"/>
              )
            }
          </FormItem>
          formItemList.push(begin_time)
          const end_time = <FormItem label="~" key={field}>
            {
              getFieldDecorator('end_time')(
                <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss"/>
              )
            }
          </FormItem>
          formItemList.push(end_time)
        } else if (item.type == 'INPUT') {
          const INPUT = <FormItem label={label} key={field}>
            {
              getFieldDecorator([field], {
                initialValue: initialValue
              })(
                <Input type="text" placeholder={placeholder}/>
              )
            }
          </FormItem>
          formItemList.push(INPUT)
        } else if (item.type == 'SELECT') {
          const SELECT = <formItem label={label} key={field}>
            {
              getFieldDecorator([field], {
                initialValue: initialValue
              })(
                <Select
                  style={{width: width}}
                  placeholder={placeholder}
                >
                  {Utils.getOptionList(item.list)}
                </Select>
              )
            }
          </formItem>
          formItemList.push(SELECT)
        } else if (item.type == 'CHECKBOX') {
          const CHECKBOX = <FormItem label={label} key={field}>
            {
              getFieldDecorator([field], {
                valuePropName: 'checked',
                initialValue: initialValue
              })(
                <Checkbox>
                  {label}
                </Checkbox>
              )
            }
          </FormItem>
          formItemList.push(CHECKBOX)
        }
      })
    }
    return formItemList
  }

  render () {
    return (
      <Form layout="inline">
        { this.initFormList() }
        <FormItem>
          <Button type="primary" style={{ margin: '0 20px'}} onClick={this.handleFilterSubmit()} >查询</Button>
          <Button onClick={this.reset}>reset</Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create({})(FilterForm)