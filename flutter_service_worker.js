'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2398f9b0d743014a416949203ae9e00e",
"index.html": "5497ff438fa325516f500854dcd9c354",
"/": "5497ff438fa325516f500854dcd9c354",
"main.dart.js": "2a6fe4afb84342101bc767b230157164",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "da278baa6db5718300b97bb5b1882c90",
"assets/AssetManifest.json": "146cc8dc4bbeae2ad385bd0ae4fba659",
"assets/cors.json": "179b949fc9d0e0a6e37ecef51e320daf",
"assets/NOTICES": "78896481b45c2a0c0cab141c754e513c",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "dd74f11e425603c7adb66100f161b2a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/chord.guitar/DbmM7.png": "9d75146cdf2b1709baf08f1337b00881",
"assets/assets/chord.guitar/Abm7.png": "716c5bc93db31c56cfae97d6924319aa",
"assets/assets/chord.guitar/Emaj7.png": "e22dcb729f3d15fb3638d0e785e1d375",
"assets/assets/chord.guitar/Db7.png": "45c59cfcec56d5d977a477ca8b96a322",
"assets/assets/chord.guitar/G%2523maj7.png": "44ae668056d5329af473fe48bbc14de9",
"assets/assets/chord.guitar/Cm.png": "f906bc3446ff92654490256af5c190b2",
"assets/assets/chord.guitar/Gbm%25202.png": "0d6f491e509e7780b28bffc622da8103",
"assets/assets/chord.guitar/C%2523mM7.png": "9d75146cdf2b1709baf08f1337b00881",
"assets/assets/chord.guitar/Abmaj7.png": "44ae668056d5329af473fe48bbc14de9",
"assets/assets/chord.guitar/BmM7.png": "8838b001079de81f4d2585fe87ae740e",
"assets/assets/chord.guitar/D%2523.png": "bf41a2adc1aba5047b1a024d257b20bd",
"assets/assets/chord.guitar/A%2523m.png": "e43748a247c9f2d6f8efbe1910360937",
"assets/assets/chord.guitar/F%2523.png": "1d6d53629547e4d8ad5d721e24343854",
"assets/assets/chord.guitar/Bb7.png": "bb8adf7c9270b89d380e9c2ff7864a9e",
"assets/assets/chord.guitar/A7.png": "5df330ee4d285007152d66311fc55d0a",
"assets/assets/chord.guitar/Bm.png": "ee005282bf10b35692b6e2b41ed9005f",
"assets/assets/chord.guitar/D%25237.png": "13657aea5f0bbcca97cdfeaa578141c7",
"assets/assets/chord.guitar/EbmM7.png": "a20fd5091fb78d8577086368318f83fa",
"assets/assets/chord.guitar/N.png": "fc1435bd7b0fcd868cec0b9f256b5307",
"assets/assets/chord.guitar/A%2523m7.png": "a45dee82b804eaed54aff3172b3ef0b3",
"assets/assets/chord.guitar/Dmaj7.png": "e8c13346a638f8c020087f10d56d8cd9",
"assets/assets/chord.guitar/Ab.png": "5e446de44cb8a291a4b2d5fd8c10bfc2",
"assets/assets/chord.guitar/C%2523m.png": "7ae30c0482dcf4d275be4b423949c86d",
"assets/assets/chord.guitar/Em.png": "d0a23ebd6f22c07b937a2635350e3673",
"assets/assets/chord.guitar/F7.png": "9181f5962cb3ad9c8b3f1b331848c436",
"assets/assets/chord.guitar/Gb7.png": "e05af7a8cdccab610a2f00bcb7881c36",
"assets/assets/chord.guitar/DmM7.png": "0c6a220a76600c2509b0bc4c560f18d6",
"assets/assets/chord.guitar/F%25237.png": "e05af7a8cdccab610a2f00bcb7881c36",
"assets/assets/chord.guitar/F%2523m7.png": "5c1ea50b9f209c1ad3a95e449e349227",
"assets/assets/chord.guitar/G%2523m7.png": "716c5bc93db31c56cfae97d6924319aa",
"assets/assets/chord.guitar/GbmM7.png": "f22aefdac69e6ed4b53759beeb6d3caa",
"assets/assets/chord.guitar/Eb7.png": "13657aea5f0bbcca97cdfeaa578141c7",
"assets/assets/chord.guitar/Gbm7.png": "5c1ea50b9f209c1ad3a95e449e349227",
"assets/assets/chord.guitar/Fmaj7.png": "ce1e3eacf5bcaf921277287e19a819f7",
"assets/assets/chord.guitar/Gb7%25202.png": "66fcbff7b57d0d935c06bee396932165",
"assets/assets/chord.guitar/Ab7.png": "527e97054b25ef6c6d3c8129821e5247",
"assets/assets/chord.guitar/Ebm7.png": "fd19af585f586379a880ee4e85f826f5",
"assets/assets/chord.guitar/Gb.png": "1d6d53629547e4d8ad5d721e24343854",
"assets/assets/chord.guitar/Gmaj7.png": "6262373f7223b72a54d0eee74bf53795",
"assets/assets/chord.guitar/GbmM7%25202.png": "8faf4e0878cfd5f90779ef6125307a45",
"assets/assets/chord.guitar/FmM7.png": "a36e8adbdcc8c90f7a9c69a024c0da74",
"assets/assets/chord.guitar/D%2523mM7.png": "a20fd5091fb78d8577086368318f83fa",
"assets/assets/chord.guitar/G%25237.png": "527e97054b25ef6c6d3c8129821e5247",
"assets/assets/chord.guitar/Dm.png": "56f51ed858d0b04fa1fd2d0dbbb5009c",
"assets/assets/chord.guitar/G7.png": "ebd35bdb4f543f9c7f8cfbfbd266beb5",
"assets/assets/chord.guitar/Gbmaj7.png": "175fced748ed2f46d7e224d1c95d656a",
"assets/assets/chord.guitar/C%2523maj7.png": "20635f6025013015cf476a8406dc4ff7",
"assets/assets/chord.guitar/Am7.png": "c27540949efeeb36d4c1a6d067a84e7d",
"assets/assets/chord.guitar/CmM7.png": "badbfbde96e2eccc897e6c2bec8d688e",
"assets/assets/chord.guitar/C%2523m7.png": "9fbb85abe307c272d8ee33049dc877d0",
"assets/assets/chord.guitar/G%2523m.png": "05590932257cd9ad4ae8fee3a378e69e",
"assets/assets/chord.guitar/D7.png": "72a578f6ab2946f197a748d65b58e6aa",
"assets/assets/chord.guitar/Gm.png": "826e7fcd4797fc03827703f965de5e74",
"assets/assets/chord.guitar/A%2523mM7.png": "d57e63e887923c383d0797f422240919",
"assets/assets/chord.guitar/Abm.png": "05590932257cd9ad4ae8fee3a378e69e",
"assets/assets/chord.guitar/Bmaj7.png": "333234332c19dcf21d8b7f5e5a7d34a7",
"assets/assets/chord.guitar/Db.png": "2b88f33acb2841b68347b99f848bf18d",
"assets/assets/chord.guitar/Cm7.png": "e04e6bf6ab05275d640797b83bc06bd5",
"assets/assets/chord.guitar/Eb.png": "bf41a2adc1aba5047b1a024d257b20bd",
"assets/assets/chord.guitar/Gm7.png": "8fd92adaafb729247939d906ba11bce2",
"assets/assets/chord.guitar/Cmaj7.png": "fa39f3589ef9898d1346dfaa6c0dd47b",
"assets/assets/chord.guitar/Ebm.png": "23da40c217400c484f25a99d829f723f",
"assets/assets/chord.guitar/Bbm7.png": "a45dee82b804eaed54aff3172b3ef0b3",
"assets/assets/chord.guitar/Gb%25202.png": "c5822acb2ce7f735230d1335d2737788",
"assets/assets/chord.guitar/Bbmaj7.png": "f0089e7df7586b58c087dac79d6b8c73",
"assets/assets/chord.guitar/BbmM7.png": "d57e63e887923c383d0797f422240919",
"assets/assets/chord.guitar/AmM7.png": "cfd336c0518ff9649d87ed8d362566c6",
"assets/assets/chord.guitar/C%25237.png": "45c59cfcec56d5d977a477ca8b96a322",
"assets/assets/chord.guitar/E7.png": "25655c7bd997e4eaaac9c4988f91115a",
"assets/assets/chord.guitar/Fm.png": "4a9e82330dd8cc3f7bff37f469365ced",
"assets/assets/chord.guitar/G%2523.png": "5e446de44cb8a291a4b2d5fd8c10bfc2",
"assets/assets/chord.guitar/Gbm.png": "6c86e3390dea338bcf9c3f408e52b9c9",
"assets/assets/chord.guitar/F%2523maj7.png": "175fced748ed2f46d7e224d1c95d656a",
"assets/assets/chord.guitar/F%2523m.png": "6c86e3390dea338bcf9c3f408e52b9c9",
"assets/assets/chord.guitar/G%2523mM7.png": "6fb8741fd35e577f30862d5285f92155",
"assets/assets/chord.guitar/Em7.png": "da120c6d72d48674604020f92bd50ddb",
"assets/assets/chord.guitar/Amaj7.png": "e96a6027224e329dbf06d7be05421db7",
"assets/assets/chord.guitar/B.png": "2df770d86441eed3bb425ec07468d18f",
"assets/assets/chord.guitar/A%2523maj7.png": "f0089e7df7586b58c087dac79d6b8c73",
"assets/assets/chord.guitar/Gbm7%25202.png": "6fdd14a147c9deddfcd7b06e11b650f5",
"assets/assets/chord.guitar/Bm7.png": "2661c6f063916fac6db2ff3d64169e9c",
"assets/assets/chord.guitar/C.png": "0636c951c1b1d580e4c8c8a980792872",
"assets/assets/chord.guitar/Bb.png": "7fc383574e838a6bbd184efb54f0f7ba",
"assets/assets/chord.guitar/Ebmaj7.png": "2764551f8dc8e6ad36a315c2601e1547",
"assets/assets/chord.guitar/Dbmaj7.png": "20635f6025013015cf476a8406dc4ff7",
"assets/assets/chord.guitar/A.png": "9285d6d5f5b4b04990d38be0664919e4",
"assets/assets/chord.guitar/A%25237.png": "bb8adf7c9270b89d380e9c2ff7864a9e",
"assets/assets/chord.guitar/Bbm.png": "e43748a247c9f2d6f8efbe1910360937",
"assets/assets/chord.guitar/Am.png": "1a706c76d197c4bc91931105cf6c6713",
"assets/assets/chord.guitar/B7.png": "1371cb392e0e2bacbe79f6cfd72d3032",
"assets/assets/chord.guitar/EmM7.png": "31f7effa22fa5532ef8a08eff3e91b9b",
"assets/assets/chord.guitar/D%2523m.png": "23da40c217400c484f25a99d829f723f",
"assets/assets/chord.guitar/C%2523.png": "2b88f33acb2841b68347b99f848bf18d",
"assets/assets/chord.guitar/C7.png": "672545dd58fd199b53763bd772ce49f5",
"assets/assets/chord.guitar/D.png": "f01fbe7a575269747171642cc8f39869",
"assets/assets/chord.guitar/D%2523m7.png": "fd19af585f586379a880ee4e85f826f5",
"assets/assets/chord.guitar/Gbmaj7%25202.png": "93a61d4a59fd482b68a423b1f3895250",
"assets/assets/chord.guitar/A%2523.png": "7fc383574e838a6bbd184efb54f0f7ba",
"assets/assets/chord.guitar/GmM7.png": "09d4eea6b57764f767aae56774aa051a",
"assets/assets/chord.guitar/E.png": "363045a7fc3b035b8c61b3baf46a5510",
"assets/assets/chord.guitar/Dm7.png": "c8cc544d17d5e716a26fd793040d9f11",
"assets/assets/chord.guitar/Dbm7.png": "9fbb85abe307c272d8ee33049dc877d0",
"assets/assets/chord.guitar/Fm7.png": "f93ac371f04c63fb9a4f26fc8b7b585c",
"assets/assets/chord.guitar/G.png": "74169b3e0a452695155de0d52dab1b71",
"assets/assets/chord.guitar/AbmM7.png": "6fb8741fd35e577f30862d5285f92155",
"assets/assets/chord.guitar/F.png": "c60cd02fee7f6fc15db88a019def4958",
"assets/assets/chord.guitar/D%2523maj7.png": "2764551f8dc8e6ad36a315c2601e1547",
"assets/assets/chord.guitar/F%2523mM7.png": "f22aefdac69e6ed4b53759beeb6d3caa",
"assets/assets/chord.guitar/Dbm.png": "7ae30c0482dcf4d275be4b423949c86d",
"assets/assets/chord.piano/DbmM7.png": "333edca69fa2659c8c012742a0cf1203",
"assets/assets/chord.piano/Abm7.png": "34f9749ee99bc7fddbe9f876490fb3e7",
"assets/assets/chord.piano/Emaj7.png": "442b1e624634fbc8da82ee69f969a0ae",
"assets/assets/chord.piano/Db7.png": "94d35bb957a70562858f9be80634ede9",
"assets/assets/chord.piano/G%2523maj7.png": "7d03bd7aea78ee176b415fc2c5b13870",
"assets/assets/chord.piano/Cm.png": "05f8c4fcd229ad0d8630501d82272136",
"assets/assets/chord.piano/C%2523mM7.png": "333edca69fa2659c8c012742a0cf1203",
"assets/assets/chord.piano/Abmaj7.png": "7d03bd7aea78ee176b415fc2c5b13870",
"assets/assets/chord.piano/BmM7.png": "021ebc907d6556960fb168470fe33a27",
"assets/assets/chord.piano/D%2523.png": "becffeba48e43348c6a77025c1f709a8",
"assets/assets/chord.piano/A%2523m.png": "67baf49028c952dbc67de2db81fbdb3f",
"assets/assets/chord.piano/F%2523.png": "2c9c6b17582e556b6e7a449441d2bbdf",
"assets/assets/chord.piano/Bb7.png": "379539b4e9f4b795bab3c9ba64d1af93",
"assets/assets/chord.piano/A7.png": "d88b48c99ec938c1dd699111fddf76dc",
"assets/assets/chord.piano/Bm.png": "204d2d1b0c97fc5e6381dadd58e5fd35",
"assets/assets/chord.piano/D%25237.png": "2de380f6c2443d14d6330347525af355",
"assets/assets/chord.piano/EbmM7.png": "cc1572655959c7338d1628a1127d657f",
"assets/assets/chord.piano/N.png": "e28d0a87f8cfee5eec06e6969bd10782",
"assets/assets/chord.piano/A%2523m7.png": "9983f863c3cbd7469a4f7ead0e290b59",
"assets/assets/chord.piano/Dmaj7.png": "89d65e3b3d218d43731dabf8d23fc76d",
"assets/assets/chord.piano/Ab.png": "4d911ba3bf7d92874bc139c50868f7ac",
"assets/assets/chord.piano/C%2523m.png": "1d46c603137ba3eed73db610a6119a0b",
"assets/assets/chord.piano/Em.png": "9d5be4861ff8f7ea56909a7776de142d",
"assets/assets/chord.piano/F7.png": "01b911c588bcd76302f89e631b2eefa8",
"assets/assets/chord.piano/Gb7.png": "ddde3b7d87cecf8f72b40a684f1d18c1",
"assets/assets/chord.piano/DmM7.png": "feb72df26199aa1650a650a518bcada5",
"assets/assets/chord.piano/F%25237.png": "ddde3b7d87cecf8f72b40a684f1d18c1",
"assets/assets/chord.piano/F%2523m7.png": "17bf45d8b036228d1f0a8ffeec69bb6c",
"assets/assets/chord.piano/G%2523m7.png": "34f9749ee99bc7fddbe9f876490fb3e7",
"assets/assets/chord.piano/GbmM7.png": "1f19d8429929d02345fbddb2bfae98aa",
"assets/assets/chord.piano/Eb7.png": "2de380f6c2443d14d6330347525af355",
"assets/assets/chord.piano/Gbm7.png": "17bf45d8b036228d1f0a8ffeec69bb6c",
"assets/assets/chord.piano/Fmaj7.png": "35c883b32f7a6f3726712197b8965236",
"assets/assets/chord.piano/Ab7.png": "b3585d7269e9bfb5aef44177040989ac",
"assets/assets/chord.piano/Ebm7.png": "9e93e75a544334dfc4fbeb81fa765fb2",
"assets/assets/chord.piano/Gb.png": "2c9c6b17582e556b6e7a449441d2bbdf",
"assets/assets/chord.piano/Gmaj7.png": "5a08c3b7469bf40dd4060fd9ef0337f0",
"assets/assets/chord.piano/FmM7.png": "d76139ff74621bbedf62f344a1b081a8",
"assets/assets/chord.piano/D%2523mM7.png": "cc1572655959c7338d1628a1127d657f",
"assets/assets/chord.piano/G%25237.png": "b3585d7269e9bfb5aef44177040989ac",
"assets/assets/chord.piano/Dm.png": "950d6bc8752499a99fbf704800062687",
"assets/assets/chord.piano/G7.png": "e9529567faf0206fad1d48812f9ce27a",
"assets/assets/chord.piano/Gbmaj7.png": "70cef4096e33f73f910500959f49af4d",
"assets/assets/chord.piano/C%2523maj7.png": "d3024227824a39083129159e97c1aa13",
"assets/assets/chord.piano/Am7.png": "6b69b5064c8188d33b98360e09aea3b4",
"assets/assets/chord.piano/CmM7.png": "b3e83d2112b18aa62e3caf9e80e4e410",
"assets/assets/chord.piano/C%2523m7.png": "8eebb5bb52fb40accdb728e9778d91f1",
"assets/assets/chord.piano/G%2523m.png": "56c77d07db3d7bb454fd62da6e878c94",
"assets/assets/chord.piano/D7.png": "7a7013736320be4ab1307320f72924d0",
"assets/assets/chord.piano/Gm.png": "ac1d4abad1bfbaf10c0e10ed343abc35",
"assets/assets/chord.piano/A%2523mM7.png": "35fe2fa52712957a744f6bc8e40152b7",
"assets/assets/chord.piano/Abm.png": "56c77d07db3d7bb454fd62da6e878c94",
"assets/assets/chord.piano/Bmaj7.png": "672299ff9984754a0ceedb22caf5b4e9",
"assets/assets/chord.piano/Db.png": "841e334b48c347fc993b4e470f958f12",
"assets/assets/chord.piano/Cm7.png": "2338d765ef192cbb139ccb4d51644929",
"assets/assets/chord.piano/Eb.png": "becffeba48e43348c6a77025c1f709a8",
"assets/assets/chord.piano/Gm7.png": "727806508844e2aaa2fc1cc970d47aef",
"assets/assets/chord.piano/Cmaj7.png": "801c73ea2318cb9c858f4aef89f82784",
"assets/assets/chord.piano/Ebm.png": "f8b5e0f0d026d65e73d78a4610319029",
"assets/assets/chord.piano/Bbm7.png": "9983f863c3cbd7469a4f7ead0e290b59",
"assets/assets/chord.piano/Bbmaj7.png": "804ed6c27d11157a2de75034373efb32",
"assets/assets/chord.piano/BbmM7.png": "35fe2fa52712957a744f6bc8e40152b7",
"assets/assets/chord.piano/AmM7.png": "04c6059b21495c5744bca4e80ef8377c",
"assets/assets/chord.piano/C%25237.png": "94d35bb957a70562858f9be80634ede9",
"assets/assets/chord.piano/E7.png": "a18ea538a76fb0c9c7f72233e99dca93",
"assets/assets/chord.piano/Fm.png": "f43b96dee211ecc3f08b4e949310a43c",
"assets/assets/chord.piano/G%2523.png": "4d911ba3bf7d92874bc139c50868f7ac",
"assets/assets/chord.piano/Gbm.png": "504b09b56b07b5575fac0dc0b6f54e1b",
"assets/assets/chord.piano/F%2523maj7.png": "70cef4096e33f73f910500959f49af4d",
"assets/assets/chord.piano/F%2523m.png": "504b09b56b07b5575fac0dc0b6f54e1b",
"assets/assets/chord.piano/G%2523mM7.png": "6228d9a33cf6383cd66c87770fb42b4c",
"assets/assets/chord.piano/Em7.png": "969f8fd32161a9c24a5ac3d510c745b4",
"assets/assets/chord.piano/Amaj7.png": "5120045ac5905ee122607cfb648a413b",
"assets/assets/chord.piano/B.png": "048f950e43763cd9347eb97e1ad7a448",
"assets/assets/chord.piano/A%2523maj7.png": "804ed6c27d11157a2de75034373efb32",
"assets/assets/chord.piano/Bm7.png": "d7c83ebfc0acee995f9d52b55ec29dc5",
"assets/assets/chord.piano/C.png": "cdcf337f862b4068f89e8c6a0cd10a41",
"assets/assets/chord.piano/Bb.png": "341a6899bba16c441cfa76a6d64d0e07",
"assets/assets/chord.piano/Ebmaj7.png": "81d99224694b80897e26500a3988b9cf",
"assets/assets/chord.piano/Dbmaj7.png": "d3024227824a39083129159e97c1aa13",
"assets/assets/chord.piano/A.png": "0bc2da09cd7a0deff85446a24e2b7678",
"assets/assets/chord.piano/A%25237.png": "379539b4e9f4b795bab3c9ba64d1af93",
"assets/assets/chord.piano/Bbm.png": "67baf49028c952dbc67de2db81fbdb3f",
"assets/assets/chord.piano/Am.png": "5ec0a87b1de9bac3e2d4eebdb264f39d",
"assets/assets/chord.piano/B7.png": "bc5b9ebc5a32bf775b10461226731140",
"assets/assets/chord.piano/EmM7.png": "d7d08e69564390c7e954547886bfe062",
"assets/assets/chord.piano/D%2523m.png": "f8b5e0f0d026d65e73d78a4610319029",
"assets/assets/chord.piano/C%2523.png": "841e334b48c347fc993b4e470f958f12",
"assets/assets/chord.piano/C7.png": "446355086f85936fbc36403fb3d3b9e8",
"assets/assets/chord.piano/D.png": "021cc5e73dfec320489d60a188d126ae",
"assets/assets/chord.piano/D%2523m7.png": "9e93e75a544334dfc4fbeb81fa765fb2",
"assets/assets/chord.piano/A%2523.png": "341a6899bba16c441cfa76a6d64d0e07",
"assets/assets/chord.piano/GmM7.png": "6c82742dfef6bdae5eaf34ac1e849770",
"assets/assets/chord.piano/E.png": "e00d8252c81771d9800526a08f7a3c52",
"assets/assets/chord.piano/Dm7.png": "b3a65d268249d7eaf241fb7e80e2918c",
"assets/assets/chord.piano/Dbm7.png": "8eebb5bb52fb40accdb728e9778d91f1",
"assets/assets/chord.piano/Fm7.png": "ba4c6581b724f47bf7bc8f918f078710",
"assets/assets/chord.piano/G.png": "09e0f057506ea1d96e1abc1bde3d475b",
"assets/assets/chord.piano/AbmM7.png": "6228d9a33cf6383cd66c87770fb42b4c",
"assets/assets/chord.piano/F.png": "37c2bbf6b6c9e5cdb082e3015368b5c3",
"assets/assets/chord.piano/D%2523maj7.png": "81d99224694b80897e26500a3988b9cf",
"assets/assets/chord.piano/F%2523mM7.png": "1f19d8429929d02345fbddb2bfae98aa",
"assets/assets/chord.piano/Dbm.png": "1d46c603137ba3eed73db610a6119a0b",
"assets/assets/images/Chord_Sense_Logo_Android.png": "fc68ec74376675a0bd9b6dd0e4441db0",
"assets/assets/images/Chord_Sense_Logo.psd": "b024804e11eed9c7e2aad07c77a26418",
"assets/assets/images/Chord_Sense_Logo_Foreground.png": "e19397fdbb7e97994e830750dfb0e7c0",
"assets/assets/images/Chord_Sense_Logo.png": "f17a5eb3b9afe2264606492452319315",
"assets/assets/images/Chord_Sense_Logo_Round.png": "9c8a31968323b64159098188b2f9909c",
"assets/assets/images/Chord_Sense_Logo_Background.png": "255a2490b54297624ecafd255edf6e70",
"assets/assets/chord.guitar.2/Abm7.png": "47e4555f9fc6737aa95cdf7418b127ce",
"assets/assets/chord.guitar.2/Emaj7.png": "a842dcc78f54fa593f5587033d59cf8a",
"assets/assets/chord.guitar.2/Db7.png": "5915813a9db44d3a297e18d418c20255",
"assets/assets/chord.guitar.2/G%2523maj7.png": "ef7242c7e02c0e0a0fc387659a01a70b",
"assets/assets/chord.guitar.2/Cm.png": "f6348b2ece00ccf4f2584c907bcc1552",
"assets/assets/chord.guitar.2/Abmaj7.png": "386393fbd4232c64ca6942e675f218aa",
"assets/assets/chord.guitar.2/D%2523.png": "c98ad0309b113caea5676d3657f72c2a",
"assets/assets/chord.guitar.2/A%2523m.png": "18c01fa21463eec217c00974b1111469",
"assets/assets/chord.guitar.2/F%2523.png": "5af9d00bf8c6099235983805ac9110c2",
"assets/assets/chord.guitar.2/Bb7.png": "61b94594f00f7140322c78aaa31cf226",
"assets/assets/chord.guitar.2/A7.png": "2b37fa35b80674f6884847d5eba2d13c",
"assets/assets/chord.guitar.2/Bm.png": "e8a1d124a987dcac2a2b7a8a3bc890a4",
"assets/assets/chord.guitar.2/D%25237.png": "9a3f359e893d3948ee3eba47d5692700",
"assets/assets/chord.guitar.2/N.png": "e5c57a11d85401299a64a4b7cc98e572",
"assets/assets/chord.guitar.2/A%2523m7.png": "1d7def1165a7133306e879fde443044e",
"assets/assets/chord.guitar.2/Dmaj7.png": "4baa5c8f8b5020341c3ea0957529a23e",
"assets/assets/chord.guitar.2/Ab.png": "2cca8030fde87fafdb04c1992b3bdd02",
"assets/assets/chord.guitar.2/C%2523m.png": "3580e7a9bd1f32fb5ab897ea1c2c1ff8",
"assets/assets/chord.guitar.2/Em.png": "193c2de0d2d8022d36d7e8161b9cab61",
"assets/assets/chord.guitar.2/F7.png": "51f2ab03a1d7203c8422e81173548448",
"assets/assets/chord.guitar.2/Gb7.png": "100dc4e85519921aeade9c776e68adf8",
"assets/assets/chord.guitar.2/F%25237.png": "3e4b946cc1dfa79ba88113241338218b",
"assets/assets/chord.guitar.2/F%2523m7.png": "3799b8da94cfe2f7bff58074ede8bb63",
"assets/assets/chord.guitar.2/G%2523m7.png": "1a1f7626df8d746ac2431200a33528fb",
"assets/assets/chord.guitar.2/Eb7.png": "c461919d8eb0755a56b8b332d46e3f4b",
"assets/assets/chord.guitar.2/Gbm7.png": "40a4c41bcbd64bd52df7663f940e2c05",
"assets/assets/chord.guitar.2/Fmaj7.png": "526e8f2bb4f5e058a0e335b1ab625104",
"assets/assets/chord.guitar.2/Ab7.png": "63904978ed4e05340e4cb3c14262e599",
"assets/assets/chord.guitar.2/Ebm7.png": "7dc6b041b11b7f57e6f03d6b7a6085ed",
"assets/assets/chord.guitar.2/Gb.png": "109ff00945ae1f370a7ce497c898485e",
"assets/assets/chord.guitar.2/Gmaj7.png": "5b888682bdff38f334ebabd95e60385c",
"assets/assets/chord.guitar.2/G%25237.png": "8a438519bd0bbbf4a74aa0f52828220c",
"assets/assets/chord.guitar.2/Dm.png": "3ab0469c4685b5b02e539552d87c8cff",
"assets/assets/chord.guitar.2/G7.png": "0e315979758dfd0e3ecd5911916b07a6",
"assets/assets/chord.guitar.2/Gbmaj7.png": "b6a0deeb916bec9bb84a9f3f4d7c5ddb",
"assets/assets/chord.guitar.2/C%2523maj7.png": "c6c13490730b10809767e290ee8a31b2",
"assets/assets/chord.guitar.2/Am7.png": "8b97cc0fc723fd35663ce71613b4b451",
"assets/assets/chord.guitar.2/C%2523m7.png": "38ffd92580944d4bccbd8cb7a3c76515",
"assets/assets/chord.guitar.2/G%2523m.png": "772196cafb9ebc9d5dfd0cecdc808eb0",
"assets/assets/chord.guitar.2/D7.png": "250639d0c081e34ad7a4e8296924b4a7",
"assets/assets/chord.guitar.2/Gm.png": "ce6feb4bd8b873c19375d46673cdec99",
"assets/assets/chord.guitar.2/Abm.png": "b14cb230b7bad9456d87d4eeb09b0f2f",
"assets/assets/chord.guitar.2/Bmaj7.png": "f0429c57d87e5be13dfdd45dc98634bc",
"assets/assets/chord.guitar.2/Db.png": "2adbd62f5b98faf3fab72d4b3cc5ec5b",
"assets/assets/chord.guitar.2/Cm7.png": "5cc3b76818c75b888097d8292318fab2",
"assets/assets/chord.guitar.2/Eb.png": "d9f33a2410912dcb005e29e7ef7554ed",
"assets/assets/chord.guitar.2/Gm7.png": "9fa7d4e833af7f9d299c6b6dcc9218ca",
"assets/assets/chord.guitar.2/Cmaj7.png": "995536b2903dab69384e3977498efb4d",
"assets/assets/chord.guitar.2/Ebm.png": "7c496121ec52f7a6778b0408ac57f098",
"assets/assets/chord.guitar.2/Bbm7.png": "decd46d9590ff786070569b4417a78d3",
"assets/assets/chord.guitar.2/Bbmaj7.png": "d37c6245f9f63c1f8b2a558b308acb17",
"assets/assets/chord.guitar.2/C%25237.png": "eae00e7b05ce497fdda5743935ba5f49",
"assets/assets/chord.guitar.2/E7.png": "af4e912f82b209a2c128b1ceda244a42",
"assets/assets/chord.guitar.2/Fm.png": "f96eb62b30aa0135e29d33c11d311f60",
"assets/assets/chord.guitar.2/G%2523.png": "9af2aab577f19b4171b7ad6c6fd7fd2b",
"assets/assets/chord.guitar.2/Gbm.png": "04ed21fb430b222fa3483467d88ec78f",
"assets/assets/chord.guitar.2/F%2523maj7.png": "31b5d6786d855a5c10bc24a5a7b69f67",
"assets/assets/chord.guitar.2/F%2523m.png": "aa0d87289585177161bb4e5b2ac5b144",
"assets/assets/chord.guitar.2/Em7.png": "e29b7d47dc41045fd5891679fb62347f",
"assets/assets/chord.guitar.2/Amaj7.png": "ad193c107e23704c39f2182cf2d6469e",
"assets/assets/chord.guitar.2/B.png": "ed6659e85d9f21e7c629db53e43dce67",
"assets/assets/chord.guitar.2/A%2523maj7.png": "54039395cdf5919e3672d6444f1ce7bb",
"assets/assets/chord.guitar.2/Bm7.png": "84cb616d0e6cd80db8918d4e5bce7da7",
"assets/assets/chord.guitar.2/C.png": "a446b2834fd6e6ee93f32a987566e2ee",
"assets/assets/chord.guitar.2/Bb.png": "e91f1b937e6d52df2136616c5700a969",
"assets/assets/chord.guitar.2/Ebmaj7.png": "bcf573ea70db33e76fa24a7ae0317524",
"assets/assets/chord.guitar.2/Dbmaj7.png": "932301c6c83a139f188bec3d9351b8df",
"assets/assets/chord.guitar.2/A.png": "163fa6b5bea5a9f4cba0fa7dd060ba09",
"assets/assets/chord.guitar.2/A%25237.png": "f509c0870e7fa04c211474bce5107861",
"assets/assets/chord.guitar.2/Bbm.png": "5c9c31a41d199b42e52215980ddcddc8",
"assets/assets/chord.guitar.2/Am.png": "ceadf2edd8b5f5093be1e9878e74adb7",
"assets/assets/chord.guitar.2/B7.png": "dd26caf44132ae3a4d1a6963de44e4b6",
"assets/assets/chord.guitar.2/D%2523m.png": "f6484a814b1b88120412948ab34108f7",
"assets/assets/chord.guitar.2/C%2523.png": "bb4c2a2213cbf79bda3ac0655f4beb40",
"assets/assets/chord.guitar.2/C7.png": "f6677b11a95c68c89b6d8154ad1b9dd1",
"assets/assets/chord.guitar.2/D.png": "66a1cb92cb0963ffd5001b315cd89564",
"assets/assets/chord.guitar.2/D%2523m7.png": "a03e1fef2f9f9460d1823d29ea0dfcaa",
"assets/assets/chord.guitar.2/A%2523.png": "d2e275e8f07eac87ae6607783dcc21bd",
"assets/assets/chord.guitar.2/E.png": "d491832c5ad00714dd9d5c255eb00286",
"assets/assets/chord.guitar.2/Dm7.png": "5da0fc9708bee67fc0dd3170de8efcc9",
"assets/assets/chord.guitar.2/Dbm7.png": "6543376e159540867828fa4d7aeb1ba7",
"assets/assets/chord.guitar.2/Fm7.png": "f5bec05dfa25765b0dea8b965571aa48",
"assets/assets/chord.guitar.2/G.png": "6efd0d140da069c7a4872af27d71d3d0",
"assets/assets/chord.guitar.2/F.png": "24bcb36cce580b3580e981aeac0c6cfd",
"assets/assets/chord.guitar.2/D%2523maj7.png": "028b2f73d6e6b4c3b4820afa99c5e7ad",
"assets/assets/chord.guitar.2/Dbm.png": "13b750c0c1f3129e22342d5c40b6a250",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
