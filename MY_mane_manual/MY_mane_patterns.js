/*
 * Copyright (c) 2019. Legioner9@inbox.ru
 */

/* TODO: PTR template - replase  */

option = {
    template: 'h : m : s'
}
let H = 'H';
option.template.replace('h', H);

/* TODO: PTR mane class prototype definder  */

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk =
    function () {
        col("ходит " + this.name);
    }

function Rabbit(name) {
    Animal.apply(this, arguments);
}


Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.walk = function () {
    Animal.prototype.walk.apply(this, arguments);
    col("прыгает " + this.name);
};

/* TODO: PTR maskFour ligic mask  */
function maskFour() {
    var bol, a = 2, b = 4, c = 8, d = 16;
    bol = a | b | c | d;
    col(bol & a);
}

/* TODO: PTR OOP State ( in to ADD proto Class )  */
function MenuOpenClose(state) {
    this.State_ = state || this.State_Close;
}

MenuOpenClose.prototype.State_Close = 0;
MenuOpenClose.prototype.State_Open = 1;

MenuOpenClose.prototype.inClose = function () {
    //CODE inClose
    this.State_ = this.State_Close;
}

MenuOpenClose.prototype.inOpen = function () {
    //CODE inOpen
    this.State_ = this.State_Open;
}

MenuOpenClose.prototype.openTo = function () {
    //OPEN code
    return `state is ${this.State_} result OPEN`;
}

MenuOpenClose.prototype.closeTo = function () {
    //CLOSE code
    return `state is ${this.State_} result CLOSE`;
}

MenuOpenClose.prototype.decodingState = function () {
    try {
        switch (this.State_) {
            case this.State_Close :
                return this.closeTo();
            case this.State_Open :
                return this.openTo();
            default : {
                col(`state is uncorrect = ${this.State_}`)
                new Error(`state is uncorrect`)
            }
        }
    } catch (e) {
        if (e.message == `state is uncorrect`) {
            //    Code for treat err State_ ( open , close)
        } else {
            throw e;
        }
    }
}

MenuOpenClose.prototype.resumeState = function () {
    col(this.decodingState());
}

function MenuOpenCloseAnimate(State) {
    MenuOpenClose.apply(this, arguments);
}

MenuOpenCloseAnimate.prototype = Object.create(MenuOpenClose.prototype);
MenuOpenCloseAnimate.prototype.constructor = MenuOpenCloseAnimate;

MenuOpenCloseAnimate.prototype.State_Animate = 2;

MenuOpenCloseAnimate.prototype.animateTo = function () {
    //CODE animateTo
    return `state is ${this.State_} result ANYMATE`;
}

MenuOpenCloseAnimate.prototype.decodingState = function () {
    switch (this.State_) {
        case this.State_Animate :
            return this.animateTo();
        default : {
            return this.__proto__.__proto__.decodingState.apply(this, arguments);
        }
    }
}

MenuOpenCloseAnimate.prototype.inAnimate = function () {
    this.State_ = this.State_Animate;
    col(new Date());
    col(`state is ${this.State_}`);
    this.tm = setTimeout(() => {
            this.__proto__.__proto__.inOpen.apply(this, arguments);
            col(new Date());
            col(`state is ${this.State_}`);
        }
        , 1000);
}

let me = new MenuOpenCloseAnimate();
col(me instanceof MenuOpenCloseAnimate);
col(me instanceof MenuOpenClose);
// debugger;
// me.resumeState();
// me.inAnimate();
// me.resumeState();

/* TODO: PTR Generator of iterator  */
class Users {
    constructor(users) {
        this.users = users;
        this.len = users.length;
    }

    //это генератор, который возвращает итератор
    * getIterator() {
        for (let i in this.users) {
            if (!this.users.hasOwnProperty(i)) continue;
            yield this.users[i];
            //хотя эта команда вызывается внутри цикла,
            //yield выполняется лишь один раз за вызов
        }
    }
}

const allUsers = new Users([
    {name: 'raja'},
    {name: 'john'},
    {name: 'matt'},
]);

//allUsersIterator называют итератором
// const allUsersIterator = allUsers.getIterator();

for (const u of allUsers.getIterator()) {
    col(u.name);
}

/* TODO: PTR [Symbol.iterator] as method of Obj  */
const users = [
    {name: 'raja'},
    {name: 'john'},
    {name: 'matt'},
];

users[Symbol.iterator] = function () {

    let i = 0;
    // let users = this.users;

    //этот возвращаемый объект называется итератором
    return {
        next() {
            // i++ or other code in each iteration
            if (i < users.length) {
                return {done: false, value: users[i++]};
            }
            return {done: true};
        },
    };
}

