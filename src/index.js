import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ConnectedApp from './App'

const ReduxApp = () => {
  return (
    <Provider store={store} >
        <ConnectedApp />
    </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ReduxApp />
  </React.StrictMode>,
  document.getElementById('root')
);