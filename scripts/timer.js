export function startTimer() {
    let time = Number(localStorage.getItem("tempo_restante")) || 5 * 60;
    const counter = document.querySelector('.counter-value');

    const formatTime = () => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        counter.textContent = `${minutes}:${seconds}`;
    }

    formatTime();

    const timer = setInterval(() => {
        time--;
        formatTime();

        localStorage.setItem("tempo_restante", time);

        if (time < 0) {
            clearInterval(timer);
            counter.textContent = "00:00";
            localStorage.removeItem("tempo_restante");
        }

        if (time < 4 * 60 && time !== 0) {
            Object.assign(counter.style, {
                color: "red",
                fontWeight: "bold",
                backgroundColor: "#fff",
                padding: "0 20px",
                borderRadius: "10px",
                animation: "blink 1s infinite"
            });
        }
    }, 1000);
}
