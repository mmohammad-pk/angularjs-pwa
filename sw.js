importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.precaching.precacheAndRoute([
  {
    "url": "app.c233e0aaaede9533e5e5.css",
    "revision": "afbfad376158db3c76c214e7ce06d195"
  },
  {
    "url": "app.c233e0aaaede9533e5e5.js",
    "revision": "bd960f0fe95398b299637b08cc9cf7b7"
  },
  {
    "url": "css/bootstrap-slider.css",
    "revision": "2130c463352af096e2760f2157da9abd"
  },
  {
    "url": "css/bootstrap-slider.min.css",
    "revision": "a47094cc19bed91af505e81201a25eef"
  },
  {
    "url": "css/bootstrap-theme.min.css",
    "revision": "ab6b02efeaf178e0247b9504051472fb"
  },
  {
    "url": "css/bootstrap.min.css",
    "revision": "ec3bb52a00e176a7181d454dffaea219"
  },
  {
    "url": "css/datepicker.css",
    "revision": "0fd3465bcc650204cb6cb4c8a1cd4276"
  },
  {
    "url": "css/font-awesome.min.css",
    "revision": "269550530cc127b6aa5a35925a7de6ce"
  },
  {
    "url": "css/google-fonts.css",
    "revision": "907e14ee9b12183e282fb5b60ef994af"
  },
  {
    "url": "css/ionicons.min.css",
    "revision": "1690997909aae14b023a6580d4a2f33f"
  },
  {
    "url": "img/favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "img/icons/icon-128x128.png",
    "revision": "c868628f85920746394b72634dfcc4f9"
  },
  {
    "url": "img/icons/icon-144x144.png",
    "revision": "cd8497548afb834dda62757379542627"
  },
  {
    "url": "img/icons/icon-152x152.png",
    "revision": "fe8578eb15d077ca8c61b136d721f816"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "cba69c4d0a85d58c52948906f09cc2e5"
  },
  {
    "url": "img/icons/icon-384x384.png",
    "revision": "09e0f809670656f359124debc2f18af5"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "499374c2e19adb5ef3b3dadc7cc53412"
  },
  {
    "url": "img/icons/icon-72x72.png",
    "revision": "18f662ec383f61bfe9db19a5a43fcec5"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "5e7bb9c1b59630a0a57a10b506ba83b8"
  },
  {
    "url": "img/logo.png",
    "revision": "ea22a975d89accbb6bf7ca0b352e1f7d"
  },
  {
    "url": "index.html",
    "revision": "0f3d6e5f121d4616f13386c2e3574f25"
  },
  {
    "url": "scripts/bootstrap-datepicker.js",
    "revision": "3955be3ad412a10b08bf0eb6ce3514cd"
  },
  {
    "url": "scripts/bootstrap-slider.js",
    "revision": "abf8763f8ee91603a5f9d2bd388159f0"
  },
  {
    "url": "scripts/bootstrap-slider.min.js",
    "revision": "c23bab7d5f2621acafdc1b7d9df2ce88"
  },
  {
    "url": "scripts/bootstrap.min.js",
    "revision": "5869c96cc8f19086aee625d670d741f9"
  },
  {
    "url": "scripts/fd9dba5260.js",
    "revision": "5e272b45ff6c795f78181fd60a3812ae"
  },
  {
    "url": "scripts/jquery.min.js",
    "revision": "c9f5aeeca3ad37bf2aa006139b935f0a"
  }
]);

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}