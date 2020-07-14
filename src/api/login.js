function tologin(key) {
    localStorage.setItem('token', key);
}

export { tologin }