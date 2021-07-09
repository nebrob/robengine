function get(argName) {
    if (has(argName)) {
        return process.argv.find(a => a === argName);
    } else {
        return false;
    }
}

function has(argName) {
    return process.argv.indexOf(argName) !== -1;
}

export default {
    get, has
}