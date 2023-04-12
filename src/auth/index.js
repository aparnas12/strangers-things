export function storeCurrentUser(user) {
    localStorage.setItem('token', JSON.stringify(token));
  }
  
  export function getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user;
  }
  
  export function clearCurrentUser() {
    localStorage.removeItem('currentUser');
  }