for (const u of users) {
    col(u.name);
}

/* TODO: PTR [Symbol.iterator] for array as method of CLASS  */
class Us {
    constructor(users) {
        this.users = users;
    }

    [Symbol.iterator]() {
        let i = 0;
        let users = this.users;

        //этот возвращаемый объект называется итератором
        return {
            next() {
                // i++ or other code in each iteration
                if (i < users.length) {
                    return {done: false, value: users[i++]};
                }
                return {done: true};
            },
        };
    }
}

// var users = new Us([
//     {name: 'raja'},
//     {name: 'john'},
//     {name: 'matt'},
// ]);

for (const u of users) {
    col(u.name);
}

/* TODO: PTR [Symbol.iterator] for object as method of CLASS and as method of Obj  */
class Us {
    constructor(users) {
        this.users = users;
    }

    [Symbol.iterator]() {

        let i = 0;
        let user = this.users;

        col(user);//return initial object
        //этот возвращаемый объект называется итератором
        return {
            next() {

                if (i < Object.keys(user).length) {

                    let key = Object.keys(user)[i++];
                    return {
                        done: false, value:
                            {key: key, value: user[key]} //return key and value[key]
                    };
                }
                return {done: true};
            }

        };
    }
}

const users = {
    a: {
        name: 'raja'
    },
    b: {
        name: 'john'
    },
    c: {
        name: 'matt'
    }
};
users.__proto__[Symbol.iterator] = function () {

    let i = 0;
    let user = this;

    col(user);//return initial object
    //этот возвращаемый объект называется итератором
    return {
        next() {

            if (i < Object.keys(user).length) {

                let key = Object.keys(user)[i++];

                return {
                    done: false, value:
                        {key: key, value: user[key]}//return key and value[key]
                };
            }
            return {done: true};
        }

    };
}
for (const u of users) {
    col(u);
}

let us_class = new Us({
    a: {
        name: 'raja'
    },
    b: {
        name: 'john'
    },
    c: {
        name: 'matt'
    }
})
for (let u_c of  us_class) {
    col(u_c);
}

/* TODO:PTR [Symbol.iterator] inside in Object simple from to */
let range = {
    _from: 1,
    to: 5,

    [Symbol.iterator]() {
        return this;
    },

    next() {
        if (!this.current) {
            this.current = this._from
        }
        if (this.current <= this.to) {
            return {
                done: false,
                value: this.current++
            }
        } else delete this.current
        return {
            done: true
        }
    }
}
debugger;
for (let u of range) {
    col(u);
}
col(Math.max(...range));

/* TODO: PTR *[Symbol.iterator]  Genrrator-Iterator  */
class Users {
    constructor(users) {
        this.users = users;
        this.len = users.length;
    }

    //это генератор, который возвращает итератор
    * [Symbol.iterator]() {
        for (let i in this.users) {
            if (!this.users.hasOwnProperty(i)) continue;
            yield (this.users[i].name + ' ' + i);
            //хотя эта команда вызывается внутри цикла,
            //yield выполняется лишь один раз за вызов
        }
    }
}

const allUsers = new Users([
    {name: 'raja'},
    {name: 'john'},
    {name: 'matt'},
]);

for (const u of allUsers) {
    col(u);
}

/* TODO:PTR Promise.all  urls.map(__my_XMLhttpGet)  */
let urls = [
    '/article/promise/user.json',
    '/article/promise/guest.json'
];

Promise.all(urls.map(__my_XMLhttpGet))
    .then(results => {
        alert(results);
    });

/* TODO: PTR FUNC* flat asinc code Generator js.ru fetch JSON (git avatar)  */
// генератор для получения и показа аватара
// он yield'ит промисы
function* showUserAvatar() {

    let userFetch = yield fetch('user.json');
    let userInfo = yield userFetch.json();

    let githubFetch = yield fetch(`https://api.github.com/users/${userInfo.name}`);
    let githubUserInfo = yield githubFetch.json();

    let img = new Image();
    img.src = githubUserInfo.avatar_url;
    img.className = "promise-avatar-example";
    document.body.appendChild(img);

    yield new Promise(resolve => setTimeout(resolve, 3000));

    img.remove();

    return img.src;
}

// вспомогательная функция-чернорабочий
// для выполнения промисов из generator
function execute(generator, yieldValue) {

    let next = generator.next(yieldValue);

    if (!next.done) {
        next.value.then(
            result => execute(generator, result),
            err => generator.throw(err)
        );
    } else {
        // обработаем результат return из генератора
        // обычно здесь вызов callback или что-то в этом духе
        col(next.value);
    }

}

