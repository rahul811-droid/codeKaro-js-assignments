
1 // Duplicate element in Array 

// const arrayNumber =[1,2,8,2,1,8,9,];
// console.log([...new Set(arrayNumber)]) this is sortcut 


// const duplicates = arrayNumber.filter((ele,index,arr)=>arr.indexOf(ele)==index)
// console.log(duplicates)

2 // find max and min in javascript 

 
// const arrNumber =[1,9,90,30,40,50];

// const maxNumber= Math.max(...arrNumber)
// const minNumber= Math.min(...arrNumber)
// console.log(maxNumber)
// console.log(maxNumber)
// const maxFunction=(arr)=>{
//     return arr.reduce(function(prev,curr){
//         return prev>curr?prev:curr
//     })
// }
// console.log(maxFunction(arrNumber))
3 //  Diff == vs === .

// Both are comparision operator 

// == is used to compare the value === is used to compare both value and type 

4 // How to find 2nd largest value and delete 1st value 

// const intArray =[3,9,4,7,8];

// const largestValue=(arr)=>{
//     firstLargest=Math.max(...intArray);
//     index=arr.indexOf(firstLargest);
//     arr.splice(index,1);
//     secondLargest=Math.max(...intArray);
//     return secondLargest ;
// }
// console.log(largestValue(intArray))

5 // Diff between Filtermethod and find method 

// const empArr =[
//     {name:"king",age:"25"},
//     {name:"Rahul",age:"24"},
//     {name:"ShreeLaxmi",age:"22"},
//     {name:"Lipi",age:"27"},
//     {name:"Sasmita",age:"28"},
//     {name:"Lopa",age:"26"},
//     {name:"Sibaji",age:"29"}, 
//     {name:"sai",age:"30"}
// ]
// const filterItem=empArr.filter((item)=>{
//     return item.age<25
// })
// console.log(filterItem)

6// Find the missing number 

// const arrNum =[1,2,3,4,5,8,9]

// const missArray=[]

// const missingValue =(arr)=>{
//     const maxValue=Math.max(...arr)
//     const minValue=Math.min(...arr)
//     for(let i=minValue;i<maxValue;i++){
//         if(arr.indexOf(i)<0){
//             missArray.push(i)
//         }
//     }
//     return missArray
// }
// console.log(missingValue(arrNum))

7 // How to find even and odd 

// const arrNum =[1,2,3,4,5,6,7,8,9,10]

// const evenNum =arrNum.filter((arr)=>{
//     return arr%2!==0
// })
// console.log(evenNum)

8 // Sum of all no 

// const arrNum =[1,2,3,4,5,6]
// var sum=0;
// for(let i of arrNum){
//     sum+=i
// }
// console.log(sum)

// const sumN =(arr)=>{
//     return arr.reduce((prev,curr)=>{
//         return prev+curr;
//     })
// }
// console.log(sumN(arrNum))

9 // Find factorial of a num 

// const num=7;
// let fact=1;
// for(let i=1;i<num;i++){
// fact=fact*i;
// }
// console.log(fact)

10 // How to find prime num in js 

// var num =8;
// for (let i=2;i<num;i++){
//     if(num%i==0){
//         var result =`${num} is not a prime no`
//         break
//     }        var result =`${num} is  a prime no`

// }
// console.log(result)

11 // How to vowel no from string 

// var string =prompt("enter a num")

// string = string.toLocaleLowerCase()
// if(string =='a' || string =='e' || string =='i' || string =='o' || string =='u' ){
//     console.log(`${string} is a vowel`)
// }else 
// {
//     console.log(`${string} is not  a vowel`)

// }
// second method for vowel no 

// var string =prompt("enter a num")   

// const vowels=['a','e','i','o','u']

// const countVowel=(str)=>{
//  var count =0;
//  for(let letter of str.toLowerCase()){
//     if(vowels.includes(letter)){
//         count++;
//     }
//  }
//  return count

// }
// console.log(countVowel(string))

12 // How to reverse a string in js 

    // const reverseString=(str)=>{
    //     const strToArr=str.split("")
    //     const arrReverse = strToArr.reverse()
    //     const strReverse=arrReverse.join("")
    //     return strReverse;

    // }
    // console.log(reverseString("rahul"))

13 // How to find palindrom in javascript 

// var string = prompt("enter value");
// string=string.toLocaleLowerCase();
// const palindromFind=((str)=>{
// var reverseStr = str.split("").reverse().join("")
// if(reverseStr===str){
//     return true;
// }else{
    
// }
// return false;
// })
    
// console.log(palindromFind(string));

14 // How to swap two variable using the third 

// let a=7;
// let b=9;
// // or 
// [a,b]=[b,a]


// console.log(b)

15 //  How to merge two arrays in js 
    // concat 
    // const arr1 =[1,3,5,7,9]
    // const arr2 =[2,4,6,8,10]
    // let finalarr=arr1.concat(arr2);
    // finalarr.sort(function(a,b){
    //     return a-b; 
    // })
    // console.log(finalarr)
    // spread operator 

// const result =[...arr1,...arr2]
// result.sort(function(a,b){
//     return a-b
// })
// console.log(result)

16 //  How to find factors of a given integer in js 


// const num= prompt("Enter num");
// for(let i=0;i<num;i++){
//     if(num%i==0){
//         console.log(i)
//     }
// }

17 //  How to make a calculator 

// const operator = prompt("please select a operator + - x /");
// const num1 =parseFloat(prompt("enter num 1"))
// const num2 =parseFloat(prompt("enter num 2"))
// if(operator == '+' ){
//    result = num1+num2
// }
// else if(operator == '-'){
//     result=num1-num2
// }
// else if(operator == '*'){
//     result=num1*num2
// }
// else if(operator == '-'){
//     result=num1-num2
// }
// console.log(result)

18 // How to compare two arrays are equal or not in js 

// const arr1 =[2,3,4,5,6]
// const arr2 =[1,2,3]
// const isArrsame = arr1.length==arr2.length && 
// arr1.every((currElem)=>{
//     if(arr2.indexOf(currElem)>-1){
//         return (currElem=[arr2.indexOf(currElem)])
//     }
// })
// console.log(isArrsame)

19 // How to find intersection of two arrays in js 

// var arr1=[2,9,3,8,7,4,4,8,8]
// var arr1=[4,6,7,8,9,5,4,0]
// console.log([...new Set(arr1)]) for removing dulicate no
// let interSectionArr =arr1.filter((ele)=>{
//     return arr1.includes(ele)
// })
// console.log([...new Set(interSectionArr)])

20 // How to find union of two arraya in js 

// var arr1 =[1,2,6,8,9,12,45]
// var arr2 =[1,2,3,4,5,6,7,8,9,10]
// var uniOnArr = [...arr1,...arr2]
// uniOnArr=function(a,b){
//     return a-b
// }

// console.log([...new Set(uniOnArr)])


