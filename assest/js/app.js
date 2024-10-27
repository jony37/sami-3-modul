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