execute(showUserAvatar());


/* TODO: PTR Proxy Obect get/set delete in */
let target = {};
let handler = {
    get(target, prop) {
        if (target[prop]) {
            col(`reading prop = ${prop}`);
            return target[prop]
        } else {
            col(` target[${prop}] is not exist `)
        }

    },
    set(target, prop, value) {
        col(`setting  ${prop} is ${value}`)
        target[prop] = value;
        return true;
    },
    deleteProperty(target, prop) {
        col('delete is not resolve')
        return true;
    },
    has(target, prop) {
        return true;// ... in target alvays true
    }
}

let target = {};
let proxy = new Proxy(target, handler);
proxy['a'];
proxy['a'] = 'aa';
proxy['a'];
col(target['a']);
proxy['b'] = 'bb';

col('t' in target); //always true
delete proxy['a'];
delete proxy['b'];
delete proxy['c'];

/* TODO: PTR Proxy Function construct apply  */
let sum = function (a, b) {
    return a + b;
}

let proxy_func = new Proxy(sum, {
    construct(sum, argumentList) {
        col(`run new with ${argumentList}`);
        return new sum(...argumentList);
    },
    apply(target_func, this_, argumentList) {
        col(`run new with ${argumentList} and this =`);
        col(this_);
        return sum.apply(this_, argumentList);
    }
})

/* TODO: PTR Class with Class [Symbol.iterator] DoJo  */
class MyObjectWithIterator {
    constructor(callBack, ...args) {
        this.callBack = callBack;
        this.args = args;// array of arguments
    }

    addArgs(...add_args) {
        this.args = this.args.concat(add_args);
    }

    [Symbol.iterator]() {
        return new MyIterator(this.args, this.callBack);
    }
}

class MyIterator {
    constructor(array, callBack) {
        this.array = array;
        this.callBack = callBack;
        this.index = 0;
    }

    next() {
        let result = {value: undefined, done: true};

        if (this.index < this.array.length) {
            result.value = this.callBack(this.array[this.index]);
            result.done = false;
            this.index++;
        }
        return result;
    }

}


let db_arr = new MyObjectWithIterator(a => 2 * a, 1, 2, 3);
debugger;
// let sn = db_arr[Symbol.iterator]().next();


for (let volume of db_arr) {
    col(volume);
}


/* TODO: PTR Class asinc/await get JSON user from jsonplaceholder.typicode.com DoJo  */
const fetch = require('node-fetch');

class DataServise {
    constructor(url) {
        this.url = url;
    }

    async getUser(id) {
        try {
            let response = await fetch(`${this.url}/users/${id}`);
            let data_user = await response.json();
            return data_user;
        } catch (e) {
            throw new Error('RESPONSE from User Post Poor(((')
        }
    }

    async getUserPosts(userId) {
        try {
            let response = await fetch(`${this.url}/posts?userId=${userId}`);
            let data_user = await response.json();
            return data_user;
        } catch (e) {
            throw new Error('POST from server is poor(((')
        }
    }

    async getPostsComments(postId) {
        try {
            let response = await fetch(`${this.url}/comments?postId=${postId}`);
            let data_user = await response.json();
            return data_user;
        } catch (e) {
            throw new Error('COMMENTS from server is poor(((')
        }
    }
}


mane = async () => {
    let dataServise = new DataServise('https://jsonplaceholder.typicode.com')
    try {
        let user = await dataServise.getUser(1);
        let posts = await dataServise.getUserPosts(user.id);
        let commernts_first = await dataServise.getPostsComments(posts[0].id);
        console.log('USER IS Comments ==', commernts_first);
    } catch (e) {
        console.log('no User (((', e);
    }
}

mane();

/* TODO: PTR  closest Js.Ru */
// <ul>
// <li class="chapter">Глава I
// <ul>
// <li class="subchapter">Глава <span class="num">1.1</span></li>
// <li class="subchapter">Глава <span class="num">1.2</span></li>
// </ul>
// </li>
// </ul>

let numberSpan = document.querySelector('.num');

// ближайший элемент сверху подходящий под селектор li
col(numberSpan.closest('li').className) // subchapter

// ближайший элемент сверху подходящий под селектор .chapter
col(numberSpan.closest('.chapter').tagName) // LI

// ближайший элемент сверху, подходящий под селектор span
// это сам numberSpan, так как поиск включает в себя сам элемент
col(numberSpan.closest('span') === numberSpan) // true

