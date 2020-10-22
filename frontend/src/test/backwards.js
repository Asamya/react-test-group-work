export default (takesString) => {
    let reversed = '';
    for(let i = takesString.length - 1; i >= 0; i--) {
        reversed += takesString[i];
    }
    return reversed;
}