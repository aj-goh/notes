// Callback: Gambling simulator
const gamble = (winChance) => Math.random() < winChance ? "You win!" : "You lose!";

// Higher-order function: Roulette
function roulette(callback) {
    console.log("Spinning the roulette wheel...");
    const win = callback(0.5);  // 50% chance to win
    console.log(win);
}

// Higher-order function: Blackjack
function blackjack(callback) {
    console.log("Playing Blackjack...");
    const win = callback(0.3);  // 30% chance to win
    console.log(win);
}

// Play the games
roulette(gamble);
blackjack(gamble);
