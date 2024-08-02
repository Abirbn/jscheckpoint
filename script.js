//inverser une chaine 
function inverString(){
    var str= "serine";
    var reverse= str.split('').reverse('').join('');
    return reverse;

}
console.log(inverString());

//1st solution :compter le nombre de caractere 
function compteNombre1() {
    var str = "serine";
    var nombreDeCaracteres = str.length; 
    return nombreDeCaracteres;
}

console.log(compteNombre1());
//2nd solution :compter le nombre de caractere 
function compteNombre2(str){
    var compteur =0;
    while(str[compteur]!=undefined){
        compteur++;
    }
return compteur
}
var chaine="serine";
console.log(compteNombre2(chaine));

//la premiere lettre dune phrase en majuscule 
function Majuscule(phrase) {
    
    var mots = phrase.split(' ');

    for (var i = 0; i < mots.length; i++) {
        if (mots[i].length > 0) {
            mots[i] = mots[i][0].toUpperCase() + mots[i].slice(1);
        }
    }
    return mots.join(' ');
}

console.log(Majuscule("bonjour serine jespere que tous vas bien"));

//Trouver le max
function Max(arr) {
 
    let max = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }

    return max; 
}

const numbers = [3, 5, 7, 2, 8, -1, 4];
console.log(Max(numbers)); 
//min 
function Min(arr){
let min=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]< min){
        min= arr[i];
    }
}

return min;

}

console.log(Min(numbers)); 
//function somme des elements dun tableau 
function somme(arr){
    let somme=0;
    for(i=0;i<arr.length;i++){
        somme+=arr[i]
    }
 
return somme;
}
console.log(somme(numbers));


//factorial

function factorial(n) {
    if (n < 0) {
        console.log("La factorielle n'est pas définie pour les nombres négatifs.");
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); 
//nombre premier 

function premier(num) {
    if (num <= 1) return false; // Les nombres ≤ 1 ne sont pas premiers
    if (num === 2) return true; // 2 est le seul nombre premier pair
    if (num % 2 === 0) return false; // Les autres nombres pairs ne sont pas premiers

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false; 
    }

    return true; 
}

console.log(premier(7));
//  

