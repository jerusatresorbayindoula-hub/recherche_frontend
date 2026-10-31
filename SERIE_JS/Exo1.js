//1.
const calculerMoyenne = (note1, note2, note3) => {
   return moyenne = (note1+note2+note3 ) / 3 
}
console.log(calculerMoyenne(10,14,15));

//2.

const estAdmis = (moyenne) => {
    if (moyenne>=10){
      return true
    }else{
      return false
    }
};
console.log(estAdmis(12)); 

//3. 
const calculerPrixTTC = (prixHT, tauxTVA = 0.18) =>{
     return(prixHT*(1+tauxTVA))
};
console.log(calculerPrixTTC(200));

//4.
const convertirEnMinutes = (heures) => {
        return heures*3600/60
}
console.log(convertirEnMinutes(heures=2));

//5. J'ai testé tous les cas et j'ai appelé les fonctions étape par étape 

