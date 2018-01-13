import React, { Component } from 'react';
import {Icon} from 'antd';
import { Menu} from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

class Sidebar extends Component {
  render() {
    return (
    <div className="sidebar">
      <Menu theme="dark"  mode="inline">
        <Menu.Item key="1">
          <Icon type="home" />
          <span>首页</span>
          <Link to='/main'>简介</Link>
        </Menu.Item>

        <SubMenu
          key="sub1"
          title={<span><Icon type="bars" /><span>故障模式检测示例</span></span>}
        >
          <Menu.Item key="3">
            <Link to="/demo/amp2hz">2Hz主能量检测</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/demo/acc1p3p">1p3p振动模式检测</Link>
          </Menu.Item>
        </SubMenu>
          <Menu.Item key="2">
              <Icon type="api" />
              <span>API</span>
            <Link to='/bladeAPI'></Link>
          </Menu.Item>
      </Menu>
    </div>
    )
  }
}

export default Sidebar;
