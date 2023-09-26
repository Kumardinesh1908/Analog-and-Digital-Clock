let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let digitalClock = document.getElementById("digitalClock");

function setClockTime(){

    let day = new Date();
    let hh = day.getHours(); // 0 to 23
    let mm = day.getMinutes(); // 0 to 59
    let ss = day.getSeconds(); // 0 to 59

    let hourDeg = (hh * 30)+(mm * 0.5); // every 60min, 30Deg then 30/60 = 0.5 per min
    let minuteDeg = (mm * 6)+(ss * 0.1); // every 60min, 60Deg then 6/60 = 0.1 per sec 
    let secondDeg = (ss * 6);

    hour.style.transform = `rotateZ(${hourDeg}deg)`;
    minute.style.transform = `rotateZ(${minuteDeg}deg)`;
    second.style.transform = `rotateZ(${secondDeg}deg)`;

    if(hh > 12){
        hh = hh-12;
    }

    let session = "PM";
    if(hh >= 12){
        session = "AM";
    }

    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    digitalClock.innerText = `${hh}` + ":" + mm + " " +session;
    

}
setInterval(setClockTime,1000);

// function digitalTime(){
//     let day = new Date();
//     let hh = day.getHours(); // 0 to 23
//     let mm = day.getMinutes(); // 0 to 59
//     let ss = day.getSeconds(); // 0 to 59

//     if(hh > 12){
//         hh = hh-12;
//     }

//     let session = "PM";
//     if(hh >= 12){
//         session = "AM";
//     }

//     hh = hh < 10 ? "0" + hh : hh;
//     mm = mm < 10 ? "0" + mm : mm;
//     ss = ss < 10 ? "0" + ss : ss;

//     digitalClock.innerText = `${hh}` + ":" + mm + " " +session;
    
// }
// setTimeout(digitalTime,1000);