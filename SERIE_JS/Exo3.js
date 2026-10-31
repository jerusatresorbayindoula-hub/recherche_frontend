//1.
const groupeA = ["Trésor", "Junior",];
const groupeB = ["Marie", "Paul"];

const tousLesEtudiants = [...groupeA, ...groupeB];
console.log(tousLesEtudiants);

//2.copie
const copie = [...groupeA]
copie.push("Cheikh")
console.log("Tableau original : ",groupeA);
console.log("La copie : ",copie);

//3.
const etudiantDeBase=
{
    id :1,
    nom:"DIOP",
    prenom:"Yves",
    password:"Passer2008",
    email:"yves@gmail.com",
    filiere:"Genie logiciel",
    niveau:"Licence 2"
}
const etudiantComplet = {...etudiantDeBase,age: 22,ville: "Dakar"};
console.log(etudiantComplet);

//4.copie etudiantDeBase
const copieEtudiantDeBase = {...etudiantDeBase,niveau:"L3"}
console.log("Objet original :",etudiantDeBase);
console.log("Copie modifiée :", copieEtudiantDeBase);

//5.fusion
const coordonnees = {nom: "DIOP",ville: "Dakar"};
const contact = {email: "yves@gmail.com",ville: "Pikine"};
const profil = {...coordonnees,...contact};
console.log(profil);

