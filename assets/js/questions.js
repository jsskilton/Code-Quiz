var questions = [
    {
      question: 'Q1: Inside which HTML element do we put the JavaScript?',
      choices: ['<js>', '<scripting>', '<script>', '<javascript>'],
      // Index of the correct answer in the choices array i.e. '<js>' DONT FORGET ARRAYS ARE INDEXED AT ZERO
      correctAnswer: 2
    },
    {
      question: 'Q2: What is the correct JavaScript syntax to change the content of the HTML element: <p id="demo">This is a demonstration.</p>',
      choices: ['document.getElement("p").innerHTML = "Hello World!"; ', 'document.getElementByName("p").innerHTML = "Hello World!";', '#demo.innerHTML = "Hello World!";', 'document.getElementById("demo").innerHTML = "Hello World!"; '],
      correctAnswer: 3
    },
    {
      question: 'Q3: Where is the correct place to insert a JavaScript?',
      choices: ['The <head> section ','Both the <head> section and the <body> section are correct ','The <body> section'],
      correctAnswer: 1
    },
    {
      question: 'Q4: What is the correct syntax for referring to an external script called "xxx.js"?',
      choices: ['<script href="xxx.js">','<script name="xxx.js">','<script src="xxx.js"> '],
      correctAnswer: 2
    },
    {
      question: 'Q5: The external JavaScript file must contain the <script> tag.',
      choices: ['True','False'],
      correctAnswer: 1
    },
    {
      question: 'Q6: How do you write "Hello World" in an alert box?',
      choices: ['msg("Hello World");','alert("Hello World");','msgBox("Hello World");','alertBox("Hello World");'],
      correctAnswer: 1
    },
    {
      question: 'Q7: How do you create a function in JavaScript?',
      choices: ['function:myFunction()','function = myFunction()','function myFunction()'],
      correctAnswer: 2
    },
    {
      question: 'Q8: How do you call a function named "myFunction"?',
      choices: ['call function myFunction()','myFunction() ','call myFunction()'],
      correctAnswer: 1
    },
    {
      question: 'Q9: How to write an IF statement in JavaScript?',
      choices: ['if i = 5','if (i == 5)','if i = 5 then','if i == 5 then'],
      correctAnswer: 1
    },
    {
      question: 'Q10: How to write an IF statement for executing some code if "i" is NOT equal to 5?',
      choices: ['if i =! 5 then','if i <> 5','if (i <> 5)','if (i != 5)'],
      correctAnswer: 3
    }
  ];