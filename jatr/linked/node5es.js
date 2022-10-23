export {Linked,Node}

import Node from './node.js'

function Linked(n) {//node
  this.head = n//node
  this.tail = n//node
  this.size = 1

  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.getTail = getTail
  this.InsertAfter = InsertAfter
  this.InsertBefore = InsertBefore
}


function getHead() {
  return this.head
}
function prepend(n) {//new node
  n.next = this.head
  this.head = n
  this.size++
}

function append(n) {//new node
  n.next = null//
  this.tail.next = n
  this.tail = n
  this.size++
}

function traverse() {
  let c = this.head
  while (c) {//exists
    //console.log(c.key)
    console.log(c.data)
    c = c.next
  }
  console.log('\n')
}

//
// exercises
//
function contains(v) {
  let c = this.head, cont;
  while (c) {//exists
    if (v == c.data) {
      cont = c.data
    }
    c = c.next
  }
  return cont

}
function getTail() {
  let c = this.head, tail;
  while (c) {
    tail = c.data
    c = c.next
  }
  return tail
}
//Metodos nuevos
function InsertAfter(n, v) {
  let c = this.head, root;
  while (c) {//exists
    if (v == c.data) {
      root = c.next
      c.next = n
      n.next = root
    }
    c = c.next
  }
}
function InsertBefore(n, v) {
  let c = this.head
  let obj_previo, root
  if (c.next == null) {
    this.prepend(n)
  } else {
    if (v != this.head.data) {
      while (c) {//exists
        if (v != c.data) {
          obj_previo = c
        } else {
          root = obj_previo.next
          obj_previo.next = n
          n.next = root
        }
        c = c.next
      }
    } else {
      this.prepend(n)
    }
  }
}