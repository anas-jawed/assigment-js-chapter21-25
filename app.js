// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name

// let FirstName = prompt("Enter Your First Name");
// let SecondName = prompt("Enter Your Second Name");

// let FinalName = `My Name is ${FirstName + SecondName}`;

// console.log(FinalName);



// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser


// let favorite = prompt("Enter Your favourite mobile phone");

// let length = favorite.length;

// console.log(favorite);
// console.log(`Length of string: ${length}`);


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser 


// let country = "Pakistani";
// let index = country.indexOf("n");

// console.log(country);
// console.log(`Index of n: ${index}`);

// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser

// let greet = "Hello World";

// let index = greet.lastIndexOf("l");

// console.log(greet);
// console.log(`Last index of 'I' ${index}`);


// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser


// let city = "Hyderabad";
//  console.log(city);

//  city = "Islamabad";

//  console.log(`After Replacement: ${city}`);


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;

// let message = "ALi and Sami are best friends .They Play cricekt and football together";

// console.log(message);

// let message1 = message.replace(/and/g, "&");
// console.log(message1);

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser

// let str = "472";
// console.log(`value: ${str}`);
// console.log(typeof(str));

// let numbver = Number(str);
// console.log(`value: ${numbver}`);
// console.log(typeof(numbver));

// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.


// let small = "peanuts";
// console.log(`User input: ${small}`);
// let large = small.toUpperCase();
// console.log(`Upper Case: ${large}`);

//11. Write a program that takes user input. Convert and 
// show the input in title case

// let user = prompt("Enter some value");

// console.log(`User input ${user}`);

// let title = user.toUpperCase();
// console.log(`Title Case: ${title}`);

// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// let num = 35.56;
// console.log(`Number: ${num}`);
// console.log(typeof(num));
// let str = String(num);
// str = str.replace(".", "");
// console.log(`Result ${str}`);
// console.log(typeof(str));



// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .


// let username = prompt("Enter your name");

// while (!isValidUsername(username)) {
//     alert("Invalid username. Please enter a valid username (no special characters like @, ., or !).");
//     username = prompt("Enter your username:");
// }

// alert("Username is valid: " + username);

// 4. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example



// let A = ["cake","apple pie","cookie","chips","patties"];

// let user = prompt("Enter an items");

// let found = false;

// for(let i = 0; i<A.length; i++){
//     if(A[i].toLowerCase() === user.toLowerCase()){
//         found = i;
//         break;
//     }
// }
    
// if(found !== -1){
//     alert(`cookie is available at index ${found} in our bakery `)
// } else{
//     alert(`${user} is not available in our items`);
// }

// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// let user = prompt("Enter Your Password");
// if(user === "a-z"){
//     if(user === "A-Z"){
//         if(user === "0-9"){
//           console.log(correct)   
//         }
//     }
// } else{
//     console.log("Wrong Password");
// }


// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// let university = "University of karachi";
// console.log(university);
// console.log(typeof(university));
// university = university.split("");
// console.log(university);
// console.log(typeof(university));


// 17. Write a program to display the last character of a user 
// input


// let user = "Pakistan";
// // console.log(user.slice(-1));

// 8. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string


// let quote = "The quick brown fox jumps over the lazy dog";



