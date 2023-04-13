export function storeCurrentUser(user) {
  localStorage.setItem('currentUser, user');

  }
  
  export function storeCurrenToken(token){
    localStorage.setItem('token', token);
  }
  export function getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user;
  }
  
  export function clearCurrentUser() {
    localStorage.removeItem('currentUser');
  }