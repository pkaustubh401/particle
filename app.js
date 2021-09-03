// // var constraints = {video: true};

// // // function sucessCallback(stream){
// // //     var video = document.querySelector("video");
// // //     video.src= window.URL.createObjectURL(stream);
// // // }

// // // function errorCallback(error){
// // //     console.log("navigator.mediaDevices.getUserMedia error ",error);
// // // }

// // navigator.mediaDevices.getUserMedia(constraints).then(function(stream){
// //     var video = document.querySelector("video");
// //     video.src= window.URL.createObjectURL(stream);
// // })
// // .catch(function(err){
// //     console.log("navigator.mediaDevices.getUserMedia error ",err);
// // });

// const constraints = {
//     video: true,
//   };
  
//   const video = document.querySelector("video");
  
//   navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
//     video.srcObject = stream;
//   });