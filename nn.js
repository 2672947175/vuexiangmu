// function formatString(string, chars) {
//     let reg = /%s\1*/g
//     let arr = []
//     let ff = string.replace(reg, $1 => {
//         arr.push($1)
//         return $1 = chars[arr.length - 1]
//     })
//     return ff
// }
// let aca = formatString('z%sx%syx%snn%sdd', ['c', 'dd', 'ffff', '数据'])
// console.log(aca)

let aa = [{id:1,name:'jsdjsd'},{id:2,name:'等等'},{id:3,name:'克服地方'}]
let [,,namea]=[...aa]
namea
let {name}={...namea}
