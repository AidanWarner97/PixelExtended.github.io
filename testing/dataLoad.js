function xiaomi() {
    console.log("Loading Xiaomi");
    document.getElementById("heading").innerHTML = "Xiaomi";
    document.getElementById('xiaomi-devices').classList.remove('hide');
    document.getElementById('oneplus-devices').classList.add('hide');
    document.getElementById('samsung-devices').classList.add('hide');
};

function oneplus() {
    console.log("Loading OnePlus");
    document.getElementById("heading").innerHTML = "OnePlus";
    document.getElementById('oneplus-devices').classList.remove('hide');
    document.getElementById('xiaomi-devices').classList.add('hide');
    document.getElementById('samsung-devices').classList.add('hide');
};
function samsung() {
    console.log("Loading Samsung");
    document.getElementById("heading").innerHTML = "Samsung";
    document.getElementById('samsung-devices').classList.remove('hide');
    document.getElementById('oneplus-devices').classList.add('hide');
    document.getElementById('xiaomi-devices').classList.add('hide');
}
