var Router = window.ReactRouterDOM.BrowserRouter;
var Route = window.ReactRouterDOM.Route;
var Link = window.ReactRouterDOM.Link;
var Prompt = window.ReactRouterDOM.Prompt;
var Switch = window.ReactRouterDOM.Switch;
var Redirect = window.ReactRouterDOM.Redirect;

import Header from './header.js';
import Index from './pages/index.js';
import Profile from './pages/profile.js';

function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(Header, null),
    React.createElement(
      'div',
      { 'class': 'container-fluid bg-olivedrab_light w-100 h-100' },
      React.createElement(
        Switch,
        null,
        React.createElement(Route, { exact: true, path: '/', component: Index }),
        React.createElement(Route, { path: '/profile', component: Profile })
      )
    )
  );
}
ReactDOM.render(React.createElement(App, null), document.getElementById('App'));