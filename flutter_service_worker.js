'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "650beec8cecac0d094cd4fcfe09f5a4f",
"assets/AssetManifest.json": "9912031063dfeb51edda4c59d6727001",
"assets/assets/adidas_shoe.png": "c7b72d7f426c3c461299fe1195743178",
"assets/assets/adidas_shoe2.png": "70ea4d27d173d15da4e74c308f853d4f",
"assets/assets/adidas_shoe3.png": "3290a5e35770543ea2126dcac46a4549",
"assets/assets/capsale.png": "cba7142fa6e0d0339c65ebc15b45e4cc",
"assets/assets/capsale1.png": "e701f8e18835a5ee9bcec731a202857e",
"assets/assets/capsale2.png": "a6cc99cd00d81aef4286ed9a0994aac7",
"assets/assets/clearance.png": "bd90aa287f05c81c1f7f8fbc9350c193",
"assets/assets/forwomen.png": "d91b9867d498b1f53432907c3e18d16f",
"assets/assets/forwomen2.png": "61d0a83c31ae8086e5b4560641a817f6",
"assets/assets/forwomen3.png": "19e61baf27694c66df18e03247d6e0a1",
"assets/assets/hat.png": "2060633c1d7d82ce46ac8e5660df3826",
"assets/assets/jacket.png": "4a144fae7ea520ccfd04ee571cd89499",
"assets/assets/jacketsale.png": "5af8dbcc26d2d3b08f9acff86d00f94c",
"assets/assets/jacket_man.png": "0985d991f2ef8bba4241e5d0aabde0ba",
"assets/assets/jacket_man1.png": "b571d04af3cf5e522501b9c7e4cebea7",
"assets/assets/jacket_man2.png": "0a09348b7c70289f43340f8b465e18d1",
"assets/assets/jean.png": "55b4bbc116db38086905bbb1b2aad09f",
"assets/assets/jeanman.png": "2ea66daffda4cace5b479042a2d87079",
"assets/assets/jeanman1.png": "9e70568d8ccf7cd835803f6abd26aa58",
"assets/assets/jeanman3.png": "6e11d73e6006b4caf5105b76e44fc261",
"assets/assets/kids.png": "9c03313a0c484b3cc41bf30101e9dde1",
"assets/assets/kids_shoe.png": "3af36ce0081a0e0aca1903f1b1d0ea11",
"assets/assets/kids_shoe1.png": "186b3a83e9db5880e37ac758879c1e8d",
"assets/assets/kids_shoe3.png": "45cdcca03a6779f456f2148ece8e314d",
"assets/assets/logo.png": "a61a79ae797c2d1a8e7fd9f03eee45a4",
"assets/assets/man.png": "0ff0a11f0e13f9007c54e069eb7ed5df",
"assets/assets/mancloth.png": "eb7fe4ec9fb8b3432e173f55ef5305e9",
"assets/assets/mancloth2.png": "007e13a0beaf33359238e5e95776fe5b",
"assets/assets/mancloth3.png": "88e149d28bc551b3b9c4b725e04915e6",
"assets/assets/nike.png": "6b64ca007612182502ffd652d2f97ea9",
"assets/assets/nike_.png": "2d6fc5a4724d15b5a71f25550038186c",
"assets/assets/paystack.png": "dadb8d8618b5c7095d900033639c0fdb",
"assets/assets/sale.png": "c53249c741da45cc7a90b0f5d9637d8c",
"assets/assets/shoe1.png": "11c622ed35bb5d6da79905680dd1d49d",
"assets/assets/shoe2.png": "7c9e4bfd20fb2433c5ae0939910b6547",
"assets/assets/shoe3.png": "db7267742b065516deebff231fb10c27",
"assets/assets/shoes.png": "8954dd322d86b5ee3d705521dd873867",
"assets/assets/shoesale.png": "757cca777d43347856cecc62b8cf30b7",
"assets/assets/women.png": "aabf48996137beeef7a6e78740aafe87",
"assets/assets/womendress.png": "49ac10e11eabeb76abba80190fcc509c",
"assets/assets/womendress2.png": "980a33ed5e0dd314b4236dd06676e90e",
"assets/assets/womendress4.png": "2db96906b368b04c0d7e81683274625f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "169436f7dcc37d593b5be11748850c97",
"assets/NOTICES": "50b6e161f6288891236ae0b8b6a65757",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_paystack/assets/images/american_express.png": "fac1ed63030230003fa52ee8f98aa8dc",
"assets/packages/flutter_paystack/assets/images/dinners_club.png": "24450426cbb1e5b657356b6cca621956",
"assets/packages/flutter_paystack/assets/images/discover.png": "c3a58509fe14ba54b0ca0ff29ee5619d",
"assets/packages/flutter_paystack/assets/images/dob.png": "33734b76a856e9b07934793d83a14cae",
"assets/packages/flutter_paystack/assets/images/jcb.png": "82658437070a16f35238c2f989a00c2a",
"assets/packages/flutter_paystack/assets/images/mastercard.png": "6aecef820a950ef57140f79e07da916a",
"assets/packages/flutter_paystack/assets/images/otp.png": "99aa2d23b63c65db7565622ce17ef3e9",
"assets/packages/flutter_paystack/assets/images/paystack.png": "0b8db920412edd7d8b40e7e7e01ac439",
"assets/packages/flutter_paystack/assets/images/paystack_icon.png": "5b143d4fa4eb48496adc052b89849025",
"assets/packages/flutter_paystack/assets/images/successful.png": "bd7cfa16ecd2b480ca4875fbf8d6f9e2",
"assets/packages/flutter_paystack/assets/images/verve.png": "d9e7f9a5b6987ec61b7c2d0bd7db1271",
"assets/packages/flutter_paystack/assets/images/visa.png": "a8b02279da904c1f40e041b20cbaf49c",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c9647404c5e518c7a3891b64c22f6ee2",
"/": "c9647404c5e518c7a3891b64c22f6ee2",
"main.dart.js": "9ce282b6f41b343185dae360a50dc939",
"manifest.json": "f64191d4734ae8249aa5dac8db0508d9",
"version.json": "11859a22443da1b9d816183dd4adb62d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
