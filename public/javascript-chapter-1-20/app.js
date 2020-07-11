// Chapter 1

// alert("Greeting")
// alert("Error! Please enter a valid Password.")
// alert("Welcome to JS land.. \nHappy Coding!!!")
// alert("Welcome to JS land..")
// alert("Happy Coding!!!")
// console.log("Hello.. I can run JS through my web browser's console");

// Chapter 1 

// Chapter 2

//  var userName = "Hassan Mujtaba"
//  var myName = userName
//  alert(myName)

// var message = "Hello World"
// alert(message)

// var stdName = prompt("Enter your name: ")
// var stdAge = prompt("Enter your age: ")
// var stdQualication = prompt("Enter your Qualification: ")
// alert(stdName)
// alert(stdAge + "years old")
// alert(stdQualication)

// alert(`Pizza
// Pizz
// Piz
// Pi
// P`)

// var email = "hassanmujtaba@gmail.com"
// alert("My email address is " + email)

// var book = "A smarter way to learn JavaScript"
// alert("I'm tring to learn from this book"+ book)

// document.write("Yeah! I can Write HTML content through Javascript")

// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

// Chapter 2

// Chapter 3
// var age = 20
// alert("I'm "+ age + " years old")

// var userRecord = 5
// alert("You have visited this site " + userRecord + " times")

// var birthYear = 2020
// document.write("My Birth year is " + birthYear + "<br/>" + "Data type of my declared variable is number, See in the console")
// console.log(typeof(birthYear));

// var visiterName = prompt("Enter Your Name: ")
// var productTitle = prompt("Enter Product title: ")
// var quantity = prompt(parseInt("Enter Quantity "))
// alert(visiterName + " ordered " + quantity + " T-shirts " + productTitle) 

// Chapter 3

// Chapter 4
// var variables = `<h2>Rules for naming JS variables</h2>
// Variable names can only contain number, $ and $my_1stVariable.
// Variables must begin with a letter, $ or _. For example $name, _name or name.
// Variable names are case Sensitive.
// Variable names should not be JS keyword.`
// document.write(variables)
// Chapter 4

// Chapter 5
// var value1 = prompt("Enter value one: ")
// var value2 = prompt("Enter value two: ")

// Chapter 5

// Chapter 6 - 9

// var a = 10;
//  var print = `the number is  ${ + a}
// <br>
//   ${a = ++a} 
//   <br>
// The value of ++a =  ${  a}
// <br>
// now the value is a  ${  a} <br>
//  ${a = a++} <br>
// the value of a++ is =  ${a}  <br>
// now the value of a is ${++a} <br>
//  ${a = --a} 
//   <br>
// the value of --a is =  ${a} <br>
// now the value of a is  ${ a} <br>
//  ${a = a--} 
//   <br>
// the value of a-- =  ${a} <br>
// now the value of a is ${--a}` 

// document.write(print)

// -------------------------------------

// var a = 2, b = 1
// var result = --a - --b + ++b + b--;
// var expalin = "a = 2 then --a is = 1 now a = 1, b = 1 then --b now b = 0, now a-b = 1, now b = 0 then ++b now b = 1, a+b = 2 then --b b = 1 2 + b = 3 but then b = 0 because b-- first b is assign then -"
// var all = `${expalin}
// <br>
// a = ${a}
// <br>
// b = ${b}
// <br>
// final result = ${result}`
// document.write(all)

// -------------------------------------

// var num = parseInt(prompt("Enter your Num"))
// var multi = parseInt(prompt("enter your multiplication nhmber", 5))
// var result = num * multi
// document.write(num + " " + "*" + " " + multi + " " + "=" + " " + result)

// -------------------------------------

// var EngTotal = 100
// var urduTotal = 100
// var SciTotal = 100
// var Eng = parseInt(prompt("enter your given marks"))
// var Engper = Eng * 100 / EngTotal
// var urdu = parseInt(prompt("enter your given marks"))
// var urduper = urdu * 100 / EngTotal
// var Sci = parseInt(prompt("Enter your given marks"))
// var Sciper = Sci * 100 / EngTotal
// var Total = EngTotal + urduTotal + SciTotal
// var given = Eng + urdu + Sci
// var Percentage = given * 100 / Total
// var show =  `<h1>MarkSheet</h1>
// <table 1px solid black>
// <tr>
// <th>SUBJECT</th>
// <th>Total Marks</th>
// <th>Given Marks</th>
// <th>Percentage</th>
// <tr>
// <td>EngLish</td>
// <td>${EngTotal}</td>
// <td>${Eng}</td>
// <td>${Engper}%</td>
// </tr>
// <tr>
// <td>Urdu</td>
// <td>${urduTotal}</td>
// <td>${urdu}</td>
// <td>${urduper}%</td>
// </tr>
// <tr>
// <td>Sci</td>
// <td>${SciTotal}</td>
// <td>${Sci}</td>
// <td>${Sciper}%</td>
// </tr>
// <tr>
// <td>Total</td>
// <td>${Total}</td>
// <td>${given}</td>
// <td>${Percentage}%</td>
// </tr>
// </table>
// `
// document.write(show)

// Chapter 6 - 9

// Chapter 9 - 11

// var city = prompt("Enter your City name")
// if(city == "Karachi" || "karachi"){
//     document.write("welcome To the City Of Lights")
// }
// else{
//     document.write("welcome the Other City")
// }

