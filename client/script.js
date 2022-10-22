async function showCustomNotification(title,message){
  var notificationOptions = {
    body: message,
    icon: '/favicon.png'
  };

  let granted = false;

    if (Notification.permission === 'granted') {
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }
    if(granted)
    {
        const notification = new Notification(title, notificationOptions);

        // close the notification after 10 seconds
        setTimeout(() => {
            notification.close();
        }, 10 * 1000);
    }
}