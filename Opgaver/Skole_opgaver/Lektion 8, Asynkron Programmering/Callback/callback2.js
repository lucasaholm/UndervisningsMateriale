function langvarig(nr, callback) {...}
try {
langvarig(1, slut1);
}
catch (e) {
console.log('Exception: ' + e);
}
function slut2(fejl, resultat) {
if (fejl)
console.log('Fejl: ' + fejl);
else
console.log('Resultat: ' + resultat);
}

function slut1(fejl, resultat) {
  if (fejl)
  console.log('Fejl: ' + fejl);
  else {
  console.log('Resultat: ' + resultat);
  try {
  langvarig(2, slut2);
  }
  catch (e) {
  console.log('Exception: ' + e);
  }
  }
  }

  