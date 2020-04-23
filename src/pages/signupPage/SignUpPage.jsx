/* eslint-disable prefer-promise-reject-errors */
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import {
  Button, Checkbox, Form, Input
} from 'antd';
import { AlertMessage } from 'components/AlertMessage';
import { UserContext } from 'provider/UserProvider';
import React, { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const FormItem = Form.Item;

const SignUpPage = () => {
  const [form] = Form.useForm();
  const { user, handleRegister } = useContext(UserContext);
  const history = useHistory();
  const [isAlert, showAlert] = useState(false);
  const onFinish = (values) => {
    handleRegister(values);
    if (user) history.push('/');
  };

  return (
    <div className="login">
      <Form {...formItemLayout} form={form} name="register" className="signup-form" onFinish={onFinish} scrollToFirstError>
        <FormItem
          label="Usuario"
          name="username"
          rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
        >
          <Input
            prefix={<UserOutlined style={{ fontSize: 13 }} />}
            type="text"
            placeholder="Usuario"
          />
        </FormItem>
        <FormItem
          name="email"
          label="Correo Electronico"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Por favor ingrese tu correo electronico!',
            },
          ]}
        >
          <Input
            prefix={<MailOutlined style={{ fontSize: 13 }} />}
            type="email"
            placeholder="Correo Electronico"
          />
        </FormItem>

        <FormItem
          name="password"
          label="Contraseña"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese un contraseña!',
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined style={{ fontSize: 13 }} />}
            placeholder="Contraseña 6 a 25 caracteres"
          />
        </FormItem>

        <FormItem
          name="confirmPassword"
          label="Confirmar Contraseña"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Por favor confirme su contraseña!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                // eslint-disable-next-line prefer-promise-reject-errors
                return Promise.reject('No se coinciden las contraseñas!');
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ fontSize: 13 }} />}
            placeholder="Confirmar Contraseña 6 a 25 caracteres"
          />
        </FormItem>

        <FormItem
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) => (value ? Promise.resolve() : Promise.reject('Debes aceptar los Terminanos & Condiciones')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            He leído & <Link to="/">Acepto los Terminos & Condiciones</Link>
          </Checkbox>
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" block>
            Crear Cuenta
          </Button>
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
export { SignUpPage };
