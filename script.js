function generateCV() {
// Récupérer les données du formulaire
const name = document.getElementById('name').value;
const job = document.getElementById('job').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const summary = document.getElementById('summary').value;

// Créer l'aperçu du CV
const cvOutput = document.getElementById('cvOutput');
cvOutput.innerHTML = `
<h2>CV de ${name}</h2>
<p><strong>Poste:</strong> ${job}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Téléphone:</strong> ${phone}</p>
<p><strong>Résumé:</strong> ${summary}</p>
`;
}
