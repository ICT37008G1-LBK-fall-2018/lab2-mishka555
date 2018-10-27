
for (var i = 2; i < 20; i++) {
    var isPrime = 1;
    for (p = 2; p < i; p++) {
        if (i % p == 0) {
            isPrime = 0;
        }
    }

    if(isPrime==1){
        alert(i);
    }

}