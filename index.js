function setTime() {

    const now = new Date();
    const seconds = now.getSeconds();
   // console.log(seconds);
    const secondsDegrees = ((seconds/60) * 360) + 90;
    const secondHand = document.querySelector('.second-hand');
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    let minutes = now.getMinutes();
   // console.log(minutes);
    const minuteHand = document.querySelector('.min-hand');
    const minutesDegrees = ((minutes/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
   // console.log(hours);
    const hourHand = document.querySelector('.hour-hand');
    const hoursDegrees = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    let time = document.querySelector('.time');
    if(minutes.toString().length === 1){minutes = '0' + minutes};
    const formattedTime = `${hours}:${minutes}`;
    time.textContent = formattedTime;
}
let currentTime = true;

if (currentTime){
    setInterval(setTime, 1000);
}

let zones;
// time API logic
window.onload = function() {
    // call timezone api to get json object of valid time zones
    // process json object into array of timezones and assign it to var: zones
    
  };
function updateZones() {
    const datalist = document.getElementById('zoneList');

            // Clear existing options
            datalist.innerHTML = '';            // Filter the array based on user input
            const filteredZones = zones.filter(zone => zone.toLowerCase().includes(timeZoneInput.value.toLowerCase()));
             // Populate the datalist with filtered options
             filteredZones.forEach(zone => {
                 const option =document.createElement('option') ;
                 option.value = zone;
                 datalist.appendChild(option);
             });

}

const timeZoneInput = document.getElementById('time-zone');
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click' , function(e){
    if(!zones.includes(timeZoneInput.value)){
        alert('enter a valid time zone from the list');
    }
    else {
        let timeZone = getTimeZone();
    }
});


async function getTimeZone() {
    const response = await fetch(`http://worldtimeapi.org/api/timezone/${document.getElementById('time-zone')}`);
            const data = await response.json();
            console.log(data);
            return data;
}

