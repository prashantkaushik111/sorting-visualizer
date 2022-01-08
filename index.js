// const BASE_URL = 'https://www.algoexpert.io/api/fe/glossary-suggestions';

// const typeHead = document.getElementById('typeahead');

// var headers = {}
    
// function getData(value) {
//     let searchStrings;
//     let url = new URL(BASE_URL);
//     url.searchParams.set('text', value);
//     fetch(url, {
//         method : "GET",
//         mode: 'cors',
//         headers: headers
//     }).then(res=>res.json()).then((values)=> {
//         searchStrings = values;
//         console.log('i am invoked 2', searchStrings);
//     })

//     console.log('i am invoked', value);
// }
// const convertToDebounce = function(fnName, time) {
//   let timer;
//   return function(value) {
//     let args = arguments;
//     let context = this;
//     clearTimeout(timer);
//     timer = setTimeout(()=> {
//       fnName.apply(context, args);
//     }, time);
//   }
// }
// const debounceFunction = convertToDebounce(getData, 500);
// typeHead.addEventListener('input',  ()=> {
//   debounceFunction(typeHead.value);
//   console.log('typehead', typeHead.value);
// });
// // Write your code here.



/* setTimeout and closue

var problem -> ();

every closure to setTimeout function have lexical scope with same refernce of i which was updated to 5 

function check() {
    
    for(var i=1; i < 5; i++) {
        setTimeout(function() {
                console.log(i);
        },i*1000);
}
}
check();

output - 5 5 5 5 
*/ 

/*
/ fix with let -> 
on each iteration new copy of i is created and each callback function of setTimeout has lexical scope to that copy of i
function check() {
    
    for(let i=1; i < 5; i++) {
        setTimeout(function() {
                console.log(i);
        },i*1000);
}
}
check();
output - 1 2 3 4
*/

/*
/ fix with closure using var -> 
on each iteration new copy of i is created and each callback function of setTimeout has lexical scope to that copy of i
function check() {
    for(var i=1; i < 5; i++) {
    function close(i) {
        setTimeout(function() {
                console.log(i);
        },i*1000);
    }
    close(i);
}
}   
check();
output - 1 2 3 4
*/


// statement();  // 'a' knows it is a function
// expression(); // throws error b is not a function treats just like other var function defined only when it reaches on line 101
// // function statement aka function declaration
// function statement() {
//     console.log('a');
// }
// // function expression
// var expression = function() {
//     console.log('b');
// }

// // anonymous function => function with no name

// function () { // gives error(function statement requires function name) as function with no name is not allowed use of it? -> when function is used as values;
//     console.log('anonymous');
// }

// //named function expression

// var expression2 = function xyz() {
//     console.log('aaa');
//     console.log(xyz); // not give error
// }

// xyz(); // will give error xyz is not defined xyz is not created in outer scope 


// //difference between parameters and arguments
// function gfh(a, b){ // a and b are parameters

// }  

// gfh(a, b) // a and b are arguments


// // First Class Function functions can be passed as arguments
// // First Class Citizens
//     // ability to use function as values is known as first class function
//     // function passed as values also can pass anonymous function;

//     function testFirstOrder(param1, param2) {
//         console.log(param1);
//     }


//     testFirstOrder(function () {

//     }, 10);

//     // function can be return as value

//     var a = function() {
//         return function() {
//             console.log('abc');
//         }
//     }
//     console.log(a());


// What is callBack Function in javascript 

//callback function give power of whole asynchronous world in synchronous signle threaed language javascript
// Blocking the main thread
// all the operation executed through main thread if some heavy operation takes for ex 25-30 sec it means it is blocking main thread it wont be able to execute another function between this time as javascrip is single threaded
// recommended to use async for operation which takes time


// closures demo with event listeners

// function attachEventListener() {
//     let count = 0;

//     document.getElementById('click').addEventListener('click', function xyz() { // this function will form a closure with count variable
//         console.log("count is", count++);
//     });
// }

