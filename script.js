const day = document.getElementById('days');
const hour = document.getElementById('hours');
const minute = document.getElementById('minutes');
const second = document.getElementById('seconds');

const halloween = '31 october 2024';


const countdown = ()=>{

    const holiday = new Date(halloween)
    const today = new Date()

    const seconds = (holiday - today) / 1000;

    const countdownSeconds = (seconds) % 60;
    
    const minutes = (seconds / 60) % 60;
    const hours = (seconds / 3600) % 24;
    const days = (seconds / 3600) / 24;

    day.textContent = Math.round(days);
    hour.textContent = Math.round(hours);
    minute.textContent = Math.round(minutes);
    second.textContent = Math.round(countdownSeconds)

    console.log(countdownSeconds);

    
}

countdown()

setInterval(countdown, 1000)
// My mistake was that id tags are case sensitive.