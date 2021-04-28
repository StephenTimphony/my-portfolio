import { BrowserRouter, Route, Switch} from "react-router-dom";
import {Home, About, SinglePost, Post, Project, NavBar} from './components/index';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/post/:slug'>
          <SinglePost />
        </Route>
        <Route path='post'>
          <Post />
        </Route>
        <Route path='/project'>
          <Project />
        </Route>
        <Route path='/test'>
          worked
        </Route>
      </Switch>
    </BrowserRouter>
  )
    

}

export default App;
