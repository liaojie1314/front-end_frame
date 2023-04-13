import { removeCookie } from "@/utils/cookies";
import { error } from "@/api/error";

function Home() {
  const updateCount = () => {
    error({}).then(()=>{

    })
    //removeCookie
  }
  return (
    <div onClick={ updateCount }>首页</div>
  )
}

export default Home;