/* TODO: PTR DOM Collection as Arr js.ru  */
let elems = document.documentElement.childNodes;
elems = Array.prototype.slice.call(elems); // теперь elems - массив
elems = [].slice.call(elems);

/* TODO: PTR evaluate iterateNext()  */
let headings = document.evaluate("//h2", document, null,
    XPathResult.ANY_TYPE, null
);

let thisHeading = headings.iterateNext();
let alertText = "Заголовки уровня 2 этого документа:\n"

while (thisHeading) {
    alertText += thisHeading.textContent + "\n"
    thisHeading = headings.iterateNext();
}
col(alertText);
// let xpathResult = document.evaluate(
//     XPathExpression,
//     ContextNode,
//     namespaceResolver,
//     ResultType,
//     result
// );
//    xpathExpression - строка, содержащая выражение xpath, которое нужно вычислить;
//     contextNode - узел документа, по отношению к которому должно быть вычислено выражение xpath;
//     namespaceResolver - функция, принимающая строку с префиксом пространства имен из xpathExpression и возвращающая строку, содержащаю URI, которому соответствует этот префикс. Она дает возможность проеобразования между префиксами, используемыми в выражениях xpath и (возможно отличными) префиксами, используемыми в документе;
//     resultType - числовая константа, указывающая тип возвращаемого результата. Эти константы доступны в глобальных объектах XPathResult и определены в соответствующем разделе спецификации Xpath. Для большинства целей можно передавать XPathResult.ANY_TYPE, что приводит к возврату результата выражения Xpath в наиболее естественном виде;
//     result - существующий XPathResult, используемый для результатов. Передача null приводит к созданию нового XPathResult.
/* TODO: PTR Exaple XPath all tags(.) in area of serching  */
document.evaluate(".// h2", document.body, null, XPathResult.ANY_TYPE, null);

/* TODO: PTR Exaple XPath all tags  */
//Пример подсчета всех ссылок в вашем документе - всего один запрос XPath
let linkCount = document.evaluate('count (// a [@href])', document, null, XPathResult.NUMBER_TYPE, null).getNumberValue();

/* TODO: PTR Exaple XPath without an alt tag  */
// И для получения списка всех изображений без тега alt:
let imgIterator = document.evaluate('//img[not(@alt)]', document, null, XPathResult.ANY_TYPE, null);

/* TODO: PTR Exaple XPath first LI element  */
// Итак, чтобы найти первый элемент LI из всех тегов UL:
var firstLiIterator = document.evaluate('//ul/li[1]', document, null, XPathResult.ANY_TYPE, null);

/* TODO: https://codebeautify.org/Xpath-Tester example */
// <root xmlns:foo="http://www.foo.org/" xmlns:bar="http://www.bar.org">
//     <employees>
//     <employee id="1">Johnny Dapp</employee>
// <employee id="2">Al Pacino</employee>
// <employee id="3">Robert De Niro</employee>
// <employee id="4">Kevin Spacey</employee>
// <employee id="5">Denzel Washington</employee>
//
// </employees>
// <foo:companies>
// <foo:company id="6">Tata Consultancy Services</foo:company>
// <foo:company id="7">Wipro</foo:company>
//     <foo:company id="8">Infosys</foo:company>
//     <foo:company id="9">Microsoft</foo:company>
//     <foo:company id="10">IBM</foo:company>
//     <foo:company id="11">Apple</foo:company>
//     <foo:company id="12">Oracle</foo:company>
//     </foo:companies>
//     </root>
// Select the 'root' element
// (/root)

//Select all 'employee' elements that are direct children of the 'employees' element.
// (/root/employees/employee)

//Select all 'company' elements regardless of their positions in the document.
// (//foo:company)

//5. Select the 'id' attributes of the 'company' elements regardless of their positions in the document.
// (//foo:company/@id)

//Select the textual value of first 'employee' element.
// (//employee[1]/text())

//Select the last 'employee' element.
// (//employee[last()])

//Select the first and second 'employee' elements using their position.
// /(/employee[position() < 3])

//Select all 'employee' elements that have an 'id' attribute.
// (//employee[@id])

//Select all 'employee' nodes with the 'id' attribute value lower or equal to '3'.
// (//employee[@id<=3])

//Select all the children of the 'companies' node.
// (/root/foo:companies/*)

// Select all the elements in the document.
// (//*)

// Select all the 'employee' elements AND the 'company' elements.
// (//employee|//foo:company)

//Select the name of the first element in the document. (
// name(//*[1]))

