function vertMirror(str) {
    var arr = str.split("\n")
    var reversed = arr.map(e => e.split('').reverse().join(''))
    // return reversed.join("")
    return reversed.join("\n")
}
function horMirror(str) {
    // Your code
}
function oper(fct, s) {
    fct(s)
}

////condensed:


function vertMirror(str) {
    return str.split('\n')
      .map(line => line.split('').reverse().join(''))
      .join('\n')
}
function horMirror(str) {
    return str.split('\n')
      .reverse()
      .join('\n')
}
function oper(fct, s) {
    return fct(s)
}