import { BrowserRouter, Route, Switch} from "react-router-dom";
import {Home, About, Project, NavBar} from './components/index';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  )
    

}

export default App;
