import store from "../../redux";

function Home() {
  const updateCount = () => {
    const addCount = { type: 'ADD_COUNT', number: 10 }
    store.dispatch(addCount)
  }
  return (
    <div onClick={ updateCount }>首页</div>
  )
}

export default Home;