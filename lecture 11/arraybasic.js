// // using array literal
// let fruits=["apple","banana","orange"];
// // using  array constructor
// let fruits=new Array("apple","banana","orange");




// //normal for loop
// console.log("for loop");
// for(vari=0;i<array.length;i++){
//     console.log(array[i]);
// }
// console.log("for of loop");
// // for of loop
// for(i of array)






















// Advance arrays method
const array = [1,2,3,4,5,6,7,8,9,10];
    //map
    // saare elememts pr condtion apply kardega
    const double=array.map(function(x){
        return x*2;
    });
    const doubledemo=array.map(x=>x*2);
    console.log(double);
    console.log(doubledemo);

    //filter
    //tumahari condition karega
    // joh kuch elemnts condtion pass hoga voh new array me add kardega
    const even=array.filter(function(x){
        return x%2==0;
    });
    const evendemo=array.filter(x=>x%2==0);
    console.log(even);
    console.log(evendemo);
    
    //reduce
    //saare elements ko ek variable me convert kardega
const sum = array.reduce(function(sum, x){
    return sum + x;
}, 0);
const sum1 = array.reduce((sum, x) => sum + x, 0);
const sum2 = array.reduce((s, x) => s + x, 0);
const sum3 = array.reduce((acc, x) => acc + x, 0);
console.log(sum);
console.log(sum1);
console.log(sum2);
console.log(sum3);

// find
const f=array.find(function(x){
    return x>5;
});
const fdemo=array.find(x=>x>5);
console.log(f);
console.log(fdemo);

// some ()
// btata hai ki condition elemntesa staisfy kr rha hai yeh nhi
const s=array.some(function(x){
    return x>5;
});
const sdemo=array.some(x=>x>5);
console.log(s);
console.log(sdemo); 

//every()
const e=array.every(function(x){
    return x>5;
});
const edemo=array.every(x=>x>5);
console.log(e);
console.log(edemo); 