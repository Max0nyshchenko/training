function insertName() {
    var x = Date();
    
    console.log(x);

}

function printTime() {
    var x = new Date();
    var hours = x.getHours();
    var mins = x.getMinutes();
    var millsec = x.getMilliseconds();
    console.log(hours+':'+mins+':'+millsec);
}
setInterval(printTime, 3500);

var el = document.getElementById('myimg');
el.src = '../pictures/alex-azabache-2EMn5z1416I-unsplash.jpg';

function changeToUtube() {
    var link = document.getElementsByTagName('a');
    link[0].href = 'https://www.youtube.com';
    link[0].innerHTML = 'youtube';
    link[0].style.color = 'white';
  
}

var btn = document.createElement('button');
var node = document.createTextNode('text node butn');
btn.appendChild(node);

var div = document.getElementById('div2');
div.appendChild(btn);

btn.parentNode.removeChild(btn);



function removeImg() {
    var parent = document.getElementsByTagName('body');
    var child = document.getElementById('myimg');
    parent[0].removeChild(child);
    var removeBtn = document.getElementById('imgRemoveBtn');
    

    parent[0].replaceChild(btnImgBack, removeBtn);
}

var btnImgBack = document.createElement('button');
var btnImgBackText = document.createTextNode('get image back');
btnImgBack.appendChild(btnImgBackText);


var position = 0;
var box = document.getElementById('box');
var t = setInterval(move, 20);


function move() {
    if (position >= 617) {
        clearInterval(t);

    }
    else {
        position += 1;
        box.style.left = position + 'px';
    }
}


function time() {
    var x = document.getElementById('time');
    x.innerHTML = Date();
}

function change() {
    var x = document.getElementById('name');
    x.value = x.value.toUpperCase();
}

var xxl = document.getElementById('randomNumber');
xxl.addEventListener('click', randomNumber);

function randomNumber() {
    
    alert(Math.random());
    xxl.removeEventListener('click', randomNumber);
}

// Slider
var images = [
    '../pictures/daniel-j-schwarz-ia5t0HhMFyw-unsplash.jpg',
    '../pictures/eberhard-grossgasteiger-wZ8KKGUHxtU-unsplash.jpg',
    '../pictures/eberhard-grossgasteiger-EHW2HZAOb54-unsplash.jpg'
]
var num = 0;

function next() {
    var slider = document.getElementById('slider');
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById('slider');
    num--;
    if (num<0) {
        num = images.length-1;
    }
    slider.src = images[num];
}

function validate() {
    var n1 = document.getElementById('num1');
    var n2 = document.getElementById('num2');
    if (n1.value != '' && n2.value != '') {
        if (n1.value == n2.value) {
            return true
        }
    }
    alert('the values need to be equal and not blank');
    return false;
}


let name4 = 'vasia';
let msg4 = `welcome ${name4}!`;
console.log(msg4);

let obj = {a:1, b:2, c:3};
for (let i in obj) {
    console.log(i)
}

let list = ['s', 'ss', 'sss'];
for (let vv of list) {
    console.log(vv)
}

const add = (x,y) => {
    let sum23 = x+y;
    console.log(sum23);
}
add(10,223);

const greet = x => 'welcome' + x;
console.log(greet('max'));

const greet2  = () => 'privet';
console.log(greet2());

var aRR = [2, 3, 4, 5];
aRR.forEach(function(el) {
    console.log(el*2);
});

const aaR = [22,33,44,55];
aaR.forEach(v => {
    console.log(v+100);
});

function tesT(a, b=10, c=30) {
    return a+b+c;
}
console.log(tesT(10 + 'test'));

const TesT = (a, b=30, c=30) => {
    return a+b+c;
}
console.log(TesT(40));

let tree = {
    weight: 30,
    height: 11,
    grow() {
        this.height += 3;
    }
};
console.log(tree.height);
tree.grow();
console.log(tree.height);

let prop = 'name';
let secondProp = 'surname';
let id  = '1234';
let mobile = '0989776';
let user = {
    [prop]: 'john',
    [secondProp]: 'Doe',
    [`user_${id}`]: `${mobile}`
}
console.log(user.name);
console.log(user.surname);
console.log(user.user_1234);


var f = 0;
var lKeep = {
    ['foo' + ++f]: f,
    ['foo' + ++f]: f,
    ['foo' + ++f]: f
}
console.log(lKeep.foo1);
console.log(lKeep.foo2);
console.log(lKeep.foo3);

