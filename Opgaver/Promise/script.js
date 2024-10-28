/**
 * 
 */


const userLeft = false;
const userWatchingCatMeme = false;



//Using callbacks
function watchTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: 'User Left', 
      message: ':('
    })
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'WebDevSimplified < Cat' 
    })
  } else {
    callback('Thumbs up and Subscribe')
  }
}


watchTutorialCallback(message => {
  console.log(message)
}, error => {
  console.log(error.name + ' ' + error.message)
})



//Using promise
function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User left',
        message: ':('
      }) 
    } else if(userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme'
      })
    }
    else {
      resolve('Thumbs up and sub!')
    } 
  })
}


watchTutorialPromise().then((message) => {
  console.log('Success: ' + message)
}).catch((error) => {
  console.log(error.name + ' ' + error.message)
})