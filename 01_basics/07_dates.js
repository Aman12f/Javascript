// let myDate =  new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())

// console.log(typeof myDate)

// let myCreatedDate = new Date(2023,0, 23)
// console.log(myCreatedDate.toDateString())
// let myCreatedDate1 = new Date("2023-03-20")
// console.log(myCreatedDate1.toDateString());

// let myCreatedDate2 = new Date("03-20-2025")
// console.log(myCreatedDate2.toDateString())

// let myTimeStamp = Date.now();
// console.log(myTimeStamp)
// console.log(myCreatedDate1.getTime())

// console.log(Math.floor(Date.now()/1000))
// console.log(myCreatedDate2.getMonth())
// console.log(myCreatedDate2.getDay())

// let newDate = new Date()
// newDate.toLocaleDateString('default',{
//     weekday:"narrow"
// })
// note : ctrl+space to get the properties  


console.log("Getting city time zones");
var cityTimezones = require('city-timezones');
const cityLookup = cityTimezones.lookupViaCity('Nagpur');
console.log(cityLookup);
console.log(`Time zone of ${cityLookup[0].city} is ${cityLookup[0].timezone}`);

function getCityDateTime(cityTimeZone) {
    const dateOptions = {
        timeZone: cityTimeZone,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long', // Include the day of the week
    };

    const timeOptions = {
        timeZone: cityTimeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    };

    const dateFormatter = new Intl.DateTimeFormat([], dateOptions);
    const timeFormatter = new Intl.DateTimeFormat([], timeOptions);

    const now = new Date();

    const date = dateFormatter.format(now);
    const time = timeFormatter.format(now);

    const array = [];
    array[0] = date;
    array[1] = time;

    return array;
}

const cityTimeZone = cityLookup[0].timezone;
const [date, time] = getCityDateTime(cityTimeZone);
console.log(`Date: ${date}`);
console.log(`Time: ${time}`);
