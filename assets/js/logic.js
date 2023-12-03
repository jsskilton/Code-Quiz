var timerInterval;
var timeLeft = 150;
var currentQuestionIndex = 0;
var userScore = 0;

document.getElementById('start').addEventListener('click', startQuiz);
document.getElementById('submit').addEventListener('click', submitScore);

function startQuiz() {
    hideElement('start-screen');
    showElement('questions');
    startTimer();
    displayQuestion();
}

function startTimer() {
    timerInterval = setInterval(function () {
        // Display the remaining time on the page
        document.getElementById('time').textContent = timeLeft;
        // Check if time has run out
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
        // Decrement the time
        timeLeft--;
    }, 1000);
}

function displayQuestion() {
    // Check if there are more questions to display
    if (currentQuestionIndex < questions.length) {
        var currentQuestion = questions[currentQuestionIndex];
        // Set the text content of the question title element
        document.getElementById('question-title').textContent = currentQuestion.question;
        var choicesContainer = document.getElementById('choices');
        // Clear existing choices
        choicesContainer.innerHTML = '';
        // Loop through each choice in the current question
        for (var i = 0; i < currentQuestion.choices.length; i++) {
            // Create a button element for each choice
            var choiceButton = document.createElement('button');
            choiceButton.textContent = currentQuestion.choices[i];
            // Add a click event listener to the button to check the answer
            choiceButton.addEventListener('click', function (event) {
                checkAnswer(event.target.textContent);
            });
            choicesContainer.appendChild(choiceButton);
        }
    } else {
        // If no more questions, end the quiz
        endQuiz();
    }
}

function checkAnswer(userChoice) {
    var currentQuestion = questions[currentQuestionIndex];
    if (userChoice === currentQuestion.choices[currentQuestion.correctAnswer]) {
        // Correct answer, move to the next question
        currentQuestionIndex++;
        displayQuestion();
    } else {
        // Incorrect answer, deduct 10 seconds and move to the next question
        timeLeft -= 10;
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Function to update the final score on the end-screen
function updateFinalScore() {
    // Retrieve the correct score from local storage
    userScore = parseInt(localStorage.getItem('userScore')) || 0;
    // Cap the final score at 0 if it's negative
    userScore = Math.max(0, userScore);
    // Display the correct score on the end-screen
    document.getElementById('final-score').textContent = userScore;
}

function endQuiz() {
    clearInterval(timerInterval);
    // Retrieve the user score from local storage
    var timeRemaining = parseInt(document.getElementById('time').textContent);
    // Set the user's score to the time remaining
    userScore = timeRemaining;
    // Cap the final score at 0 if it's negative
    userScore = Math.max(0, userScore);
    hideElement('questions');
    showElement('end-screen');
    document.getElementById('final-score').textContent = userScore;
    // Add logic to handle the end of the quiz
    // For example, display the final score, hide the question screen, and show the end screen
}

function submitScore() {
    var initialsInput = document.getElementById('initials');
    var initials = initialsInput.value.trim();
    if (initials !== '') {
        // Get the time remaining from the timer element
        var timeRemaining = parseInt(document.getElementById('time').textContent);
        // Set the user's score to the time remaining
        userScore = timeRemaining;
        // Cap the final score at 0 if it's negative
        userScore = Math.max(0, userScore);
        // Get existing high scores from local storage
        var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        // Add the current score and initials to the high scores array
        highScores.push({ initials: initials, score: userScore });
        // Sort high scores in descending order
        highScores.sort(function (a, b) {
            return b.score - a.score;
        });
        // Save the updated high scores to local storage
        localStorage.setItem('highScores', JSON.stringify(highScores));
        // Redirect to highscores.html
        window.location.href = 'highscores.html';
    }
}



function hideElement(elementId) {
    document.getElementById(elementId).style.display = 'none';
}

function showElement(elementId) {
    document.getElementById(elementId).style.display = 'block';
}

function displayHighScores(scores) {
    // Get the reference to the 'highscores' element in the HTML
    var highscoresList = document.getElementById('highscores');
    // Check if the 'highscores' element exists
    if (!highscoresList) {
        console.error("Element with id 'highscores' not found");
        return;
    }
    // Clear the existing content inside the 'highscores' element
    highscoresList.innerHTML = '';
    // Iterate through each score in the 'scores' array
    scores.forEach(function (score) {
        // Create a new list item element
        var listItem = document.createElement('li');
        // Set the text content of the list item with the initials and score
        listItem.textContent = score.initials + ' - ' + score.score;
        highscoresList.appendChild(listItem);
    });
}

function hideElement(elementId) {
    document.getElementById(elementId).style.display = 'none';
}

function showElement(elementId) {
    document.getElementById(elementId).style.display = 'block';
}