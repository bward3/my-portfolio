var weatherImg = document.getElementById('weather');
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('modal-img');
var modalLink = document.getElementById('modal-link');

weatherImg.onclick = function() {
    modal.style.display = 'block';
    modalImg.setAttribute('src', './assets/images/weather-sc.png');
    modalLink.setAttribute('href', 'https://bward3.github.io/weather-dashboard/')
}
var plannerImg = document.getElementById('planner');
plannerImg.onclick = function() {
    modal.style.display = 'block';
    modalImg.setAttribute('src', './assets/images/planner-sc.png');
    modalLink.setAttribute('href', 'https://bward3.github.io/day-planner/')
}
var quizImg = document.getElementById('quiz');
quizImg.onclick = function() {
    modal.style.display = 'block';
    modalImg.setAttribute('src', './assets/images/quiz-sc.png');
    modalLink.setAttribute('href', 'https://bward3.github.io/coding-quiz/')
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}