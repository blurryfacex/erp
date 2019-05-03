import React from 'react'
import { Menu, Icon } from 'antd'
import MenuConfig from '../../config/menuConfig'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class Navleft extends React.Component {
  render () {
    return (
      <div >
        <div className="logo">
          <img src="/assets/logo.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu>
          <SubMenu key="sub1" title={<span><Icon type="mail" />navigation</span>}>
            <Menu.Item key="1" >Options 1</Menu.Item>
            <Menu.Item key="1" >Options 2</Menu.Item>
            <Menu.Item key="1" >Options 3</Menu.Item>
            <Menu.Item key="1" >Options 4</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}