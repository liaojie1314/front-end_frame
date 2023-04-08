import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { login } from '@/api/user/index';
import { LoginParams } from '@/api/user/types';
import { setToken } from '@r/global/action';
import store from '@/redux';
import { setCookie } from '@/utils/cookies';

function LoginForm() {

    const navigate = useNavigate()
    const handlerFinish = (values: LoginParams) => {
        // const data = await login(values)
        //1
        // try {
        //     const data = await login(values)
        //     localStorage.setItem("token", data.token)
        // } catch (error) {
        //     console.log('error:', error);
        // }
        //2
        login(values).then((response) => {
            const token = response.data.token
            store.dispatch(setToken(token))
            setCookie('token', token)
        }).catch((error) => {
            console.log('error:', error);
        })
        navigate("/home")
    }
    const handlerFinishFailed = (values: any) => {
        console.log(values);
    }
    return (
        <Form
            name="basic"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            onFinish={handlerFinish}
            onFinishFailed={handlerFinishFailed}
        >
            <Form.Item
                name="username"
                rules={[
                    { required: true, message: '请输入用户名' },
                    // () => ({
                    //     validator(_, value) {
                    //         if (value === 'admin') {
                    //             return Promise.resolve()
                    //         }
                    //         //校验不通过
                    //         return Promise.reject(new Error('校验不通过'));
                    //     },
                    // }),
                ]}
            >
                <Input prefix={<UserOutlined className='form-prefix-icon' />} placeholder='请输入用户名' />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    { required: true, message: '请输入密码' },
                ]}
            >
                <Input.Password prefix={<LockOutlined />} placeholder='请输入密码' />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" block>登录</Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm;