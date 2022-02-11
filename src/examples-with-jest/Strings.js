export function greet(name) { 
    const greetings = 'Wake up,';
    if (!name) return greetings + ' Stranger.';
    return greetings + ' ' + name + '.';
}