var parram = 'size';
var config = {
    [parram]:12,
    ['mobile' + parram.charAt(0).toUpperCase() + parram.slice(1)]: 3,
    ['super'+'Mobile']:33
}
console.log(config.size);
console.log(config.mobileSize);
console.log(config.superMobile);

// ES6

let person1 = {
    name: 'lack',
    age: 19,
    sex: 'male'
}
let student1 = {
    name: 'Bob',
    age: 22,
    sex: 'male'
}
let newStudent = Object.assign({}, student1, person1);
console.log(newStudent);
let student2 = Object.assign({}, student1, {name: 'jarad'});
console.log(student1, student2);

let obj2 = {h12:120, s12: true};
let {h12, s12 } = obj2;
console.log(h12);
console.log(s12);


function containAll(ARR) {
    for (let k = 1; k < arguments.length; k++) {
        let num33 = arguments[k];
        if (ARR.indexOf(num33) === -1) {
            return false;
        }
    }
    return true;
}

let xxx = [2, 4, 6, 8, 10];
console.log(containAll(xxx, 8, 10, 2));


function ContainAll(arra, ...nums) {
    for (let num44 of nums) {
        if (arra.indexOf(num44) === -1) {
            return false;
        }
    }
    return true;
}

let xxxx = [1,5,9,23];
console.log(ContainAll(xxxx, 324, 12, 213, 12312, 123));
console.log(ContainAll(xxxx, 23, 1));

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width= width;

    }
}

const square = new Rectangle(2,3);
console.log(square.height);

var triangle = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
const poster = new triangle(9,0);
console.log(poster.height);

var Loh = class {
    constructor(weight, salad) {
        this.weight = weight;
        this.salad = salad;
    }
}

var porch = new Loh(220, 'paperroni');
console.log(porch.salad);

class Huyangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;

    }

    get area() {
        return this.height * this.width;
    }
}

const LoL = new Huyangle(8,8);

console.log(LoL.area);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const pp1 = new Point(33, 67);
const pp2 = new Point(13, 87);

console.log(Point.distance(pp1, pp2));


class Animal {
    constructor(name) {
        this.name = name;

    }

    speak() {
        console.log(this.name + ' makes a noise');
    }
}

class Dog extends Animal {
    koko() {
        super.speak();
        console.log(this.name + ' is koko.');
    }
}

let dog = new Dog('Chappa');
dog.koko();


let map = new Map();
map.set('k1', 'v1').set('k2', 'v2');
console.log(map.get('k1'));
console.log(map.has('k2'));

for (let kv of map.entries()) {
    console.log(kv[0] + ' : ' + kv[1])
}

let settt = new Set();
settt.add(89).add(34).add(67).add(78);
console.log(settt.has(89));

for (let v of settt.values()) {
    console.log(v);
}

setTimeout(function(){
    console.log('work1');
    setTimeout( function() {
        console.log('work2');
    }, 2000);
}, 2000);


function asyncFunc(work) {
    return new Promise( function(resolve, reject) {
        if (work === '')
            reject(Error('nothing'));
        setTimeout( function() {
            resolve(work);
        }, 2000);
    });
}

asyncFunc('work 1')
.then( function(result) {
    console.log(result);
    return asyncFunc('work 2');
}, function(error) {
    console.log(error);
})
.then( function(result) {
    console.log(result);
}, function(error) {
    console.log(error);
});

let myIterableObj = {
    [Symbol.iterator] : function* () {
        yield 1; yield 2; yield 3;
    }
};
console.log([...myIterableObj]);


function changeFI(arr, num) {
    arr.push(num);
    return arr.shift();
}

var myArra = [1, 2, 3, 4, 5];
console.log(changeFI(myArra, 6));

function returnCase(val) {
    answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
        default:
            answer = 'stuff';
            break;
    }
    return answer;
}

console.log(returnCase(4));


function orLess(a,b) {
    return a>b;
}

console.log(orLess(12, 44));

var collection = {
    '2548': {
        'album': 'Slippery when wet',
        'artist': 'Bon Jovi',
        'tracks': [
            'let it rock',
            'u give a love bad name'
        ]

    },
    '2469': {
        'album': '1999',
        'artist': 'Prince',
        'tracks': [
            '1999',
            'little red corvette'
        ]
    },
    '1245': {
        'artist': 'robert palmer',
        'tracks': []    
    },
    '5439': {
        'album': 'ABBA Gold'
    }

}

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    if (value === '') {
        delete collection[id][prop];
    } else if (prop === 'tracks') {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }

    return collection;
}

console.log(updateRecords(5439, 'artist',' ABBA'));

var rarray = [];
var iarray = 0;
while (iarray < 7) {
    rarray.push(iarray);
    iarray++;
}
console.log(rarray);


