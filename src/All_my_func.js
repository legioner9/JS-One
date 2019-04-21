/**
 * Возвращает простые чила до n в консоль
 * @param  {} n
 */
function showPrime(n){
    Next: for(var i=2 ; i<=n ; i++ ){
        /*if [i] is prime => col(i) continue Next;*/
        for(var j=2 ; j<i ; j++){
            if( i%j == 0 ) continue Next;
        }
        col(i);
    }
}

/**
 * Возвращает сумму чисел до n
 * @param  {} n
 */
function sumTo(n){
    su = 0;
    for(var i = 1 ; i < n+1 ; i++){
        su += i;
    }
    return su;
}
/**
 * Возвращает последовательно числа 
 * Фиббоначи от 0 до n-1
 * @param  {} n
 */
function fib(n){
        f1 = 0;
        f2 = 1;
        if(n==0) return 1;
        else{
            
            for(var i=0; i<n ; i++){
                s2 = f1+f2;
                s1 = f2;
    
                f1 = s1;
                f2 = s2;
            }
            return f2;
        }
    }

    /**
     * Возвращает x в степени целого положительного  n
     * @param  {} x
     * @param  {} n
     */
    function pow(x,n){
        var pownn = x;
        for (var i = 1 ; i < n ; i++) {
            pownn *=x;
        }
        return pownn;
    }