importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBn0kORKJHN_X4uVidhjulK-dAnRujOO3A",
    projectId: "gaule-top-up-center",
    messagingSenderId: "645605489690",
    appId: "1:645605489690:web:0b0f2898d295be03c1e5a3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification ? payload.notification.title : "🚨 Naya Order Aayo!";
    const notificationOptions = {
        body: payload.notification ? payload.notification.body : "Please check your dashboard.",
        icon: 'gaulestore.png',
        vibrate: [500, 200, 500, 200, 800]
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
