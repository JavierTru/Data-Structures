function queue() {
    this.data = []
    this.top = 5
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.full = full
    this.empty = empty
    this.show = show

    function enqueue(element) {
    if (this.full()) {
      console.log("La cola no puede introducir mas elementos")
    }
    else {
      this.data.push(element)
    }
  }
  
  function dequeue() {
    if (this.empty()) {
      console.log("La cola no puede eliminar mas valores")
    }
    else {
      return this.data.shift()
    }
  }
  
  function full() {
    if (this.data.length === this.top)
      return true
    else
      return false
  }
  
  function empty() {
    if (this.data.length === 0)
      return true
    else
      return false
  }
  
  function show() {
    let s = ""
    for (let i = 0; i < this.data.length; ++i) {
      s += this.data[i] + "\n"
    }
    return s
  }
}

let cola = new queue()

cola.enqueue('a')
cola.enqueue('b')
cola.enqueue('c')
cola.enqueue('d')
cola.enqueue('e')
console.log(cola.show())
cola.enqueue('f')
cola.dequeue()
cola.dequeue()
cola.dequeue()
cola.dequeue()
cola.dequeue()
cola.dequeue()