function multiplyArr(arr) {
    var product = 1;

    for (var i = 0; i < arr.lenght; i++) {
        for (var j=0; j<arr[i].lenght; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

var product = multiplyArr([[2,3,4,6], [4,6,7], [3,2]]);

console.log(product);

var contacts =[
    {
        'firstName': 'Akira',
        'lastName': 'Laine',
        'number': '098123747878',
        'likes': [
            'pizza',
            'coding',
            'brownie points'
        ]
    },
    {
        'firstName': 'Harry',
        'lastName': 'Potter',
        'number': '098127878',
        'likes': [
            'magic',
            'hogwards',
            'ace points'
        ]
    },
    {
        'firstName': 'sherloc',
        'lastName': 'holmes',
        'number': '098127878',
        'likes': [
            'pizza',
            'smoking',
            'marijuanna'
        ]
    },
    {
        'firstName': 'Joanne',
        'lastName': 'Loine',
        'number': '09847878',
        'likes': [
            'heels',
            'kizomba',
            'aafrica'
        ]
    }
]

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || 'no such property';
        }
    }

    return 'No such contact';
}

console.log(lookUpProfile('Akira', 'likes'));


function turnIntoBinary(str) {
    return parseInt(str, 2);
}

console.log(turnIntoBinary(9));

function checkEqual(a, b) {
    return a >= b ? true : false;
}

console.log(checkEqual(7, 8));

function checkSign(num) {
    return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
}

console.log(checkSign(0));

const S = [2, 4, 5];
Object.freeze(S);
S[0] = 9;





console.log(S);

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2, 3], [1, 2, 3]))

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2));
console.log(increment(5));

const sum = ( function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
} )();
console.log(sum(1, 2, 3));


var pointss = [1, 22, 3, 54, 87];
function pointssFunc1() {
    pointss.sort();
    document.getElementById('hue').innerHTML = pointss;
}
function pointssFunc2() {
    pointss.sort(function(a, b){return a-b});
    document.getElementById('hue').innerHTML = pointss;
}

var points2 = [33, 2, 83, 57, 120];
function lowestValue(arr) {
    return Math.min.apply(null, arr);
}
console.log('the lowest value is ' + lowestValue(points2));

function FindMin(arr) {
    var len = arr.length;
    var min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        };
    };
    return min;
}
console.log(FindMin(points2));

var cars2 = [
    {type: 'volvo', year: 2020},
    {type: 'bmw', year: 2010},
    {type: 'saab', year: 2014}
]

function DisplayCars() {
    document.getElementById('cars').innerHTML = 
    cars2[0].type + ' ' + cars2[0].year + '<br/>' +
    cars2[1].type + ' ' + cars2[1].year + '<br/>' +
    cars2[2].type + ' ' + cars2[2].year
}

function SortCars() {
    cars2.sort(function(a, b) {
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if(x < y){return -1};
        if(x > y){return 1};
        return 0;
    });
    DisplayCars();
}

var txt = '';
var numbs = [9, 24, 76, 10, 22, 9];
numbs.forEach(myfunction);
document.getElementById('hook').innerHTML = txt;
function myfunction(value, index, array) {
    txt = txt + value + '<br>';
}

var numbers11 = [22, 89, 17, 1010, 234];
var numbers22 = numbers11.map(twiceMore);
function twiceMore(value, index, array) {
    return value*2;
}
document.getElementById('twice').innerHTML = numbers22;

var numbers33 = [12, 44, 36,  13, 99];
var over20 = numbers33.filter(myfunc);
function myfunc(value, index, array) {
    return value > 20;
}
console.log(over20);

var numbers44 = [12, 24, 66, 90, 26];
var summm = numbers44.reduce(reduceFunc);
var sumRight = numbers44.reduceRight(reduceFunc);
function reduceFunc(total, value) {
    return total + value;
}
console.log(summm+' + '+sumRight);

var numbers55 = [11, 22, 14, 28, 34];
var someOver17 = numbers55.some(overSome);
function overSome(value) {
    return value > 18;
}
console.log(someOver17);

var fruits01 = ['apple', 'banana', 'pineapple', 'watermelon'];
console.log(fruits01.indexOf('banana'));
console.log(numbers55.find(overSome));
console.log(numbers55.findIndex(overSome));

var newD = new Date(-564689416584);
console.log(newD.toDateString());


var timeD = new Date('2017-09-22');
console.log(timeD);
console.log(Date.parse('2020-12-23'));

var msec = Date.parse('2020-12-23');
var time2 = new Date(msec);
console.log(time2);

