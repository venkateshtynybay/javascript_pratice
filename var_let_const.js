function display(){
    for(var i=0;i<=10;i++){

        console.log(i+" ");//this local variable write the function in side ..
                           //dont write out side the function write coming error
    }
   
}
display();
//console.log(" " +i); ==> coming error

//variable working in only function  in side..






//============================******* LET ******===========================//


// let is block wise working 
// this is working in particular loop



function display(){

    for(let i=0;i<=10;i++){


        console.log(i)   //block level
    }                   // let working in particular loop


    //console.log(i)// ==> out of block here declare coming  error line because this out of block
}
display()


//============================****const******===============================//

//example:1
const PI =3.14; // constant value

console.log(PI);

//example:2

const student ={name: 'venkatesh',};
 student.name = " venkatesh naidu dasireddi";


console.log(student.name);
//property values changes possible


//example:3


// const student ={name: 'venkatesh',};
// student.name = {name:"venkatesh",age: 12};

//console.log(student.name);

//property changes not possible




//==================**** GLOBAL VARIABLE *****======================//

// global variable created variable function out side 


// var x=10;
// function display(){

//     console.log(x);
    
// }

// display();

