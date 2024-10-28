class PersonError extends Error { } // arver constructor
// ... throw new PersoError("Person fejl: " + ...); ...
try {
// her er der kode, der kan give en fejl
} catch (e) {
if (e instanceof PersonError) {
// ...
} else {
throw e;
}
}