import React from 'react'
import { Menu, Icon } from 'antd'
import MenuConfig from '../../config/menuConfig'
import './index.less'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class Navleft extends React.Component {

  componentWillMount () {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }

  //菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu tilte={item.title} key={item.key}>
            { this.renderMenu(item.children) }
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }

  render () {
    return (
      <div >
        <div className="logo">
          <img src="/assets/logo.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}