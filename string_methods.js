
//***************************JavaScript String Methods************************************//

//charAt()
var str="javascript";  
console.log(str.charAt(5)); //It provides the char value present at the specified index. 

//charCodeAt()
var str="javascript";  
console.log(str.codePointAt(1));//It provides the Unicode value of a character present at the specified index.

//concat()	
var s1="javascript ";  
var s2="concat example";  
var s3=s1.concat(s2);  
console.log(s3);  //It provides a combination of two or more strings.


//indexOf()	
var s1="javascript from java point index of";  
var n=s1.indexOf("from");  
console.log(n);  //It provides the position of a char value present in the given string.


//lastIndexOf()
var s1="javascript from javatpoint indexof";  
var n=s1.lastIndexOf("java");  
console.log(n);  //It provides the position of a char value present in the given string by searching a character from the last position.


//toLowerCase()  
var s1="JavaScript toLowerCase Example";  
var s2=s1.toLowerCase();  
console.log(s2); //	It converts the given string into lowercase letter.


//toLocaleLowerCase()	
var s1="JavaScript toLowerCase Example";  
var s2=s1.toLowerCase();  
console.log(s2);  //It converts the given string into lowercase letter on the basis of host?s current locale.


//toLocaleUpperCase()
var s1="JavaScript toUpperCase Example";  
var s2=s1.toUpperCase();  
console.log(s2);  	//It converts the given string into uppercase letter on the basis of host?s current locale.



//slice()
var s1="abcdefgh";  
var s2=s1.slice(2,4);  
console.log(s2);  	//It is used to fetch the part of the given string. It allows us to assign positive as well negative index.


//split()	
var str=" hai hello This is Javapointwebsite";  
console.log(str.split(" ")); //splits the given string
//It splits a string into substring array, then returns that newly created array.


//search()
var str="JavaScript is a scripting language. Scripting languages are often interpreted";  
console.log(str.search(" is")); 	//It searches a specified regular expression in a given string and returns its position if a match occurs. 


//match()
var str="Javatpoint hello";  
console.log(str.match("Java")); //	It searches a specified regular expression in a given string and returns that regular expression if a match occurs. 


//replace()	
var course = "javascript learning "//It replaces a given string with the specified replacement.
console.log(course.replace("learning", "angular"));


//substr()	
var str="Javatpoint angular";  
console.log(str.substr(0,04));  //It is used to fetch the part of the given string on the basis of the specified starting position and length.


//toString()
var str="Java point hello world"; 
var str1="hello world"; 
console.log(str1.toString());  //	It provides a string representing the particular object.


//valueOf()	
var str=new String("Javatpoint hello");  
console.log(str.valueOf());  //It provides the primitive value of string object.


//trim()	
var s1=" javascript trim    "; 
var s3="hello world"; 
var s2=s1.trim();  
console.log(s3);  //It trims the white space from the left and right side of the string.