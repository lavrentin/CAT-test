import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from './store/State';
import Welcome from './components/Welcome';



const App = () => (
  <StrictMode>
    <Provider store={store}>
      <div id="app">
        <Welcome/>
      </div>
    </Provider>
  </StrictMode>
);

export default App;
