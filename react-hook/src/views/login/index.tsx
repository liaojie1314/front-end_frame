import './login.scss'
import LoginForm from './components/login'
import LoginBg from '../../assets/login-bg.jpg'
import Logo from '../../assets/react.svg'

const styleLoginBg = {
  backgroundImage:`url(${LoginBg})`,
  backgroundRepeat:'no-repeat'
}
function Login() {
  return (
    <div className="login-container" style={styleLoginBg}>
      <div className='login-wrap'>
        <div className='login-form'>
          <img src={Logo} alt="React+Hook Admin" />
          <h1>React+Hook Admin</h1>
          <LoginForm/>
        </div>
      </div>
    </div>
  )
}

export default Login;