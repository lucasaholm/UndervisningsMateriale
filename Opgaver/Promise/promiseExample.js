const recordVideoOne = new Promise((resolve, reject) => {
  resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
  resolve('Video 3 Recorded')
})


//returnerer et array af de som er resolved
Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages)  =>{
  console.log(messages)
})


//hvis man vil returnerer så snart den første er færdig

Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then((messages)  =>{
  console.log(messages)
})