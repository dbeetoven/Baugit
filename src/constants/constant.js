const DEFAULT_CONSTANT = {
  AVATAR_SRC: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
};

const VALIDATION_MESSAGE = {
  required: 'Este campo es requerido!',
  types: {
    email: 'Tu correo electronico es incorrecto',
    number: 'Numero invalido.',
    password: 'Tu contreseña  es incorrecto debe tener entre 6 y 25 caracteres.'
  },
  number: {
    range: 'Debe tener entre 6 y 25 caracteres.',
  },
};

export { DEFAULT_CONSTANT, VALIDATION_MESSAGE };
