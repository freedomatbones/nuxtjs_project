export default function({store, route, redirect}) {
  if (!store.state.auth.loggedIn && route.path !== '/login') {
    redirect('/login');
  } else if (store.state.auth.loggedIn && ['/login', '/callback'].includes(route.path)) {
    redirect('/');
  }
}