// ------------------------------------------------

// var gender = prompt("what is your gender")
// if(gender == "male" ){
//     document.write("Good Morning Sir")
// }
// else if(gender == "female"){
//     document.write("Good Morning Maam")
// }
// else{
//     document.write("Good Morning")
// }

// ------------------------------------------------

// var color = prompt("what Color of traffic")
// if(color == "Red" ){
//     document.write("Must Stop")
// }
// else if(color == "Yellow"){
//     document.write("Ready To move")
// }
// else if(color == Green){
//     document.write("Move Now")
// }
// else{
//     alert("try Again")
// }

// ------------------------------------------------

// var fuel = prompt("how much you fuel reamaining  ")
// if(fuel <= 0.25){
// document.write(" Please refill the fuel in your car")
// }
// else{
//     document.write("ok ")
// }

// ------------------------------------------------

// var a = 4; if (++a === 5){ alert("given condition for variable a is true") }   

// var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }  
// var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }  
// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }  
// if (true){ alert("True"); } if (false){ alert("False"); }  

// if("car" < "cat"){ alert("car is smaller than cat"); }  
// var record = `given condition of variable a is true <br>condition 2 id true <br>condition 4 is true <br> The cost is true <br>True<br>cat smaller then car`
// document.write(record)

// ------------------------------------------------

// var EngTotal = 100
// var urduTotal = 100
// var SciTotal = 100
// var Eng = parseInt(prompt("enter your given marks"))
// var Engper = Eng * 100 / EngTotal
// var urdu = parseInt(prompt("enter your given marks"))
// var urduper = urdu * 100 / EngTotal
// var Sci = parseInt(prompt("Enter your given marks"))
// var Sciper = Sci * 100 / EngTotal
// var Total = EngTotal + urduTotal + SciTotal
// var given = Eng + urdu + Sci
// var Percentage = given * 100 / Total
// // alert(Percentage+"%")
// var Grade
// var remarks
// if(Percentage => 80){
//     Grade = "A+1"
//     remarks = "Excellent"
// }
// else if(Percentage => 70){
//     Grade = "A"
//     remarks = "Good"
// }
// else if(Percentage => 60){
//     Grade =  "B"
//     remarks = "Fair"
// }
// else if(Percentage => 50){
//     Grade =  "C"
//     remarks = "Poor"
// }
// else{
//     Grade = "Fail"
//     remarks = "Fail"
// }

// var show =  `<h1>MarkSheet</h1>
// <table 1px solid black>
// <tr>
// <th>SUBJECT</th>
// <th>Total Marks</th>
// <th>Given Marks</th>
// <th>Percentage</th>
// <tr>
// <td>EngLish</td>
// <td>${EngTotal}</td>
// <td>${Eng}</td>
// <td>${Engper}%</td>
// </tr>
// <tr>
// <td>Urdu</td>
// <td>${urduTotal}</td>
// <td>${urdu}</td>
// <td>${urduper}%</td>
// </tr>
// <tr>
// <td>Sci</td>
// <td>${SciTotal}</td>
// <td>${Sci}</td>
// <td>${Sciper}%</td>
// </tr>
// <tr>
// <td>Total</td>
// <td>${Total}</td>
// <td>${given}</td>
// <td>${Percentage}%</td>
// </tr>
// <tr>
// <th>"Grade":${Grade}</th> 
// <th>"Remarks":${remarks}</th>
// </tr>
// </table>


// `
// document.write(show)

// ------------------------------------------------

// var user = parseInt(prompt("Choose your Number 1 to 10"))
// var num = (Math.floor (Math.random() * 10))
// console.log(num)
// if(user === num){
//     document.write("Bingo! Correct Answer")
// }
// else{
//     document.write("try Again")
// }

// ------------------------------------------------

// var user = parseInt(prompt("Which num is devisible by 3"))
// if(user  %3){
//     alert("Wrong")
// }
// else{
//     alert("Correct")
// }

// ------------------------------------------------

// var user = parseInt(prompt("input your Num"))
// if(user %2){
//     alert("Odd Number")
// }
// else{
//     alert("even Number")
// }

// ------------------------------------------------

// var tem = parseInt( prompt("enter your city tempreture"))
// if(tem > 40 ){
//     alert("it is too Hot Outside")
// }
// else if(tem > 30 ){
//     alert("The wheather is today normal")
// }
// else if(tem > 20 ){
//     alert("Today wheather is cool")
// }
// else if(tem > 10 ){
//     alert("OMG! Today wheather is so Cool")
// }

// ------------------------------------------------

// val1=Number(prompt("plaese enter your first value number"));
// sign=prompt("please enter your operator");
// val2=Number(prompt("plaese enter your second value number"));

// if (sign==="+"){
//  var sum=val1 + val2;
//  alert("Ans in sum = "+sum);   
// }else if(sign==="-"){
//  var subtract=val1 - val2;
//  alert("Ans in subtraction = "+subtract);
// }else if(sign==="*"){
//  var multiply=val1 * val2;
//  alert("Ans in multiply = "+multiply);
// }else if(sign==="%"){
//  var modulas=val1 % val2;
//  alert("Ans in subtraction = "+modulas);
// }else if(sign==="/"){
//  var devison=val1 / val2;
//  alert("Ans in devision = "+devision);
// }else{
//     alert("please fill box properly")
// }

// Chapter 9 - 11

