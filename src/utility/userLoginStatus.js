const cookie = document.cookie;
const cookieArr = cookie.split('; ');
const userCookie = cookieArr.find(e => e.includes('isUserLoggedIn'));
const isUserLoggedIn = userCookie ? userCookie.split('=')[1]: 'false';
export default isUserLoggedIn === 'true';