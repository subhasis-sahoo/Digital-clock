let hour = document.getElementById("hrs");
let minute = document.getElementById("min");
let second = document.getElementById("sec");

hour.innerHTML = (new Date().getHours() < 10? "0" : "") + new Date().getHours();

minute.innerHTML = (new Date().getMinutes() < 10? "0" : "") + new Date().getMinutes();

second.innerHTML = (new Date().getSeconds() < 10? "0" : "") + new Date().getSeconds();


setInterval(() => {
    hour.innerHTML = (new Date().getHours() < 10? "0" : "") + new Date().getHours();

    minute.innerHTML = (new Date().getMinutes() < 10? "0" : "") + new Date().getMinutes();

    second.innerHTML = (new Date().getSeconds() < 10? "0" : "") + new Date().getSeconds();

}, 1000);