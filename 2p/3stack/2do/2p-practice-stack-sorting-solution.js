function stack(top) {
  this.data = []
  this.top = top
  this.push = push
  this.pop = pop
  this.full = full
  this.empty = empty
  this.show = show
  this.peek = peek

  function push(element) {
    if (this.full()) {
      console.log("La pila no puede introducir mas elementos")
    } else {
      this.data.unshift(element)
    }
  }

  function pop() {
    if (this.empty()) {
      console.log("La pila no puede eliminar mas valores")
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
    let show = ""
    for (let i = 0; i < this.data.length; ++i) {
      show += this.data[i] + "\n"
    }
    return show
  }

  function peek() {
    return this.data[0]
  }
}

var manija = [0,0,0,0,0]
var time = [0,0,0,0,0]

function ordenamiento_pila(x) {
  for (let i = 1; i <= 5; i++) {
    var start = Date.now()
    let stack1 = new stack(x);
    let stack2 = new stack(x);
    let r,j = 1;
    stack1.push(Math.floor(Math.random() * (x - 1) + 1))
    
    while (j < x) {
      while (!stack2.empty()) {
        stack1.push(stack2.pop())
        manija[i-1]++
      }
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (r <= stack1.peek() && !stack1.empty()) {
        stack2.push(stack1.pop())
        manija[i-1]++
      }
      if (r >= stack1.peek() || stack1.empty()) {
        stack1.push(r)
        manija[i-1]++
      }
      j++
    }
    while (!stack2.empty()) {
      stack1.push(stack2.pop())
    }
    var end = Date.now()
    console.log(stack1.show())
    console.log("pasos: " + manija[i-1])
    time[i - 1] = end - start
    console.log("tiempo:"+ time[i - 1] + "ms")
  }
}
ordenamiento_pila(10)
manija[5] = (manija[0] + manija[1] + manija[2] + manija[3] + manija[4])
time[5] = (time[0] + time[1] + time[2] + time[3] + time[4])
console.log("pasos totales: " + manija[5])
console.log("tiempo total: " + time[5] + "ms")
console.log("pasos promedio: " + manija[5]/5)
console.log("tiempo promedio: " + time[5]/5 + "ms")
ordenamiento_pila(100)
manija[5] = (manija[0] + manija[1] + manija[2] + manija[3] + manija[4])
time[5] = (time[0] + time[1] + time[2] + time[3] + time[4])
console.log("pasos totales: " + manija[5])
console.log("tiempo total: " + time[5] + "ms")
console.log("pasos promedio: " + manija[5]/5)
console.log("tiempo promedio: " + time[5]/5 + "ms")
ordenamiento_pila(1000)
manija[5] = (manija[0] + manija[1] + manija[2] + manija[3] + manija[4])
time[5] = (time[0] + time[1] + time[2] + time[3] + time[4])
console.log("pasos totales: " + manija[5])
console.log("tiempo total: " + time[5] + "ms")
console.log("pasos promedio: " + manija[5]/5)
console.log("tiempo promedio: " + time[5]/5 + "ms")