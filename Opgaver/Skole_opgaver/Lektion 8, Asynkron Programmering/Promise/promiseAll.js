function langvarig(nr) {...}
Promise.all([langvarig(1), langvarig(2)])
.then(resultater => console.log('Resultater: ' + resultater))
.catch(fejl => console.log('Fejl/exception: ' + fejl));