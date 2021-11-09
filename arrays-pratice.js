//=============================arrays method ========================================

 let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 1
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 2
    },
    {
    
        "color": "yellow",
        "type": "station nano",
        "registration": new Date('2018-03-03'),
        "capacity": 3
    },
    {
    
        "color": "green",
        "type": " station scope",
        "registration": new Date('2018-03-03'),
        "capacity": 4
    },
    {
    
        "color": "blue",
        "type": "station cross",
        "registration": new Date('2018-03-03'),
        "capacity": 5
    },
    {
    
        "color": "red",
        "type": "station speed",
        "registration": new Date('2018-03-03'),
        "capacity": 6
    },
  ]
  

let cab = {
    "color": "silver",
    "type": "cab",
    "registration": new Date('2016-05-02'),
    "capacity": 123
  }
  cars.unshift(cab);      // add object at the first position
  console.log(cars)

  cars.push(cab);         // add object at the last position
  console.log(cars)

  cars.shift(cab);        // remove object at the first position
  console.log(cars)

cars.pop(cab);           // remove object at the last position
console.log(cars)       

 // cars.reverse(cab);     //  object position display reverse order
  console.log(cars)


cars.splice(4, 0, cab);  // splice working in method changes the contents of an array by removing or replacing existing elements
console.log(cab);           

cars.slice(0);
console.log(cab)       //  adding and the method








// ============================= * filter get multiple items in array  * ======================================


let students = [
    {
      "name": "siva",
      "id nub": 1,
      "branch": "mine",
      "block": "a",
      "date of joining" : 22-03-20 
    },
    {
        "name": "rama",
        "id nub": 2,
        "branch": "eee",
        "block": "b",
        "date of joining" : 22-03-20 
      
    },
    {
    
        "name": "hari",
      "id nub": 3,
      "branch": "mech",
      "block": "a",
      "date of joining" : 22-03-20 
    
    },
    {
    
        "name": "swamy",
        "id nub": 4,
        "branch": "civil",
        "block": "a",
        "date of joining" : 22-03-20 
      
    },
    {
    
        "name": "jai",
      "id nub": 5,
      "branch": "it",
      "block": "a",
      "date of joining" : 22-03-20 
    
    },
    {
        "name": "nani",
        "id nub": 6,
        "branch": "ece",
        "block": "b",
        "date of joining" : 22-03-20 
      
    },
  ]
  

let student = {
    "name": "mahe",
      "id nub": 1,
      "branch": "ece",
      "block": "b",
      "date of joining" : 22-03-20 
    
  }

  students.unshift(student);
  console.log(students)


  

let goodStudent = students.filter(student => student.branch ==="ece");
console.log(goodStudent);

 

let student_admission = students.filter(student => student.dateofjoining ==="22-03-20");
console.log(student_admission);


let newStudent = students.filter(student => student.block ==="b");
console.log(newStudent);



let student_name = students.filter(student => student.name === "mahe");
console.log(student_name);

 




//=====================* Transform objects of an array - Array.map * ============================================



let voters = [
    {
      "name": "siva",
      "surname":"v",
      "age": 18,
      "village": "mine",
      "address": "near bank",
    
    },
    {
        "name": "jai",
        "surname":"v",
        "age": 30,
        "village": "mine",
        "address": "near bank",
      
    },
    {
    
        "name": "siva",
        "surname":"v",
        "age": 60,
        "village": "mine",
        "address": "near bank",
    
    },
    {
    
        "name": "china",
        "surname":"v",
        "age": 22,
        "village": "mine",
        "address": "near bank",
      
    },
    {
        "name": "nan",
        "surname":"v",
        "age": 65,
        "village": "mine",
        "address": "near bank",
    
    },
    {
        "name": "kris",
        "surname":"v",
        "age": 18,
        "village": "mine",
        "address": "near bank",
      
    },
  ]
  

let voter = {
    "name": "ramesh",
      "surname":"v",
      "age": 25,
      "village": "mine",
      "address": "near bank",
    
  }
  

let ages = voters.map(voters => {
    if (voters.age <= 18){
      return "young age";
    }
    else if (voters.age<= 28){
      return "middle age";
    }
    else{
        return "old age";
    }
  });
  console.log(ages);



  //============================== * foreach * ===============================================


  voters.forEach(voters => {
    voters['age'] = "old age";
    if (voters.address <= 18){
      voters['address'] = "young age";
    }
    if (voters.address <= 3){
      voters['address'] = "middle age";
    }
    
   });

//=========================== * find * =============================================================

let elections = voters.find(voters => voters.name === "siva");
console.log(elections)