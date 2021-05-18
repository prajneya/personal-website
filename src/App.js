import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AnimatedCursor from "react-animated-cursor";
import StarfieldAnimation from 'react-starfield-animation';

import Home from './pages/Home/Home';
import Work from './pages/Work/Work';
import Study from './pages/Study/Study';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Skills from './pages/Skills/Skills';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
        <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='102, 252, 241'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      />
      <StarfieldAnimation
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/work" component={Work} exact />
          <Route path="/study" component={Study} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/skills" component={Skills} exact />
          <Route path="/blog" component={Blog} exact />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
