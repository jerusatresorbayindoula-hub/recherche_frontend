// //1.
// const extraire_nom_prenom_fil = {
//     nom:"BAYIS",
//     prenom:"Trésor",
//     filiere:"Genie logiciel"
// }

// const nom = extraire_nom_prenom_fil.nom
// const prenom = extraire_nom_prenom_fil.prenom
// const filiere = extraire_nom_prenom_fil.filiere

// const extraction = {nom,prenom,filiere} 
// console.log(extraction);
//====================================================================

// //2.=============================================================
// const extraire_nom_prenom_fil = {
//     nom:"BAYIS",
//     prenom:"Trésor",
//     filiere:"Genie logiciel",
//     niveau:"Licence 2"
// }
// const {nom,prenom,filiere,niveau:classe} =  extraire_nom_prenom_fil
// console.log(nom);
// console.log(prenom);
// console.log(filiere);
// console.log(classe); // j'ai extrais niveau
//=====================================================================

// //3.=================================================================
// const tab = [14,20,18]
// const [premiere, deuxieme, derniere] = tab;
// console.log(`la premiere note est : ${premiere}`);
// console.log(`la deuxieme note est : ${deuxieme}`);
// console.log(`la derniere note est : ${derniere}`);

// //4.=============================================================
// const tab = [14,20,18]
// const [premiere,,derniere] = tab
// console.log(premiere,derniere);
//==================================================================

// //5.===============================================================
// const extraire_nom_prenom_fil = {
//     nom:"BAYIS",
//     prenom:"Trésor",
//     filiere:"Genie logiciel",
//     niveau:"Licence 2",
// }
// const {nom,prenom,filiere,niveau:classe,email="tresorbayindoula@gmail.com"} =  extraire_nom_prenom_fil
// console.log(`email : ${email}`);
//=============================================================================

// //6.
// const info = {
//     nom:"BAYIINDOULA",
//     prenom:"Trésor",
//     filiere:"Genie logiciel",
//     niveau:"Licence 2",
// }
// const {nom,prenom,filiere,niveau:classe} =  info
// const presentation = () =>{
//     console.log(`Je suis ${prenom} ${nom}, je suis en ${classe} de la filière ${filiere}`);    
// };
// presentation()