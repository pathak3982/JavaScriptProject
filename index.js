
// /*console.log("Hello World!")
// document.write("write on  document");
// console.warn("this is warning");
// console.error("this is error");
// // JS VARIABLEes*/
// /*var number1 = 34;
// var number2 = 54;
// console.log(number1+number2);*/

// //datatypes in javascript
// //string
// /*var str1 =  "this is a string";
// var   str2  = "this is also a string"*/
// //number
// /*var num1 = 4.5;
// var num2 = 36.65;*/

// //objects
// /*var marks  = {
//     ravi: 34,
//     kaushal: 78,
//     harry: 44
// }*/

// //Booleans
// /*var a = true;
// var b = false;
// console.log(a,b);
// var u;*/

// // var arr = [1,2,3,4,5,"kaushal"];
// //Data type Primitive (undefined,null,string,boolean,symbol) and REFRENCE Data type(array & Object)

// //operators in js
// var a = 34;
// var b = 74;

// /*console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);*/

// console.log(a==b);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a<b)

// // var c = b;
// // c += 2;
// console.log(b);

/*function avg(a,b){
    return (a+b)/2;

}
c1 = avg(4,6)
c2 = avg(14,16)

console.log(c1,c2);

var age = 14;
if(age>18){
    console.log("you can drink rasna water");
}
else if(age>26){
    console.log("you can't drink rasna water");
}
else{
    console.log("you can't drink tang water");
}*/

// var arr = [11,23,3,5,6,7];
// // for(var i = 0;i<arr.length;i++){
// //     console.log(arr[[i]]);
// // }
// arr.forEach(function(element)
// {
//     console.log(element);

// })
// //let is use for temporary variable
// let j = 0;
// const k = 0
// // k++;
// do{
//     console.log(arr[j]);
//     j++;
// }
// while(j<arr.length)

let myarr = ["hello",27,"pathak",2026];
// console.log(myarr.length);
// console.log(myarr[0]);
// console.log(myarr.pop());
// console.log(myarr.push("kaushal"));
// console.log(myarr);
// console.log(myarr.shift());
// console.log(myarr.unshift("kaushal"));
// console.log(myarr);

//string methodss

let MyString = "i am proud of being me for me";
// console.log(MyString.length);
// console.log(MyString.indexOf("me"));
// console.log(MyString.lastIndexOf("me"));
// console.log(MyString.slice(0,5));
// // console.log(MyString.replace("me","you"));
// let Mystring = MyString.replace("me","you")
// console.log(MyString , Mystring);

let myData = new Date();
// console.log(myData);
// console.log(myData.getTime()); //time in sec
// console.log(myData.getFullYear()); //year
// console.log(myData.getDay()); //day of the week
// console.log(myData.getHours()); //hours


//Dom Manupulation Document Object Model
// let ele = document.getElementById('click');
// console.log(ele);

// let elebyclass = document.getElementsByClassName('container');
// console.log(elebyclass[0].getElementsByClassName('container'));
// // elebyclass[0].style.background = "yellow";
// elebyclass[0].classList.add("bg-primary");
// elebyclass[0].classList.add("text-success");

// // elebyclass[0].classList.remove("text-success");
// console.log(elebyclass[0].innerHTML);
// console.log(elebyclass[0].innerText);

// tn = document.getElementsByTagName('div');
// console.log(tn);

// // createdElement
// createdElement = document.createElement('p');
// createdElement.innerText = "this is a created para";
// console.log(createdElement);
// tn[0].appendChild(createdElement);

// tn[0].replaceChild(createdElement,tn[0].childNodes[1]);

// //queryselector selecting using query

// sql = document.querySelector('.container');
// console.log(sql);
// sql = document.querySelectorAll('.container');
// console.log(sql);

///events in javascript
function clicked(){
    console.log("the button was clicked");
}
// window.onload = function(){
//     console.log("the document was loaded");
// }
// firstConainer.addEventListener('click',function(){
//     console.log("click on");
// }
// )
// firstConainer.addEventListener('mouseover',function(){
//     console.log("Mouse on container");
//}
//)
// firstConainer.addEventListener('mouseout',function(){   
//     console.log("Mouse out of container");
// })
// firstConainer.addEventListener('mouseup',function(){
//     console.log("Mouse up when clicked on container");   
// })
// firstConainer.addEventListener('mousedown',function(){
//     console.log("Mouse down when clicked on container");
// })
// firstConainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].classList.toggle("bg-primary");
//     console.log("click on container");   

// })
// firstConainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked</b>";
//     console.log("click on container");   

// })
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstConainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("click on container");   

// })
logkro = () => {
    document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked</b>";
    console.log("your log");  
}
// setTimeout(logkro,5000);
// setInterval(logkro,3000);
// clr = setInterval(logkro,3000);
//use clearInterval/clearTimeout to clear the interval or timeout
