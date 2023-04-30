// const fruits=[]
// fruits.push("banana","mango","apple");            // length / push
// console.log(fruits.length)

//............................................................................................

// let fruits=["banana","mango","apple","pea","litchi"];
// fruits[5]="mango";
// console.log(fruits[5]);
// console.log(Object.keys(fruits));   // keys values

//............................................................................................

// const arr =[1,2,3]                     
// const arr1 =[4,5,6]
// const arr3=[...arr,...arr1]          //sprade operator
// const arr4=arr.concat(arr1)           // concat
// console.log("sprade",arr3)
// console.log("concat",arr4)

//............................................................................................

//syntax:- copywithin(target)
        //copywithin(target,start)
        //copywithin(target,start,end)

// const arr=["a","b","c","d","e"];
// console.log(arr.copyWithin(0,3));   //copywithin
// console.log(arr.copyWithin(1,3));

//............................................................................................

// const arr =[2,4,6,8]
// const sum=arr.reduce((pre,cu)=>{
//     return pre+cu;
// },10);
// console.log(sum);

//............................................................................................

const arr=["monday","Tuesday","wednesday","thursday","friday","saturday","sunday"];
function isDay(str)
{
        return str.length===6
}
const ans= arr.find(isDay)
console.log(ans)

