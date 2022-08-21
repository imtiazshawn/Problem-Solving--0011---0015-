// 0011. Find out the Falsy values From an Array

const mixedArr = [
    'lws',
    undefined,
    'Imtiaz Ahamed Shawn',
    false,
    '',
    'apple',
    40, 
    'k',
    true,
    'Thanks All',
    NaN
]


const trueArray = mixedArr.filter(function(el){
    if(el){
        return true;
    } else{
        return false;
    }
})

// Another Way

const trueArrTwo = mixedArr.filter(Boolean);

console.log(trueArray);
console.log(trueArrTwo);




// 0012. Find out the Falsy values From an Object

const obj = {
    a: 'lws',
    b: undefined,
    c: 'Imtiaz Ahamed Shawn',
    d: false,
    e: '',
    f: 'apple',
    i: 40, 
    j: 'k',
    k: true,
    l: 'Thanks All',
    m: NaN
}

const truthyObject = function(obj){
    for(let i in obj){
        if(!obj[i]){
            delete obj[i];
        }
    }
    return obj;
}

console.log(truthyObject(obj));




// 0013. Convert Minutes into Seconds

function convert(minutes) {
	let seconds = minutes * 60;
	return seconds
}

console.log(convert(5));





// 0014. Return The Sum of Two numbers

function addition(a, b) {
	const sum = a + b;
	return sum;
}

console.log(addition(5, 6));




// 0015. Return the next number from the integer passed

function addition(num) {
	return ++num;
}
console.log(addition(5));

