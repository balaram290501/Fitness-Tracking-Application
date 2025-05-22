import React from 'react';
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { store } from './store/store'

import App from './App'
import { AuthProvider } from 'react-oauth2-code-pkce'
import { authConfig } from './authConfig'

function Hello(props) {
  return <h1>Hello World!</h1>;
}

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
console.log("hellp")
root.render(
  <AuthProvider authConfig={authConfig}
                loadingComponent={<div>Loading...</div>}>
    <Provider store={store}>
      <App />
    </Provider>
   </AuthProvider>,
)