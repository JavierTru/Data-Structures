function queue(top) {
    this.data = []
    this.top = top
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.full = full
    this.empty = empty
    this.show = show
    this.peek = peek

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

function peek() {
  return this.data[0]
}
  }

var manija = [0,0,0,0,0]
var time = [0,0,0,0,0]

function ordenamiento_cola(x) {
  for (let i = 1; i <= 5; i++) {
    var start = Date.now()
    let queue1 = new queue(x);
    let queue2 = new queue(x);
    let r,j = 1;

    queue1.enqueue(Math.floor(Math.random() * (x - 1) + 1))
    while (j < x) {
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (!queue1.empty()) {
        queue2.enqueue(queue1.dequeue())
        manija[i-1]++
      }
      while (r > queue2.peek()) {
        queue1.enqueue(queue2.dequeue())
        manija[i-1]++
      }
      if (queue2.empty()) {
        queue1.enqueue(r)
        manija[i-1]++
      }
      if (r <= queue2.peek()) {
        queue1.enqueue(r)
        manija[i-1]++
      }
      while (!queue2.empty()) {
        queue1.enqueue(queue2.dequeue())
      }
      j++
    }
    var end = Date.now()
    console.log(queue1.show())
    console.log("pasos: "+manija[i-1])
    time[i - 1] = end - start
    console.log("tiempo: " + time[i - 1] + "ms")
  }
}
ordenamiento_cola(10)
manija[5] = (manija[0] + manija[1] + manija[2] + manija[3] + manija[4])
time[5] = (time[0] + time[1] + time[2] + time[3] + time[4])
console.log("pasos totales: " + manija[5])
console.log("tiempo total: " + time[5] + "ms")
console.log("pasos promedio: " + manija[5]/5)
console.log("tiempo promedio: " + time[5]/5 + "ms")
ordenamiento_cola(100)
manija[5] = (manija[0] + manija[1] + manija[2] + manija[3] + manija[4])
time[5] = (time[0] + time[1] + time[2] + time[3] + time[4])
console.log("pasos totales: " + manija[5])
console.log("tiempo total: " + time[5] + "ms")
console.log("pasos promedio: " + manija[5]/5)
console.log("tiempo promedio: " + time[5]/5 + "ms")
ordenamiento_cola(1000)
manija[5] = (manija[0] + manija[1] + manija[2] + manija[3] + manija[4])
time[5] = (time[0] + time[1] + time[2] + time[3] + time[4])
console.log("pasos totales: " + manija[5])
console.log("tiempo total: " + time[5] + "ms")
console.log("pasos promedio: " + manija[5]/5)
console.log("tiempo promedio: " + time[5]/5 + "ms")