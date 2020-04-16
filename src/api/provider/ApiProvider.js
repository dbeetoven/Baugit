import React from 'react';
import localstorage from '../localstorage';
import api from '../api';

import { AuthProvider } from './AuthProvider';

const UserContext = React.createContext(AuthProvider);

export { UserContext };