// garbage collection and removeEventListeners

// event listeners are heavy for example in above case count will not be garbage collected because javascript might not know in future xyz() will  be called
// hence recommended to use remove event listener all those variable used by listener know will be garbage collected


// call Stack => present in js engine => 

//JsEngine { call Stack[(Global Execution Context), a()] }  <=(window)=>   Browsers Power WEB APIS [setTimeout(), DOM APIs, fetch(), console, localStorage, location] 

// Micro Task Queue(Promises, Mutation Observer, all callback functions comes from promises come in this callback queue) >(greater) priority then CallBack Queue   
//   MTQ[CB1(), CB2(), CB3()]     CallBackQueue[fb1(), fb2(), fb3()]
//         ^
//         /\
//      (Event Loop) gave higher priority to micro task queue callbacks checks if call stack is empty if yes then event loop take away call back from micro task queue or callback queue and put it in call  stack and execute with higher priority on micro task queue
//        => pick and put in call stack[Cb1() ] ;


// javascript runtime environment = [Js Engine, WEB API, event loop , Micro Task Queue, CallBack Queue]
// js engine is heart of  javascript runtime environment
// every browsers have javascript runtime environment to run js code

// node js open source javascript runtime environment

// all browsers have their specific implementation of js engine  chakra->microsoft edge , v8- chrome, spideMonkey - firefox

// js engine is not machine/ hardware running your code it is program written in some low level language for example v8 google chrome written in c++
//       js engine
// code ->  | Parsing(generates tokens, Syntax Parser generates (Abstract Syntax Tree)) -> Compilation (JIT Just in Time Compilation)-> Execution    Memory heap[]<-Garbage Collector(frees up unused memory,  Read Mark and Sweep )  call Stack[]   Read optimizing technique inlining, copy elison, inline caching
//          |
    
// Interpreter(executes code line by line, Fast) vs Compiler(whole code is compiled and then converted into optimized version of code and then executed, Efficient)
// js is interpretted or compiled based on js engine initially developed as interpreted now most of the browsers support interpreted + compiled just in time compiler
// aot -> ahead of time compilation takes js code that to be executed in future compile it 


// setTimeout does not gurantee to execute just after given seconds it will do for atleast that


// polyfill of map -> make calculate function same as of map
// Array.prototype.calculate = function (logic) {
//     let output = [];
//     for(let i=0; i < this.length; i++) {
//         output.push(logic(this[i]));
//     }
//     return output;
// }
// console.log(radius.map(logic)); console.log(radius.calculate(logic))


// promise state -> pending, fulfiled , rejected

// const promise = new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             console.log('resolved');
//         }, 1000);
// });
// console.log(promise) // output -> state pending

// setTimeout(()=> {
//     console.log(promise) // outout -> resolved
// }, 1500);

// promise.then((value)=>console.log(value)).catch(error=> console.log(error));

// promise then finally

// promise all -> wait for all promises to resolve then only executes then for all of Promises in array , if any one fails then will cause all to reject
// Promise.all([
//     Promise.resolve(3),
//     Promise.resolve(5),
//     new Promise((resolve, reject) => {
//         setTimeout(()=> resolve(10), 5000);
//     })
// ]).then(console.log);  // output [3, 5, 10]

// Promise.race is mostly similar to promise.all but returns the value for promise which resolves or rejects first in above case output 3
// Promise.any is mostly similar to promise.all but returns the value for promise which resolves first in above case output 3