var monthes = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
var time3 = new Date();
console.log(monthes[time3.getMonth()]);
time3.setDate(time3.getDate() + 10);
console.log(time3);

var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2030, 0, 12);
if (someday > today) {
    text = 'today is before 2030';
} else {
    text = 'today is after 2030';
};
console.log(text);
console.log(Math.pow(4, 2));
console.log(Math.floor(Math.random() * 10));

function getRoundInteger(max, min) {
    return Math.floor(Math.random() * (max - min+1)) + min;
}

console.log(getRoundInteger(100, 0));
console.log(10 > 5);

function ageValid() {
    var age, vote;
    age = document.getElementById('age').value;
    vote = (age < 18) ? 'young' : 'adult';
    console.log(vote);
}

var newPerson = {
    fname: 'john',
    lname: 'doe',
    age: 12
};
var x2;
var texttxt = '';
for (x in newPerson) {
    texttxt += newPerson[x] + ' ';
}
console.log(texttxt);

var stuff1 = ['keys', 'JJ', 'money'];
var lj;
for (lj of stuff1) {
    console.log(lj);
}

var jsTxt = 'Java Script';
var c;
for (c of jsTxt) {
    console.log(c);
}

var smth = "";
var i;
for (i = 0; i < 12; i++) {
    if (i === 8) {continue;}
    smth += i + "";
}
console.log(smth);

console.log(String(newPerson.age));
console.log(newPerson[`age`].toString());

function stringAndNumber() {
    var x = '5';
    var y = + x;
    console.log(typeof x + typeof y);
}

var str2 = 'hello junk 758 trash hello';
var find1 = str2.search(/trash/i);
console.log(find1);

var find2 = str2.replace(/hello/i, 'hey');
console.log(find2);

function match() {
    var patt1 = /\d/g;
    var find3 = str2.match(patt1);
    console.log(find3);
}


var xed2 = "\010";
document.getElementById("ed2").innerHTML = xed2;

class Car {
    constructor (brand) {
        this.carname = brand;

    }
    present(x) {
        return x + 'i have a ' + this.carname;
    }
    static shit(em) {
        return 'fuck' + em.carname;
    }
}
mycar = new Car('Volvo');
console.log(mycar.carname + '<br>' +
    mycar.present('hey there')
);

console.log(Car.shit(mycar));

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    get cnam() {
        return this.carname;
    }
    set cnam(x) {
        this.carname = x;
    }
    show() {
        return this.present() + ' and its a ' + this.model;
    }

}
mymodel = new Model('ford', 'mustang');
mymodel.cnam = 'huelvo';
console.log(mymodel.show());
console.log(mymodel.cnam);

function validationForm() {
    let x = document.forms['anyForm']['fname'].value;
    if (x == '') {
        console.log('form cannot be empty');
        return false;
    }
}

function functionNum1to10() {
    let x = document.getElementById('num1to10').value;
    let text;

    if(isNaN(x) || x < 1 || x > 10) {
        text = 'Not valid';
        
    } else {
        text = 'Numb is OK';
        
    }
    document.getElementById('outoutNum1to10').innerHTML = text;
}

function id1Function() {
    let txt = '';
    let inpObj = document.getElementById('id1');

    if(inpObj.validity.rangeOverflow) {
        txt = 'value too long';
        
    } else if (inpObj.validity.rangeUnderflow) {
        txt = 'value too short';
    } else {
        document.getElementById('id1txt').innerHTML = 'input ok';
    }
    document.getElementById('id1txt').innerHTML = txt;


}

function Hlopchuk (name, age, nationality) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
}

var Bart = new Hlopchuk('Bart', 22, 'USA', 'flores8');
Hlopchuk.prototype.street = 'flores 8';
Object.defineProperty(Bart, 'street', {value : 'NO'});
Object.defineProperty(Bart, 'nameNnat', {
    get: function () {
        return this.name + ' ' + this.nationality;
    }
})
console.log(Bart.nameNnat);


var ranS = {counter: 0};
Object.defineProperty(ranS, 'increment', {
    get: function() {this.counter++}
});
Object.defineProperty(ranS, 'reset', {
    get: function() {this.counter = 0}
} );
Object.defineProperty(ranS, 'value', {
    set: function (value) {
        this.counter = value;
    }
});
ranS.value = 6;
ranS.increment;
console.log(ranS);

var pramaFunc = function(x, y) {return x + y};
console.log(pramaFunc(2,2));

function constructFunct(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}

var zena = new constructFunct('Adam', 'Lambert');
console.log(zena.lastName);

