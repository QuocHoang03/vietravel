import Home from '../pages/Home';
import Account from '../pages/Account';
import Contact from '../pages/Contact';

const PublicRoutes = [
  { path: '/', component: Home },
  { path: '/account', component: Account },
  { path: '/contact', component: Contact },
];

const PrivateRoutes = [];

export { PublicRoutes, PrivateRoutes };
