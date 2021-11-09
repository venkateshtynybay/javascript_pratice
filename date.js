var d1 = new Date()
console.log(d1+ "<br>"); // current date dynamically


var d2 = new Date(2021,0,22,15,22,50,100) // year-month-date-hours-minutes-sec-ms
                                         // this static dont change
console.log(d2);



var d3 = new Date(2021,0,22,15,24) // year-month-date-hours-minutes
console.log(d3);



var d4 = new Date(2021,0,22,15,) // year-month-date-hours
console.log(d4);



var d5 = new Date(2021,0,22)  // year-month-date
console.log(d5);


var d6 = new Date(2021,0)   // year-month
console.log(d6);




var d7 = new Date(3000) // 3 mill seconds this come default time since 1970-jan-01,
console.log(d7);



var d8 = new Date(1000000000000) //this mill seconds to be add to 1970 this date
console.log(d8);



var d9 = new Date(-1000000000000)  // this mill seconds will subtract from this date 1970 (come -1938)
console.log(d9);

var d10 = new Date(99,02)  //year month will come hours minutes and sec ms come from zero
console.log(d10);



var d11 = new Date("2021 january 22,10:50")  // string date
console.log(d11);