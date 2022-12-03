let countdown;

function display(time) {
    console.log(countdown)
    console.log(time)
    var hour = Math.floor(time / 3600);
    time = time - hour * 3600;
    let minute = Math.floor(time / 60)
    let second = time - minute * 60;
    let hour2 = document.getElementById("hour");
    hour2.innerHTML = second+"h"
    let minute2 = document.getElementById("minute");
    minute2.innerHTML = second+"m"
    let second2 = document.getElementById("second");
    second2.innerHTML = second+"s"
    if(hour == 0 && minute2 == 0 && second2== 0)
    {
        countdown == false;
    }
}

function start() {
    if(countdown == false || countdown == undefined) {
        countdown == true;
        let Hour = document.getElementById("Hour").value;
        let Minutes = document.getElementById("Minutes").value;
        let Seconds = document.getElementById("Seconds").value;
        if(document.getElementById("Hour").value="")
        {
            Hour = 0;
        }
        if(document.getElementById("Minutes").value="")
        {
            Minutes = 0;
        }
        if(document.getElementById("Seconds").value="")
        {
            Seconds = 0;
        }

        Minutes = Minutes+(Hour*60);
        Seconds = Seconds+(Minutes*60);


    }
}

let cntbutton = document.getElementById("button");
Rx.Observable.fromEvent(cntbutton, "click")
    .subsrcribe(
        (value) => start(), console.log(countdown)
    );