import { HashRouter } from 'react-router-dom'
import GetRouters from './router'
import AuthRouter from './components/authRouter'
import 'antd/dist/reset.css'

function App() {

  return (
    <div>
      <HashRouter>
        <AuthRouter>
          <GetRouters />
        </AuthRouter>
      </HashRouter>
    </div>
  )
}

export default App
