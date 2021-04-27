'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "353a59c9d20d932d829ababd9260b691",
"assets/assets/anasayfa/bayraklar/almanya.png": "392fafbceba2d5e9910a7cfa8f59ab01",
"assets/assets/anasayfa/bayraklar/amerika.png": "08ad48269d9f529a180d6f05b9b24a12",
"assets/assets/anasayfa/bayraklar/andorra.png": "75b821404310f08ef19b339658413e73",
"assets/assets/anasayfa/bayraklar/arnavutluk.png": "cd9a2cee5f5edde5127893c4999fcec7",
"assets/assets/anasayfa/bayraklar/avusturya.png": "fcb025d70200fdfe4c1c06c9070c078f",
"assets/assets/anasayfa/bayraklar/azerbaycan.png": "5be6fcd87638b3ac53476f4632211257",
"assets/assets/anasayfa/bayraklar/belarus.png": "212c9d18caea406adbf9a5706e5fc5e2",
"assets/assets/anasayfa/bayraklar/belcika.png": "c76fcb1c8e7bf887d37185ada22b5f2d",
"assets/assets/anasayfa/bayraklar/birlesikkrallik.png": "8c951c48bfccfe058e587c25398ab1c9",
"assets/assets/anasayfa/bayraklar/birlesik_krallik.png": "5946dd8f57ffe0a682e6909090d6c2ea",
"assets/assets/anasayfa/bayraklar/bosna_hersek.png": "b5bed713582f066faa7b8ec9b3009251",
"assets/assets/anasayfa/bayraklar/brezilya.png": "52681dc6d6480fe55122f9639ea8bf66",
"assets/assets/anasayfa/bayraklar/bulgaristan.png": "80807f3b52986f8336117b0b11adecd0",
"assets/assets/anasayfa/bayraklar/cin.jpg": "21d5dbe195197795c3ae906d420d1877",
"assets/assets/anasayfa/bayraklar/fransa.png": "449fdd9c7e1f81cde3c2416c08029656",
"assets/assets/anasayfa/bayraklar/guneykore.png": "a3eb5bda2957cb726985f510da18fe63",
"assets/assets/anasayfa/bayraklar/hindistan.jpg": "bdef56b27677c22b0a06f17149721194",
"assets/assets/anasayfa/bayraklar/japonya.png": "2ff72f65457acb6fa89e62a21da2bb4e",
"assets/assets/anasayfa/bayraklar/misir.png": "a953d220a2d2acce52b130eb0b252333",
"assets/assets/anasayfa/bayraklar/rusya.png": "fc24bcfde892ccfa0c20c0ce63e80081",
"assets/assets/anasayfa/bayraklar/turkiye.png": "76ead7ff60cbc09999b49797d0bba8b4",
"assets/assets/fonts/Mukta-Regular.ttf": "6f5fbe33e286ecbaee1a2933d0de25a0",
"assets/assets/galeri/silah/keles.jpg": "7a53bc06f9a3af60c962cf37c257b36b",
"assets/assets/ulkedetay/askeribanner.jpg": "a1b725cbe9792fe3cb9dead41ba65b6a",
"assets/assets/ulkedetay/cografikonumbanner.jpg": "f573bfc3438f00be3f7849779f801917",
"assets/assets/ulkedetay/dinbanner.jpg": "ba0b098a15fa1dd4dbdba01df9581c77",
"assets/assets/ulkedetay/harita/almanyaharita.jpg": "a2119cd67ce9aed219ec41c41d9cb3a3",
"assets/assets/ulkedetay/harita/andorraharita.png": "a9f199cbb8a88d3c732f335e2c0f4abe",
"assets/assets/ulkedetay/harita/arnavutlukharita.jpg": "d8e45da80825687c449ece820b6f2f1e",
"assets/assets/ulkedetay/harita/avusturyaharita.jpg": "a4c2f1f099adad6aed12705129f4dd18",
"assets/assets/ulkedetay/harita/azerbaycanharita.jpg": "9015a747776930183348bde2d30c2bb7",
"assets/assets/ulkedetay/harita/belarusharita.jpg": "52c03d69a31f398aa34dd47a30a521b1",
"assets/assets/ulkedetay/harita/belcikaharita.jpg": "3872a8393cfe31cc42819b43cb2f4602",
"assets/assets/ulkedetay/harita/birlesikkrallikharita.jpg": "388da633287ea3c1ad28682b8b8eb079",
"assets/assets/ulkedetay/harita/bosnhersekharita.jpg": "79698e5864891009e3384a3ad0af18bd",
"assets/assets/ulkedetay/harita/bulgaristanharita.jpg": "d5a2db199fbe3b9286f84992fa9d6725",
"assets/assets/ulkedetay/harita/krallikharita.jpg": "50461b50000d34bf233ffdee2d81446b",
"assets/assets/ulkedetay/iklimbanner.jpg": "2d48e4d94bedec170ab7a8b72b03293e",
"assets/assets/ulkedetay/lojistikbanner.jpg": "dbbf9ee64d47f14bf6e5060e14814877",
"assets/assets/ulkedetay/tarihbanner.jpg": "6b75d85becaa9975633722f3acc654dd",
"assets/assets/ulkedetay/tarimbanner.jpg": "8051e1f61acd4c6b9b17cfeb8bd8ff4c",
"assets/FontManifest.json": "a2c53a1d5a1ab0a10489366ee2caceaa",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a8d1d130b9909728d724354dc06becc1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "148b4fea7fc82bd4ab900446027c6bb0",
"/": "148b4fea7fc82bd4ab900446027c6bb0",
"main.dart.js": "51a6db66924c69bcb58ce9d8ff6322a8",
"manifest.json": "de7f94df782ad77268adb030e49bab99",
"version.json": "b9613a1262a48b6d24c2daf25ddea680"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
