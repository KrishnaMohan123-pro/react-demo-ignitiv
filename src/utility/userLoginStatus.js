const cookie = document.cookie;
const cookieArr = cookie.split('; ');
const userCookie = cookieArr.find(e => e.includes('isUserLoggedIn'));
const isUserLoggedIn = userCookie ? userCookie.split('=')[1]: 'false';
isUserLoggedIn.includes('true');
export default isUserLoggedIn.includes('true');