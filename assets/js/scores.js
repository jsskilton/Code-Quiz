// Display high scores on the highscores.html page
function displayHighScores() {
  // Get the reference to the 'highscores' element in the HTML
  var highscoresList = document.getElementById('highscores');
  // Check if the 'highscores' element exists
  if (!highscoresList) {
    console.error("Element with id 'highscores' not found");
    return;
  }
  // Retrieve high scores from local storage
  var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  // Clear the existing content inside the 'highscores' element
  highscoresList.innerHTML = '';
  // Iterate through each score in the 'highScores' array
  highScores.forEach(function (score) {
    // Create a new list item element
    var listItem = document.createElement('li');
    // Set the text content of the list item with the initials and score
    listItem.textContent = score.initials + ' - ' + score.score;
    // Append the new list item to the 'highscores' element
    highscoresList.appendChild(listItem);
  });
}

// Call displayHighScores when the page loads
document.addEventListener('DOMContentLoaded', function () {
  displayHighScores();
});

// Clear highscores
document.getElementById('clear').addEventListener('click', function () {
  // Clear highscores from local storage
  localStorage.removeItem('highScores');

  // Clear the displayed highscores
  displayHighScores([]);
});