// async await
/*
document.getElementById("abc").addEventListener('click', ()=> {
    console.log('i was clicked');
});
let i=0;
while(true) {
    console.log('abcde ', i++);
}*/
console.log('previous');
// setInterval(()=> {
//     console.log('ss', Date.now());
// }, );
const initialHeights =[];
const boxes = document.getElementById('box-collect');
const startButton = document.getElementById('start-button');
const cancelButton = document.getElementById('cancel-button');
let startRange = 50, endRange = 100, algorithm;
cancelButton.addEventListener('click', ()=> {
    window.location.reload();
})
startButton.addEventListener('click', ()=> {
    startButton.disabled = true;
    boxes.innerHTML = "";
    initialHeights.length = 0;
    const denseRatio = document.getElementById('dense-ratio');
    const algorithmValue = document.getElementById('algorithm');
    if(denseRatio.value === 'Low(50-100)') {
        console.log('a');
        startRange = 50;
        endRange = 100;
    }
    else if(denseRatio.value === 'Medium(101-200)') {
        console.log('b');
        startRange = 101;
        endRange = 200;
    }
    else {
        console.log('c');
        startRange = 201;
        endRange = 300;
    }
   
    createBoxes();
    if(algorithmValue.value === 'Bubble Sort') {
       bubbleSort().then(()=> {
           startButton.disabled = false;
       });
    }
    else if(algorithmValue.value === 'Insertion Sort') {
        insertionSort().then(()=> {
            startButton.disabled = false;
        });
    }
    else {
        MergeSort().then(()=> {
            startButton.disabled = false;
        });
    }
});
let nOfBoxes;
function getRandom(range) {
    return Math.floor((Math.random()*range) + 1);
}
function getRandomInRange(min, max) {
    return Math.floor((Math.random()*(max-min) + min));
}
function createBoxes() {
    nOfBoxes = getRandomInRange(startRange, endRange);
    const fragment = document.createDocumentFragment();
    for(let j=0; j < nOfBoxes; j++) {
        const element = document.createElement('div');
        element.classList.add('box');
        const height = getRandomInRange(100, 200);
        element.style.height = height + 'px';
        initialHeights.push(height);
        fragment.appendChild(element);
    }
    boxes.appendChild(fragment);
}



async function bubbleSort() {
    const boxElements = document.querySelectorAll('.box');
    for(let j=0; j<nOfBoxes; j++) {
        for(let i=0; i<nOfBoxes-j - 1; i++) {
                let temp=initialHeights[i];
                boxElements[i].style.backgroundColor = 'green';
                boxElements[i+1].style.backgroundColor = 'green';
                await new Promise((resolve, reject)=> {
                    setTimeout(()=> {
                        resolve();
                    }, 1);
                })
                if(initialHeights[i] > initialHeights[i+1]) {
                    initialHeights[i] = initialHeights[i+1];
                    initialHeights[i+1] = temp; 
                }
                boxElements[i].style.height = initialHeights[i] + 'px';
                boxElements[i+1].style.height = initialHeights[i+1] + 'px';
               
                await new Promise((resolve, reject)=> {
                    setTimeout(()=> {
                        resolve();
                    }, 1);
                })
                boxElements[i].style.backgroundColor = 'red';
                boxElements[i+1].style.backgroundColor = 'red';
        }
        boxElements[nOfBoxes-1-j].style.backgroundColor = 'yellow';
        boxElements[nOfBoxes-1-j].style.height = initialHeights[nOfBoxes-1-j] + 'px';
    }
    console.log('after sort', initialHeights);
}

