import store from "../../redux";
import { setToken, setUserName } from "../../redux/modules/global/action";

function Home() {
  const updateCount = () => {
    // store.dispatch(setToken('123456'))
    // store.dispatch(setUserName('12'))
  }
  return (
    <div onClick={ updateCount }>首页</div>
  )
}

export default Home;