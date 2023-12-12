function setTime() {

    const now = new Date();
    const seconds = now.getSeconds();
   // console.log(seconds);
    const secondsDegrees = ((seconds/60) * 360) + 90;
    const secondHand = document.querySelector('.second-hand');
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
   // console.log(minutes);
    const minuteHand = document.querySelector('.min-hand');
    const minutesDegrees = ((minutes/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
   // console.log(hours);
    const hourHand = document.querySelector('.hour-hand');
    const hoursDegrees = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
let currentTime = true;

if (currentTime){
    setInterval(setTime, 1000);
}

const timeZoneRadio = document.getElementById('zone');
const coordinatesRadio = document.getElementById('coordinates');

const zoneSpace = document.querySelector('.enter-zone');
const coordinatesSpace = document.querySelector('.enter-coordinates');

timeZoneRadio.addEventListener('click' ,function(e) {
    zoneSpace.style.visibility = 'visible';
    coordinatesSpace.style.visibility = 'hidden';
});
coordinatesRadio.addEventListener('click' ,function(e) {
    coordinatesSpace.style.visibility = 'visible';
    zoneSpace.style.visibility = 'hidden';
});