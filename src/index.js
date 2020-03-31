import React, {Suspense} from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {App} from 'pages/app/App';
import './index.css';
import {FirebaseAppProvider} from 'reactfire';
import config from 'api/firebase/firebaseConfig';

ReactDOM.render((
    <FirebaseAppProvider firebaseConfig={config}>
      <Suspense fallback={<p>Aguarde un instante ...</p>}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
      </Suspense>
    </FirebaseAppProvider>),
  document.getElementById('root'),
);

