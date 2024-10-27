// 49 dars SERVER NIMA
""

// 50 dars Winga XAMPP yuklash
""

// 51 JSON Chuqur clonlash

const car = {
    name: "BMW",
    color: "red",
    extra: {
        isAirbag: false,
        balon: 5
    }
}


// objecti jsonga ugirib beradi
const objTOJson = JSON.stringify(car);
console.log(objTOJson);


// Jsondi objctga ugirib beradi
const JsonToObj = JSON.parse(objTOJson);
console.log(JsonToObj);


// objecti chuqur clonlash
const clone = JSON.parse(JSON.stringify(car))
console.log(clone );

// // 52 DARS AJAX
const uzs = document.querySelector('#uzs'),
usd = document.querySelector('#usd');

uzs.addEventListener('input', function () {
    const request = new XMLHttpRequest();
    request.open('GET', "./assest/json/app.json");
    request.setRequestHeader('Content-Type', 'application/jsonl; charset=utf-8');
    request.send();

    request.addEventListener('load', function () {

        if (request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            usd.value = (+uzs.value / data.current.usd);
        } else {
            usd.value = '404 Not found'
        }
    })  
})