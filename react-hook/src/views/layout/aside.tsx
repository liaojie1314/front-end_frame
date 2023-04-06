import { useState } from "react";
import { router_item } from "../../router";
import { Menu, MenuProps } from 'antd';
import { useNavigate } from "react-router-dom";

//获取本地存储数据
const storageSelectKeys = sessionStorage.getItem('selectKeys')?.split(' ') || []
const storageOpenKeys = JSON.parse(sessionStorage.getItem('openKeys') || '[]') || []

function aside() {
    //路由
    const [router] = useState(router_item)
    //选中的菜单
    const [selectKeys, setSelectKeys] = useState<string[]>(storageSelectKeys)
    //展开的菜单
    const [openKeys, setOpenKeys] = useState<[]>(storageOpenKeys)
    //路由导航
    const navigate = useNavigate()
    //点击菜单事件
    const handlerMenu: MenuProps['onClick'] = (e) => {
        const keyPath = e.keyPath
        const copyKeyPath = JSON.parse(JSON.stringify(keyPath))
        setOpenKeys(copyKeyPath.slice(1))
        sessionStorage.setItem('openKeys', JSON.stringify(copyKeyPath.slice(1)))

        const router = keyPath.reverse().join('/')
        navigate('/' + router)

        //存储选中菜单的key
        sessionStorage.setItem('selectKeys', e.key)
        setSelectKeys(e.key.split(' '))
    };

    return (
        <>
            <Menu
                onClick={handlerMenu}
                mode="inline"
                theme="dark"
                defaultOpenKeys={openKeys}
                defaultSelectedKeys={selectKeys}
                items={router}>
            </Menu>
        </>
    )
}


export default aside;