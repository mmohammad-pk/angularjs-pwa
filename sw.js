importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.precaching.precacheAndRoute([
  {
    "url": "app.8b714c3edb3e904cd04f.css",
    "revision": "59315fde8219095e16e2799afdb90a2d"
  },
  {
    "url": "app.8b714c3edb3e904cd04f.js",
    "revision": "1c72b7b394a73e919c6b18e0121d5b27"
  },
  {
    "url": "img/favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "img/logo.png",
    "revision": "ea22a975d89accbb6bf7ca0b352e1f7d"
  },
  {
    "url": "index.html",
    "revision": "d1e54ef23bc37acf7efb5b48c4344034"
  }
]);

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}