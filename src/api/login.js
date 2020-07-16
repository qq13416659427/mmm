function tologin(key) {
    localStorage.setItem('token', key);
}
function gettoken() {
    return localStorage.getItem('token');
}
function removetoken() {
    return localStorage.removeItem('token');
}
export { tologin, gettoken, removetoken }