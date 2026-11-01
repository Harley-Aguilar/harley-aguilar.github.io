'use strict';
const target = document.getElementById('redirect-target');
if (target) { const url = new URL(target.href); if (url.origin === location.origin) { url.hash = location.hash; location.replace(url.href); } }