var newPersona = {
    fullName: function(city, country) {
        return this.firstName + ' ' + this.lastName + ',' + city + ',' + country + '.';
    }
}

var newPersona1 = {
    firstName: 'Anna',
    lastName: 'Maria'
}

console.log(newPersona.fullName.apply(newPersona1, ['Oslo', 'Whindwhoek']));


function adding() {
    var counter = 0;
    function plussing() {
        counter += 1;
    };
    plussing();
    return counter;
}
console.log(adding() + adding() + adding());

var addng = (function() {
    var counter = 0;
    return function() {counter+=1; return counter;};
})();
addng();
addng();
addng();

var slide = document.getElementsByClassName('slider');
console.log(slide[0]);

var slide1 = document.querySelectorAll('div.slider');
console.log(slide1[0]);

function displayValues() {
    var x = document.forms['form1'];
    var txt = '';
    var i;
    var len = x.length;
    for (i = 0; i < len; i++) {
        txt += x.elements[i].value + '<br>';
    }
    console.log(txt);
}

document.getElementById('myimg').src = '../pictures/alex-dukhanov-MFM8ASk4XNs-unsplash.jpg';

var anotherLevel = document.getElementsByClassName('another-level');
anotherLevel[0].style.backgroundColor = 'white';

function myMoo() {
    var elem = document.getElementById('anim');
    var pos = 0;
    var id = setInterval(frame, 5);

    function frame() {
        if (pos == 370) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

function mDown(obj) {
    obj.style.backgroundColor = 'red';
    obj.innerHTML = 'reelease me';
}
function mUp(obj) {
    obj.style.backgroundColor = 'green';
    obj.innerHTML = 'thanx';
}

var  dateDisplay = document.getElementById('displayDate').addEventListener('click', dateDisplayFunc);

function dateDisplayFunc () {
    var txt = document.getElementById('displayDateDiv');
    txt.innerHTML = Date();
}

var secondBtn = document.getElementById('secondBtn');
secondBtn.addEventListener('mouseover', mySecondFunc);
secondBtn.addEventListener('mouseout', myThirdFunc);
secondBtn.addEventListener('click', myFourthFunc);

function mySecondFunc() {
    secondBtn.style.backgroundColor = 'seagreen';
    secondBtn.style.padding = '1vw';
}
function myThirdFunc() {
    secondBtn.style.backgroundColor = 'lightseagreen';
    secondBtn.style.fontWeight = '900';
}
function myFourthFunc() {
    var coun = 10;
    secondBtn.style.marginLeft = '10vw';
    
    
    
}

var digit1 = 3;
var digit2 = 8;

var thirdBtn = document.getElementById('thirdBtn');
thirdBtn.addEventListener('click', function(){thirdBtnFunc(digit1,digit2);});

function thirdBtnFunc (a, b) {
    var result = a * b;
    document.getElementById('thirdBtnTxt').innerHTML = result;
}

document.getElementById('id02').innerHTML = 
document.getElementById('id01').childNodes[0].nodeValue;

var para = document.createElement('p');
var node1 = document.createTextNode('new text node paragraph');
para.appendChild(node1);
var elemnt = document.getElementById('div3');
elemnt.appendChild(para);

var para2 = document.createElement('p');
var node22 = document.createTextNode('new one before');
para2.appendChild(node22);
elemnt.insertBefore(para2, para);

function removeFunc() {
    para2.remove();
}

function removeChildFunc() {
    var para3 = document.createElement('h1');
    var textNode = document.createTextNode('New H1');
    para3.appendChild(textNode);
    elemnt.replaceChild(para3, para);
}

var myCollection = document.getElementsByTagName('p');
console.log(myCollection);

var myNodeList = document.querySelectorAll('p');
console.log(myNodeList);

for (let i = 0; i < myNodeList.length; i++) {
    myNodeList[i].style.backgroundColor = 'red';
}

function newDoc() {
    window.location.assign('https://www.w3schools.com');
}

function timingFunc() {
    let bd = document.getElementsByTagName('body');
    bd[0].style.backgroundColor = 'seagreen';
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = 'expires=' + d.toGMTString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while(c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
return '';
}

function checkCookie() {
    var user = getCookie('username');
    if (user != '') {
        alert('welcome again ' + user);
    } else {
        user  = prompt('please enter your name:', '');
        if (user != '' && user != null) {
            setCookie('username', user, 30);
        }
    }
}

function funcLoadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('loadDataTxt').innerHTML = 
            this.responseText;
        }
    };
    xhttp.open('GET', 'demo_get.asp?t=' + Math.random(), true);
    xhttp.send();
}
