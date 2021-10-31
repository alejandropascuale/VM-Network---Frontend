import {BrowserRouter, Route} from 'react-router-dom'

import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  return (
      <BrowserRouter>
        <Route path='/' exact={true} component={Home} />
        <Route path='/register' component={Register} />
      </BrowserRouter>
  );
}

export default App;
