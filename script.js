const endDate = new Date("January 1, 2024 00:00:00")

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) %  60;
    inputs[3].value = Math.floor(diff) % 60;
}
// 1 day = 24hrs
// 1 hr = 60min
// 60 min = 3600sec
clock();

setInterval(
    () => {
        clock();
    },
    1000
)