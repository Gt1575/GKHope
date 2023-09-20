function calculateCountdown(endDate) {
    var now = new Date();
    var timeDifference = endDate - now;

    if (timeDifference <= 0) {
        return { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    var seconds = Math.floor(timeDifference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var years = Math.floor(days / 365);

    days %= 365;
    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    return { years, days, hours, minutes, seconds };
}

function initializeCountdown(id, endDate) {
    var countdownElement = document.getElementById(id);

    function updateCountdown() {
        var countdown = calculateCountdown(endDate);

        if (countdown.years <= 0 && countdown.days <= 0 && countdown.hours <= 0 && countdown.minutes <= 0 && countdown.seconds <= 0) {
            countdownElement.innerHTML = "&#10004;"; // Checkmark symbol
        } else {
            countdownElement.innerHTML = `${countdown.years} years, ${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes, ${countdown.seconds} seconds`;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Initialize the countdown for each milestone
initializeCountdown('countdown1', new Date(2023, 4, 11));  // Half a year of pure relationship
initializeCountdown('countdown2', new Date(2023, 6, 17));  // Reunite
initializeCountdown('countdown3', new Date(2023, 10, 11));  // 1st year anniversary
initializeCountdown('countdown4', new Date(2024, 2, 1));  // Junior college graduation for K
initializeCountdown('countdown5', new Date(2024, 3, 1));  // Applying for universities for K
initializeCountdown('countdown6', new Date(2024, 6, 10));  // Graduation of GT
initializeCountdown('countdown7', new Date(2024, 8, 1));  // Reuniting and living together
initializeCountdown('countdown8', new Date(2024, 10, 11));  // Complete 2 years of relationship and celebrate in Paris
initializeCountdown('countdown9', new Date(2025, 0, 1));  // Start planning our marriage
initializeCountdown('countdown10', new Date(2025, 10, 11));  // Get married
initializeCountdown('countdown11', new Date(2026, 10, 11));  // Start planning for Hope/First wedding anniversary
initializeCountdown('countdown12', new Date(2027, 3, 1));  // Plan to buy our own house
initializeCountdown('countdown13', new Date(2027, 10, 28));  // Procreate for Hope
initializeCountdown('countdown14', new Date(2030, 0, 1));  // Plan another kid
