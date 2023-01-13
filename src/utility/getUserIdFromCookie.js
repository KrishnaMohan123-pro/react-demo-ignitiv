const cookie = document.cookie;
const cookieArr = cookie.split('; ');
const userCookie = cookieArr.find(e => e.includes('isUserLoggedIn'));
const isUserLoggedIn = userCookie ? userCookie.split('=')[1]: 'false';
const userId = isUserLoggedIn.split('|')[1];
export default userId;