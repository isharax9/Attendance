console.log("Checking for Attendance");

if (!sessionStorage.getItem('attendance'))
    sessionStorage.setItem('attendance', "false");


async function checkNow() {
    while (true) {
        await delay(10);

        if (sessionStorage.getItem("attendance") == "true") {
            document.getElementsByClassName('caption')[0].querySelector('span').innerHTML += " Marked"
            break;
        }

        let refresh = document.getElementById('online_attendance_panel').querySelectorAll('button');

        if (refresh.length == 2) {
            refresh[0].click();
            sessionStorage.setItem('attendance', "true");
            window.location.reload();
        }
        else {
            refresh[0].click();
        }

    }
}

checkNow();

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time * 1000)
    });
}
