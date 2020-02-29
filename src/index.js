import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";

<<<<<<< HEAD
axios.defaults.baseURL = "https://cooper-challenge.herokuapp.com/api/v1";
=======
axios.defaults.baseURL = "https://cooper-api-cr.herokuapp.com/api/v1";
>>>>>>> 89c80ddb1202019020995ee656307ab1b347064f

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
