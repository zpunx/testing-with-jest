export function registerUser(username) { 
    if (!username) throw new Error('Username is required.');  

    return { 
        id: new Date().getTime(), 
        username: username 
    }
}
