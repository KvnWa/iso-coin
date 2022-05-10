import React from 'react'

import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from '@ant-design/icons' // MenuOutline,

import icon from '../images/crypto.png'

const Navbar = () => {

    const items = [
        {
            key: 'home',
            icon: <HomeOutlined />,
            label: (<Link to='/'>Home</Link>),
        },
        {
            key: 'cryptocurrencies',
            icon: <FundOutlined />,
            label: (<Link to='/cryptocurrencies'>Cryptocurrencies</Link>),
        },
        // {
        //     key: 'exchanges', // it became paid that's why
        //     icon: <MoneyCollectOutlined />,
        //     label: (<Link to='/exchanges'>Exchanges</Link>),
        // },
        {
            key: 'news',
            icon: <BulbOutlined />,
            label: (<Link to='/news'>News</Link>),
        },
    ]

    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>ISO Coin</Link>
                </Typography.Title>
            </div>
            <div className='menu'>
                <Menu mode="horizontal" defaultSelectedKeys='home' >
                    {items.map((ele) => (
                        <Menu.Item key={ele.key} icon={ele.icon} >{ele.label}</Menu.Item>
                    ))}
                </Menu>
            </div>
        </div>
    )
}

export default Navbar