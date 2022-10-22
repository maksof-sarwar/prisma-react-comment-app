importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

if (!firebase.apps.length) {
  console.log("CAMERE IN JS");
  firebase.initializeApp({
    apiKey: 'AIzaSyC9iA7BwGC9SERj7lI1voy1uBEL9oXumMM',
    appId: '1:1099248815449:web:0418bd1f00fcde58a11048',
    messagingSenderId: '1099248815449',
    projectId: 'film-festival-9b1c7',
    authDomain: 'film-festival-9b1c7.firebaseapp.com',
    storageBucket: 'film-festival-9b1c7.appspot.com',
    measurementId: 'G-YPW5SD0GZM',
});
}
else{
  console.log("INITITALISE firebase app");
  firebase.App();
}
// Necessary to receive background messages:
const messaging = firebase.messaging();
//messaging.usePublicVapidKey("BL69SzcR_FVjlnPkSC1KwT_aLdqlSe1kAaUoSZ6AZcZbEEExGsSQEKLk82gBtyoxDXYM0GMwU9DO0MliepNBuWM");
// Optional:
/*messaging.getToken().then((currentToken) => {
  if (currentToken) {
    console.log(currentToken);
  } 
}).catch((err) => {
  console.log(err);
  
});*/

messaging.onBackgroundMessage((payload) => {
  // Customize notification here
  var notificationTitle = 'Background Message Title';
  var notificationOptions = {
    body: 'Background Message body.',
    icon: '/favicon.png'
  };
  console.log("notification status "+Notification.permission);
  return self.registration.showNotification(notificationTitle,notificationOptions);
});