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

// time API logic
let zones; // array that stores list of valid time zones
const timeZoneInput = document.getElementById('time-zone');
timeZoneInput.addEventListener('click' , function(e){
    zones = getListOfZones();
});

function updateZones() {
    const datalist = document.getElementById('zoneList');

            // Clear existing options
            datalist.innerHTML = '';
            console.log(zones);
            // Filter the array based on user input
            // const filteredZones = zones.filter(zone => zone.toLowerCase().includes(timeZoneInput.value.toLowerCase()));
            // // Populate the datalist with filtered options
            // filteredZones.forEach(zone => {
            //     const option =document.createElement('option') ;
            //     option.value = zone;
            //     datalist.appendChild(option);
            // });

}

async function getListOfZones() {
    const response = await fetch(`http://worldtimeapi.org/api/timezone`);
    let myPromise = response.json();
    myPromise.then((result) => {
        // Accessing the array within the resolved object
        const myArray = result;
      
        // Now you can use myArray as needed
        console.log(myArray);
      })
            
}


let submitButton = document.querySelector('.submit');
submitButton.addEventListener('click' , function(e){
    const zoneChecked = document.querySelector('input[id="zone"]').checked;
    const coChecked = document.querySelector('input[id="coordinates"]').checked;

    if (!zoneChecked && !coChecked) {
        console.log('none are checked');
    }
    else if (zoneChecked) {
        // api call for entered time zone
        console.log('zone');
        try {
            getTimeZone();
        }
        catch {

        }

    }
    else if (coChecked) {
        //api call for entered set of coordinates
        console.log('coordinates');
    }       
});


async function getTimeZone() {
    const response = await fetch(`http://worldtimeapi.org/api/timezone/${document.getElementById('time-zone')}`);
            const data = await response.json();
            console.log(data);
}

function getCoordinates() {

}