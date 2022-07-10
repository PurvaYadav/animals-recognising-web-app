var lion = "";
var cat = "";
var dog = "";
var cow = "";

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/CkgZntctT/model.json',modelReady);
}

function modelReady() {
    classfier.classify(gotResults);
}

function gotResults (error, gotResults ) {
if (error) {
    console.log(error);
}
else {
console.log(results);
random_color_r = Math.floor(Math.random()*255) + 1;
random_color_g = Math.floor(Math.random()*255) + 1;
random_color_b = Math.floor(Math.random()*255) + 1;

document.getElementById("result_voice").innerHTML = 'Detected -'+cat+'Detected -'+dog+'Detected -'+cow+'Detected -'+lion;
document.getElementById("result_voice").style.color = "rgb("+random_number_r+random_number_g+random_number_b+")";

img = document.getElementById("roaring");
img1 = document.getElementById("meowing");
img2 = document.getElementById("mooing");
img3 = document.getElementById("barking");

if (results[0].label =="background noise"){
    img = document.getElementById = 'gif.gif';
}
else if (results[0].label =="meowing"){
    img1 = document.getElementById = 'meowing.gif';
}
else if (results[0].label =="mooing"){
    img2 = document.getElementById = 'mooing.gif';
}
else if (results[0].label =="barking"){
    img3 = document.getElementById = 'barking.gif';
}
else if (results[0].label == "roaring"){
    img = document.getElementById = 'roaring.gif';
}
}
}