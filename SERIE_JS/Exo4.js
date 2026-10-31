//1.
const additionner = (...nombres) => {
    return nombres.reduce((somme, nombre) => somme + nombre, 0);
};

console.log(additionner(2, 3));
console.log(additionner(2, 3, 4));
console.log(additionner(1, 2, 3, 4, 5));

//2.
const afficherPremierEtAutres = (premier, ...autres) => {
    console.log("Premier argument :", premier);
    console.log("Autres arguments :", autres);
};

afficherPremierEtAutres("Trésor", "Junior", "Yves", "Marie");

//3.
const creerFiche = (nom, filiere, ...competences) => {
    return {
        nom: nom,
        filiere: filiere,
        competences: competences
    };
};

console.log(creerFiche("Trésor", "Génie logiciel", "HTML", "CSS", "JavaScript"));

//4.
//Le paramètre rest doit être placé à la fin de la liste des paramètres, car il récupère tous les arguments qui restent. Si on le plaçait avant un autre paramètre, JavaScript ne saurait pas comment répartir correctement les arguments.