import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
