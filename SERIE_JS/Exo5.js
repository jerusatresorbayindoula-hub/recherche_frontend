//.1
const extraireIdentite = (etudiant) => {
    const { prenom, nom, filiere } = etudiant;

    return { prenom, nom, filiere };
};

//2. 

const calculerMoyenneNotes = (notes) => {
    if (notes.length === 0) {
        return 0;
    }

    const somme = notes.reduce((total, note) => total + note, 0);

    return somme / notes.length;
};

//3.

const ajouterNote = (etudiant, nouvelleNote) => {
    return {...etudiant,notes: [...etudiant.notes, nouvelleNote]
    };
};

//4.

const creerResume = (etudiant, ...options) => {
    return {
        identite: extraireIdentite(etudiant),
        moyenne: calculerMoyenneNotes(etudiant.notes),
        options: options
    };
};

//5.
const etudiant = {
    nom: "DIOP",
    prenom: "Yves",
    filiere: "Genie logiciel",
    notes: [12, 14, 16]
};

// Garder une copie des données initiales pour les tests
const etudiantAvant = {
    ...etudiant,
    notes: [...etudiant.notes]
};

// Test 1 : extraire l'identité
console.log(extraireIdentite(etudiant));

// Test 2 : calculer la moyenne
console.log(calculerMoyenneNotes(etudiant.notes));
console.log(calculerMoyenneNotes([]));            

// Test 3 : ajouter une note
const nouvelEtudiant = ajouterNote(etudiant, 18);

console.log(nouvelEtudiant.notes); 
console.log(etudiant.notes);       

// Test 4 : créer un résumé
console.log(creerResume(etudiant, "complet", "avec moyenne"));

// Test 5 : vérifier que l'original n'a pas changé
console.log(
    JSON.stringify(etudiant) === JSON.stringify(etudiantAvant)
); 

