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
setInterval(setTime, 1000);