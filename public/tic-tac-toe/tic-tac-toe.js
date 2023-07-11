var container = document.querySelector("#unity-container");
var canvarMatrix = document.querySelector("#unity-canvas");

var buildUrl = "tic-tac-toe/Build";
var loaderUrl = buildUrl + "/morpp.loader.js";
var config = {
  dataUrl: buildUrl + "/morpp.data",
  frameworkUrl: buildUrl + "/morpp.framework.js",
  codeUrl: buildUrl + "/morpp.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "Morphouz-online",
  productVersion: "1.0",
  showBanner: false,
};

// By default Unity keeps WebGL canvas render target size matched with
// the DOM size of the canvas element (scaled by window.devicePixelRatio)
// Set this to false if you want to decouple this synchronization from
// happening inside the engine, and you would instead like to size up
// the canvas DOM size and WebGL render target sizes yourself.
// config.matchWebGLToCanvasSize = false;

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  // Mobile device style: fill the whole browser client area with the game canvas:

  var meta = document.createElement("meta");
  meta.name = "viewport";
  meta.content =
    "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
  document.getElementsByTagName("head")[0].appendChild(meta);
  container.className = "unity-mobile";
  canvarMatrix.className = "unity-mobile";

  // To lower canvas resolution on mobile devices to gain some
  // performance, uncomment the following line:
  // config.devicePixelRatio = 1;

} else {
  // Desktop style: Render the game canvas in a window that can be maximized to fullscreen:

  canvarMatrix.style.width = "960px";
  canvarMatrix.style.height = "600px";
}

var script = document.createElement("script");
script.src = loaderUrl;