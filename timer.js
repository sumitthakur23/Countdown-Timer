function countdown(hours, minutes, seconds) {
    const target = document.getElementById("timer");
    let totalTime = hours * 3600 + minutes * 60 + seconds;
    clearInterval(window.currentTimer);  // Clear any existing timer
    window.currentTimer = setInterval(() => {
        totalTime--;
        let hours = Math.floor(totalTime / 3600);
        let remainder = totalTime % 3600;
        let minutes = Math.floor(remainder / 60);
        let seconds = remainder % 60;

        if (totalTime < 0) {
            clearInterval(window.currentTimer);
            target.innerHTML = "00:00:00";
            Swal.fire({
                icon: 'success',
                title: 'Countdown Over!',
                text: 'The countdown has ended.',
                confirmButtonColor: '#800080',
                confirmButtonText: 'OK',
                backdrop: `
                    rgba(0,0,123,0.4)
                    url('Images/alarm.png')
                    center left
                    no-repeat
                `
            });
        }
         else {
            target.innerHTML = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }
    }, 1000);
}

document.getElementById("startTimer").addEventListener("click", function() {
    const hours = parseInt(document.getElementById("hours").value, 10) || 0;
    const minutes = parseInt(document.getElementById("minutes").value, 10) || 0;
    const seconds = parseInt(document.getElementById("seconds").value, 10) || 0;
    countdown(hours, minutes, seconds);
});

document.getElementById("resetTimer").addEventListener("click", function() {
    clearInterval(window.currentTimer);
    document.getElementById("timer").innerHTML = "00:00:00";
    // Optionally clear the input fields as well
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
});
