/* eslint-disable no-return-assign */
import React, { useContext, useState } from 'react';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import {
  Button, Checkbox, Form, Input
} from 'antd';
import { VALIDATION_MESSAGE } from 'constants/constant';
import ROUTES from 'constants/routes';
import { useLocalStorage } from 'provider/useLocalStorage';
import { UserContext } from 'provider/UserProvider';
import { AlertMessage } from 'components/AlertMessage';
import { Link, useHistory } from 'react-router-dom';
import './loginPage.scss';

const FormItem = Form.Item;

const LoginPage = () => {
  const [form] = Form.useForm();
  const { user, handleLogin, handleLogout } = useContext(UserContext);
  const [remenberme, setRemenberme] = useLocalStorage('_rememberMe', false);
  const [emailRemenber, setEmailRemenber] = useLocalStorage('_emailRemenber', '');
  const [isAlert, showAlert] = useState(false);
  const history = useHistory();

  const onFinish = (values) => {
    if (remenberme) setEmailRemenber(values.email);
    handleLogin(values);
    if (user) history.push('/');
    else showAlert(true);
  };

  handleLogout(); // OnInit Logout

  return (
    <div className="login">
      <Form
        form={form}
        onFinish={onFinish}
        className="login-form"
        validateMessages={VALIDATION_MESSAGE}
      >
        <FormItem label="" name="email" rules={[{ required: true }, { type: 'email' }]}>
          <Input
            prefix={<MailOutlined style={{ fontSize: 13 }} />}
            type="email"
            value={emailRemenber}
            placeholder="Correo Electronico"
          />
        </FormItem>
        <FormItem label="" name="password" rules={[{ required: true }]}>
          <Input.Password
            prefix={<LockOutlined style={{ fontSize: 13 }} />}
            type="password"
            placeholder="Contraseña"
          />
        </FormItem>
        <FormItem shouldUpdate>
          <Checkbox
            checked={remenberme}
            onChange={() => setRemenberme(remenberme ? !remenberme : !remenberme)}
          >
            Recordame
          </Checkbox>
          <Link className="login-form-forgot" to={ROUTES.FORGOT_PASSWORD}>
            ¿Olvidaste tu contraseña?
          </Link>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Iniciar Sesión
          </Button>
          ¡No tengo cuenta?{' '}
          <Link className="login-form-forgot" to={ROUTES.SIGNUP}>
            Crear Cuenta!
          </Link>
        </FormItem>
        {isAlert ? (
          <AlertMessage
            message="Usuario o Contraseña incorrecto."
            type="error"
            handleClose={() => showAlert(false)}
          />
        ) : null}
      </Form>
    </div>
  );
};
export default LoginPage;
