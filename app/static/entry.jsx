import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import store from './stores/checkboxStore.js';

function render() {
  return ReactDOM.render(
    <App state={store.getState()} />,
    document.getElementById('mount-point')
  );
}

render();
store.subscribe(render);
