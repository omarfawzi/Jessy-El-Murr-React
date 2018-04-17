import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App.jsx';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faPaperPlane from '@fortawesome/fontawesome-free-solid/faPaperPlane';
fontawesome.library.add(brands,faPaperPlane);

ReactDOM.render(<App />, document.getElementById('app'));