async function insertionSort() {
    const boxElements = document.querySelectorAll('.box');
    console.log('test-values before', initialHeights);
    for(let j=0; j < nOfBoxes-1; j++) {
        let indexToReplace = 0, valueToCompare = initialHeights[j+1];
        for(let k = j; k >= 0; k--) {
            let value1 = initialHeights[k];
            let prevColor1 = boxElements[k].style.backgroundColor,prevColor2=boxElements[k+1].style.backgroundColor;
            boxElements[k].style.backgroundColor = 'green';
            boxElements[k+1].style.backgroundColor = 'green';
            await new Promise((resolve, reject)=> {
                setTimeout(()=> {
                    resolve();
                }, 1);
            })
            if(value1 > valueToCompare) {
                initialHeights[k+1] = initialHeights[k];
                boxElements[k].style.height = initialHeights[k] + 'px';
                boxElements[k+1].style.height = initialHeights[k+1] + 'px';
               
                await new Promise((resolve, reject)=> {
                    setTimeout(()=> {
                        resolve();
                    }, 1);
                })
                boxElements[k].style.backgroundColor = prevColor1;
                boxElements[k+1].style.backgroundColor = prevColor2;
            }
            else {
                boxElements[k].style.backgroundColor = prevColor1;
                boxElements[k+1].style.backgroundColor = prevColor2;
                indexToReplace = k + 1;
                break;
            }
        }
        if(j === nOfBoxes - 2) {
            boxElements[j+1].style.backgroundColor = 'yellow';
        }
        boxElements[j].style.backgroundColor = 'yellow';
        initialHeights[indexToReplace] = valueToCompare;
    }
    console.log('test-values after', initialHeights);
}

async function MergeSort() {
    const boxElements = document.querySelectorAll('.box');
    console.log('test-values before', initialHeights);
    const animations = [];
    function merge(start, mid, end) {
        let cmp1 = start, cmp2 = mid+1, st = start;
        const aux = [...initialHeights];
        while((cmp1 <= mid)&&(cmp2 <= end)) {
            if(aux[cmp1] <= aux[cmp2]) {
                animations.push([cmp1, cmp2]);
                animations.push([cmp1, cmp2]);
                animations.push([st, aux[cmp1]]);
                initialHeights[st++] = aux[cmp1];
                cmp1++;
            }
            else if(aux[cmp1] > aux[cmp2]) {
                animations.push([cmp1, cmp2]);
                animations.push([cmp1, cmp2]);
                animations.push([st, aux[cmp2]]);
                initialHeights[st++] = aux[cmp2];
                cmp2++;
            }
        }

        while(cmp1 <= mid) {
            animations.push([cmp1, cmp1]);
            animations.push([cmp1, cmp1]);
            animations.push([st, aux[cmp1]]);
            initialHeights[st++] = aux[cmp1];
            cmp1++;
        }

        while(cmp2 <= end) {
            animations.push([cmp2, cmp2]);
            animations.push([cmp2, cmp2]);
            animations.push([st, aux[cmp2]]);
            initialHeights[st++] = aux[cmp2];
            cmp2++;
        }

    }
    function mergeSort(start, end) {
        let mid = Math.floor((end + start)/2);
        if(start < end) {
           console.log(start, end, mid, initialHeights.length, 'sss');
            mergeSort(start,mid);
            mergeSort(mid+1, end);
            merge(start, mid, end);
        }
    }

    mergeSort(0, initialHeights.length - 1);
    let previousColor1, previousColor2;
    for(let index=0; index< animations.length; index++){
        let a = animations[index][0];
        let b = animations[index][1];
        console.log(a, b, 'aa');
        if(index % 3 === 0) {
            previousColor1 = boxElements[a].style.backgroundColor;
            previousColor2 = boxElements[b].style.backgroundColor;
            boxElements[a].style.backgroundColor = 'green';
            boxElements[b].style.backgroundColor = 'green';
        } 
        else if(index % 3 === 1) {
            boxElements[a].style.backgroundColor = previousColor1;
            boxElements[b].style.backgroundColor = previousColor2;
        }
        else {
            boxElements[a].style.backgroundColor = 'yellow';
            boxElements[a].style.height = b + 'px';
        }
        await new Promise((resolve, reject)=> {
            setTimeout(()=> {
                resolve();
            }, 10);
        });
    }
    console.log('test-values after', initialHeights);
}

// bubbleSort();

// async function temp() {
//     console.log('in 1');
//     await new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             resolve();
//             console.log('resolved')
//         }, 5000);
//     })
//     console.log('in 2');
// }
// temp();
console.log('end');  
