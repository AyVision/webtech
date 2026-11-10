// Funktion: läuft erst, wenn sie aufgerufen wird (durch onclick)
function zeigen() {
  // Findet das Element mit id="satz" und speichert es in const satz
  const satz = document.getElementById("satz");
  // Macht den versteckten Satz sichtbar
  satz.style.display = "block";
}