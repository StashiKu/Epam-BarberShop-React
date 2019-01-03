import Home from './components/Home';
import LogIn from './components/Auth/LogIn';
import SignUp from './components/Auth/SignUp'
import Account from './components/Account/Account';

export default [
    {
      path: '/',
      component: Home,
      exact: true
    }, 
    {
      path: '/login',
      component: LogIn,
      exact: true
    }, 
    {
      path: '/signup',
      component: SignUp,
      exact: true
    }, 
    {
      path: '/account',
      component: Account,
      exact: true
    }
]