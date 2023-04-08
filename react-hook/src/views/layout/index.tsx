import './layout.scss'
import store from '../../redux';
import { useState } from 'react';
import Aside from './aside';
import { Outlet } from 'react-router-dom'

function Layout() {

  const [count, setCount] = useState<number>(0)

  store.subscribe(() => {
    const store_data = store.getState()
    //console.log("订阅,查看数据变化:", store.getState());
    setCount(store_data.Order.count)
  })
  return (
    <section id='container'>
      <aside>
        <Aside />
      </aside>
      <section>
        <header>header--{count}</header>
        <main><Outlet /></main>
      </section>
    </section>
  )
}

export default Layout;