//Select the string representation value of the 'id' attribute of the first 'employee' element.
// string(//employee[1]/@id)

//Select the length of the first 'employee' element's textual value.
// string-length(//employee[1]/text())

//Select the local name of the first 'company' element, i.e. without the namespace.
// local-name(//foo:company[1])

// Select the number of 'company' elements.
// count(//foo:company)

// Select the sum of the 'id' attributes of the 'company' elements.
// sum(//foo:company/@id)

//запрос для поиска элементов H2, содержащих текст "XPath", будет выглядеть так:
// (//h2[contains(., "XPath")])

/* TODO: http://xpather.com/ traning */

/* TODO: reference-specification-type  */
let us = {
    surname: 'doby )))',
    sayHi(a) {
        let tr = () => {
            col(`Hi ${a} ... ${this.surname}`);
        }
        tr();
    },
}

us.sayHi('YU');// this correct reference-specification-type
let yut = us.sayHi;
yut('vfvd gb'); // this underfind !!! reference-specification-type
//after =

/* TODO: [Symbol.toPrimitive](hint)   */
let user_ = {
    name: "John",
    money: 1000,
    [Symbol.toPrimitive](hint) {
        col(`hint = "${hint}"`);
        return hint == "string" ? `Name : ${this.name}` : this.money;
    }
}
let user_s = String(user_);
let user_n = Number(user_);

/* TODO: toString in prototype own implimentation   */
let Dog = function (name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
}

let theDog = new Dog('Болтушка', 'лабрадор');
let theDog_str_default = theDog.toString();
Dog.prototype.toString = function () {
    let _ret = `this.name ="${this.name}" this.breed ="${this.breed}"`;
    return _ret;
}
Dog.prototype.constructor = Dog;
let theDog_str_oure = theDog.toString

/* TODO: selfcolled new Func  new.target */
let User = function (name) {
    if (!new.target) {
        col(`1 new.target = ${new.target}`);
        return new User(name);
    }
    this.name = name;
}

let us = User('bgbf');
let us_new = new User('yuio');
col(us.name);
col(us_new.name);

/* TODO: new Func with RETURN EMPTY  */
let Us = function (name) {
    this.name = name;
    return;
}

let us_1 = new Us('f');
let us_2 = new Us('f').name;
let us_3 = (new Us('f')).name;
let us_4 = new Us;

/* TODO: new Func with RETURN Object  */
let Us_ret = function (name) {
    this.name = name;
    return {name: 'ttt'};
}

let us_1_ret = new Us_ret('f');
let us_2_ret = new Us_ret('f').name;
let us_3_ret = (new Us_ret('f')).name;
let us_4_ret = new Us_ret;

/* TODO: new Func    */
let Us_meth = function (name) {
    this.name = name;

    this.SayHi = function () {
        col(`_sayHi ${this.name}`)
    }
    return new.target ?
        this :
        {
            name,
            sayHi() {
                col(`_sayHi ${name}`)
            },
        };
}

/* TODO: Object as context for collback in methods  */
let user_ = {
    age: 14,
    younger(age) {
        return age > this.age;
    }
};

let users_ = [
    {age: 12},
    {age: 16},
    {age: 32}
];

let users_filt = users_.filter(item => user_.younger(item.age), user_);

/* TODO: Pattern MethInPlase and MethReturn  */
/* TODO:  _$_CIP ==== Pttern CangeInPlace */
/* TODO:  _$_RR ==== Pttern ReturnRefact */


/* TODO: Pattern Pipe of Functions as reduce  */
let __my_pipeOfSetFunctions = (...function_set) => {
    return (input) => function_set.reduce((res, func, ind, arr) => func(res)
        , input)
}
const f1 = x => 2 * x;
const f2 = x => x ** 3;
const f3 = x => x - 100;
debugger;
let set_functions = [f1, f3, f2, f1]
// let h_1 = __my_pipeOfSetFunctions(...set_functions)(2);


/* TODO: __my_map_$_CIP Pattern Tramsform Array.meth_$_RR ====> _$_CIP  */
/* TODO: __my_map_$_CIP Pattern Transfer  thisArg to Array.meth */
let __my_map_$_CIP = function (arr, callback_map, thisArg) {
    let temp_arr = arr.map(callback_map, thisArg);
    arr.splice(0, arr.length, ...temp_arr);
}
let arg_for_map = {
    const_a: 5,
    call_back_for_map: function (x) {
        return this.const_a * x
    },
}
// __my_map_$_CIP(aaaa, arg_for_map.call_back_for_map, arg_for_map);