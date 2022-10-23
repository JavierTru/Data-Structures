function primos (a){
    let contador = 0;
    for (let i = 1; contador < a; i++) {
        let f = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                f = 1;
                break;
            }
        }
        if (i > 1 && f == 0) {
            console.log(i);
            contador++
        }
    }
}
primos(11);