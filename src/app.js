const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

import Header from './header.js';
import Index from './pages/index.js';
import Profile from './pages/profile.js';

function App() {  
   return  (<Router>
      <Header />
      <div class="container-fluid bg-olivedrab_light w-100 h-100">
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
        </div>
    </Router>
   );
  }
ReactDOM.render(<App />, document.getElementById('App'));