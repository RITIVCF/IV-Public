import Home from '../ui/pages/Home.jsx';
import About from '../ui/pages/About.jsx';
import Events from '../ui/pages/Events.jsx';
import Churches from '../ui/pages/Churches.jsx';
import Prayer from '../ui/pages/Prayer.jsx';
import Contact from '../ui/pages/Contact.jsx';
import NotFound from '../ui/pages/NotFound.jsx';

const routes = [
  {
    path: '/',
    component: Home
  }, {
    path: '/about',
    component: About
  }, {
    path: '/events',
    component: Events
  }, {
    path: '/churches',
    component: Churches
  }, {
    path: '/prayer',
    component: Prayer
  }, {
    path: '/contact',
    component: Contact
  }, {
    path: '*',
    component: NotFound
  }
];

export default routes;
