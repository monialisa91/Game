
function setGameElements() {
	switch(gameState) {
		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
			break;
		case 'ended':
			newGameBtn.innerText = 'Play again';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
	}
}

function setGamePoints() {
	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;
}


function newGame() {
	player.name = prompt('Please enter your name', 'Name of the player');
	if (player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();
		playerNameElem.innerHTML = player.name;
		setGamePoints(); 
	}

}

function endOfTheGame (playerScore, computerScore, playerName) {
	if(playerScore == 3) {
		alert('The end of the game. ' + playerName + ' is the winner.');
		gameState = 'ended';
		setGameElements();
	}
	else if(computerScore == 3) {
		setGamePoints();
		alert('The end of the game. Computer is the winner.');
		gameState = 'ended';
		setGameElements();
	}
}

function checkRoundWinner(playerPick, computerPick){
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';
	var winnerIs = 'player';

	if (playerPick == computerPick) {
		winnerIs = 'none'; 
	} else if (
		(computerPick == 'rock' &&  playerPick == 'scissors') ||
		(computerPick == 'scissors' &&  playerPick == 'paper') ||
		(computerPick == 'paper' &&  playerPick == 'rock')) {

		winnerIs = 'computer';
	}

	if (winnerIs == 'player') {
		playerResultElem.innerHTML = 'Win!';
		player.score++;
	} else if (winnerIs == 'computer') {
		computerResultElem.innerHTML = 'Win!';
		computer.score++;
	}
	
	setGamePoints();
	// ALERTS HERE
	alert(player.score);
	alert(computer.score);
	endOfTheGame(player.score, computer.score, player.name);
}



function getComputerPick() {
	var possiblePicks = ['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
}

function playerPick(playerPick){
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}


var newGameBtn = document.getElementById('js-newGameButton');

var pickRock = document.getElementById('js-playerPick_rock'),
	pickPaper = document.getElementById('js-playerPick_paper'),
	pickScissors = document.getElementById('js-playerPick_scissors');

var gameState = 'notStarted', 
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};

var newGameElem = document.getElementById('js-newGameElement'),
	pickElem = document.getElementById('js-playerPickElement'),
	resultsElem = document.getElementById('js-resultsTableElement');

var playerPointsElem = document.getElementById('js-playerPoints'),
	playerNameElem = document.getElementById('js-playerName'),
	computerPointsElem = document.getElementById('js-computerPoints');

var playerPickElem = document.getElementById('js-playerPick'),
	computerPickElem = document.getElementById('js-computerPick'),
	playerResultElem = document.getElementById('js-playerResult'),
	computerResultElem = document.getElementById('js-computerResult');

newGameBtn.addEventListener('click', function() { newGame() });
pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });








