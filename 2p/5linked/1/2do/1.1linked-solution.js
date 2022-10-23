import {Linked,Node} from '../../../../jatr/Linked/node5es.js'

let n1 = new Node('a')
let n2 = new Node('b')

let list = new Linked(n1)

list.append(n2)
list.append(new Node('c'))

list.traverse(list.getHead())

console.log(list.contains('b'))

console.log(list.getTail())