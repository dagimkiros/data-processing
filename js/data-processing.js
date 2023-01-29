function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

const queryString = window.location.search;


if(queryString.length > 0){
const urlParams = new URLSearchParams(queryString);
let myData = "";
let myCart = "";
let myTotal = 0;
/* 
Cart Contents
Widget: $3.99
Sprocket: $5.99
Thingy: $1.99
Total: $11.97
*/ 
myCart += "<h3>Cart Contents<h3>"
// Log the values
urlParams.forEach(function(value, key) {

if(key == "Cart"){//process cart
//alert("Cart Item:" + value);
switch(value){
  case "Widget":
    myCart += "Widget: $3.99<br>"
        myTotal += 3.99;
  break;
  case "Sprocket":
    myCart += "Sprocket: $5.99<br>"
    myTotal += 5.99;
break;
case "Thingy":
myCart += "Thingy: $1.99<br>"
myTotal += 1.99;
break;
}



}else{//process shipping
key = key.split("_").join(" ");
//console.log(key,value);

if((key =="First_Name") ||key=="Last_Name"||key=="City"){
  value=titleCase(value);
}
value=titleCase(value);
myData += `<p>${key}: ${value} </p>`;
}
 

});  
myCart += "Total: " + myTotal + "<br>" ;

myData = myCart + myData;
myData += '<p><a href="index.html">CLEAR</a><p>';
document.getElementById("output").innerHTML = myData;
}
