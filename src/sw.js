const VERSION = "v4";

function log(messages) {
  console.log(VERSION, messages);
}

async function installServiceWorker() {
  log("service worker installation started");

  const request = new Request("./offline.html");
  const response = await fetch(request);
  log("received after loading offline.html: ");
  log(response);

  if (response?.status !== 200) {
    throw new Error("Could not load offline page");
  }
}

log("Installing service worker");

self.addEventListener("install", (event) =>
  event.waitUntil(installServiceWorker())
);

self.addEventListener("activate", () => {
  log("version is activated");
});
