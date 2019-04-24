
// typeof undefined // "undefined"

// typeof 0 // "number"

// typeof true // "boolean"

// typeof "foo" // "string"

// typeof {} // "object"

// typeof null // "object"  (1)

// typeof function(){} // "function"  (2)


// Символ	Описание
// \b	Backspace
// \f	Form feed
// \n	New line
// \r	Carriage return
// \t	Tab
// \uNNNN	Символ в кодировке Юникод с шестнадцатеричным кодом `NNNN`. Например, `\u00A9` -- юникодное представление символа копирайт ©


// Оператор	Использование	Описание
// Побитовое И (AND)	a & b	Ставит 1 на бит результата, для которого соответствующие биты операндов равны 1.
// Побитовое ИЛИ (OR)	a | b	Ставит 1 на бит результата, для которого хотя бы один из соответствующих битов операндов равен 1.
// Побитовое исключающее ИЛИ (XOR)	a ^ b	Ставит 1 на бит результата, для которого только один из соответствующих битов операндов равен 1 (но не оба).
// Побитовое НЕ (NOT)	~a	Заменяет каждый бит операнда на противоположный.
// Левый сдвиг	a << b	Сдвигает двоичное представление a на b битов влево, добавляя справа нули.
// Правый сдвиг, переносящий знак	a >> b	Сдвигает двоичное представление a на b битов вправо, отбрасывая сдвигаемые биты.
// Правый сдвиг с заполнением нулями	a >>> b	Сдвигает двоичное представление a на b битов вправо, отбрасывая сдвигаемые биты и добавляя нули слева.





/**
 * Return integer as float without part after dot
 * @param  {} float
 */
function intFromFloat(float)
    {integer = (float^0);}

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

    /**
 * Выдает подстроку от a и до b не включая
 * @param  {} a
 * @param  {} b
 */
str.substring(a,b);

/**
 * Выдает подстроку от и до конца
 * @param  {} a
 */
str.substring(a);

/**
 * Возвращает из str b символов начиная с a позиции
 * @param  {} a
 * @param  {} b
 */
str.substr(a,b);

/**
 * Возвращает позицию вхождения подстроки serch
 * при поиске с позиции pos
 * @param  {} serch
 * @param  {} pos
 */
str.indexOf(serch , pos);

/**
 * Return a singl-chara
 * @param  {} a
 */
str.charAt(a);

/**
 * Return length of string
 */
str.length;

/**
 * @param  {} str
 * @param  {} serch
 */
function allPos(str , serch){
    var pos = -1;
    while(( pos = str.indexOf(serch , pos+1)) !== -1 ){
        col(pos);
    }
}

/**
 * @param  {}
 */
str.toUpperCase();

/**
 * @param  {} str
 */
function f_toLowerCase(str){return str.toLowerCase();}

/**
 * Substing from position a first to position b from end
 * @param  {} a
 * @param  {} b
 */
function f_slise(str,a,b){str.slise(a,b);}


/**
 * Displase the data type
 * @param  {} a
 */
function type_of(a) {typeof a;}

/**
 * Converts from string to number
 * @param  {} str
 */
function num_on(str){+str;}

/**
 * Returns reminder of division a/b
 * @param  {} a
 * @param  {} b
 */
function ren_of_division(a,b){a%b;}

/**
 * Return records of number (str line) on the basis n
 * @param  {} str
 * @param  {} n
 */
parseInt(str,n);

/**
 * Return number n to records of number on the basis bas
 * @param  {} bas
 */
n.toString(bas);

/**
 * Substring serch presence check in string
 *  str from position
 * @param  {} str
 * @param  {} search
 * @param  {} pos
 */
function isBingoStr(str,search,pos){~str.indexOf(search, pos);}


/**
 * Return char from charCode
 * @param  {} cod
 */
function f_fromCharCode(cod){String.fromCharCode(cod);}

/**
 * Return charCode from char index of 
 * string str
 * @param  {} str
 * @param  {} index
 */
function f_charCodeAt(str , index){str.charCodeAt(index);}

/**
 * Mask of four position
 */
function maskFour(){
    var bol,a = 2,b = 4,c = 8,d = 16;
    bol = a | b | c | d;
    col(bol & a);
}

/**
 * Return all charCode from min to max index
 * @param  {} min
 * @param  {} max
 */
function allCharCode(min , max) {
    var str_ ='';
    for (var i = min; i<max ; i++){
        str_ +=i +' '+ String.fromCharCode(i) + '\n';
    }
}
/**
 * bitEncripting by the ^
 * @param  {} a
 * @param  {} any
 */
function bitEncripting(a , any){
    var b = a ^ any;
    b ^ any === a;
}

/**
 * Return volume of property object
 * @param  {} obj
 */
function volOfProp(obj){
    count = 0 ;
    for (var key in obj){
        count++;
    }
    return count;
}

/**
 * Return true if n is string contane float or !infinit+_- and !NaN
 * @param  {} n
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  
/**
 * Return last array item and removes it
 * @param  {} arr_any
 */
function arrayPop(arr_any){arr_any.pop();}

/**
 * arr_any.push(item_any) ==== arr_any(arr_any.length) = item_any
 * @param  {} arr_any
 * @param  {} item_any
 */
function arrayPush(arr_any , item_any){arr_any.push(item_any);}

/**
 * Return first array item and removes it
 * @param  {} arr_any
 */
function arrayShift(arr_any){arr_any.shift();}

