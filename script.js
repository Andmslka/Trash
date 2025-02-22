// Функция для движения мусоровоза
function moveTruck() {
    const truck = document.getElementById('truck');
    let position = 0;
    const interval = setInterval(() => {
        if (position >= window.innerWidth - truck.width) {
            clearInterval(interval);
        } else {
            position += 5;
            truck.style.transform = `translateX(${position}px)`;
        }
    }, 30);
}
