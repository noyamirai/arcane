const targetDate = new Date(new Date().getFullYear(), 10, 1);
const startDate = new Date(new Date().getFullYear(), 0, 1);

// Get the current date
const currentDate = new Date();

// Calculate the total time difference and the elapsed time
const totalTime = targetDate - startDate;
const elapsedTime = currentDate - startDate;

// Calculate progress as a percentage
const progressPercentage = Math.min(100, (elapsedTime / totalTime) * 100);

// ASCII progress bar
const totalBlocks = 35; // Length of the progress bar
const filledBlocks = Math.round((progressPercentage / 100) * totalBlocks);
const emptyBlocks = totalBlocks - filledBlocks;

let progressBarHTML = '';

// Add filled blocks
for (let i = 0; i < filledBlocks; i++) {
    progressBarHTML += `<span class="filled">▓</span>`;
}

// Add empty blocks
for (let i = 0; i < emptyBlocks; i++) {
    progressBarHTML += `<span class="empty">░</span>`;
}

document.getElementById('progressText').textContent = `Remaining: ${100 - progressPercentage.toFixed(0)}%`;
document.getElementById('progressBar').innerHTML = progressBarHTML;