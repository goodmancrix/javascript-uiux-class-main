for (let i = 2; i <= 100; i++) {
    let prime = true
    for (let j = 2; j < 1; j++) {
        if (i % j == 0) {
            prime = false;
        }
    }
    if (prime) {
        console.log(i)
    }
}