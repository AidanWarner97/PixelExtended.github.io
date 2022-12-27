const samsungDevices = ["beyond0lte", "beyond1lte", "beyond2lte", "beyondx", "d1", "d2s", "d2x"];
const oneplusDevices = ["lemonade", "lemonadep"];
const xiaomiDevices = ["chime"];

// Make an HTTP request to fetch the data for each device
samsungDevices.forEach(deviceCode => {
    const url = `https://raw.githubusercontent.com/PixelExtended/OTA/trece/builds/${deviceCode}.json`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Create a new link element
            const urlElement = document.createElement("a");
            urlElement.setAttribute("href", data.url);
            urlElement.setAttribute("target", "_blank");
            urlElement.classList.add("url");
            // Create a new device element
            const deviceElement = document.createElement("li");
            deviceElement.classList.add("device");
            urlElement.appendChild(deviceElement);
            // Add the device name
            const nameElement = document.createElement("div");
            nameElement.classList.add("name");
            nameElement.innerHTML = data.device_name;
            deviceElement.appendChild(nameElement);
            // Add the device code
            const codeElement = document.createElement("div");
            codeElement.classList.add("code");
            codeElement.innerHTML = '<span class="detail">Codename:</span> ' + data.device;
            deviceElement.appendChild(codeElement);
            // Add the Telegram username
            const usernameElement = document.createElement("div");
            usernameElement.classList.add("username");
            usernameElement.innerHTML = '<span class="detail">Maintainer:</span> ' + data.tg_username
            deviceElement.appendChild(usernameElement);
            // Add the version
            const versionElement = document.createElement("div");
            versionElement.classList.add("version");
            versionElement.innerHTML = '<span class="detail">PEX Version:</span> ' + data.pexv;
            deviceElement.appendChild(versionElement);
            // Add the device element to the Samsung devices container
            const samsungDevicesContainer = document.getElementById("samsung-devices");
            samsungDevicesContainer.appendChild(urlElement);
        });
});
    
xiaomiDevices.forEach(deviceCode => {
    const url = `https://raw.githubusercontent.com/PixelExtended/OTA/trece/builds/${deviceCode}.json`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Create a new link element
            const urlElement = document.createElement("a");
            urlElement.setAttribute("href", data.url);
            urlElement.setAttribute("target", "_blank");
            urlElement.classList.add("url");
            // Create a new device element
            const deviceElement = document.createElement("li");
            deviceElement.classList.add("device");
            urlElement.appendChild(deviceElement);
            // Add the device name
            const nameElement = document.createElement("div");
            nameElement.classList.add("name");
            nameElement.innerHTML = data.device_name;
            deviceElement.appendChild(nameElement);
            // Add the device code
            const codeElement = document.createElement("div");
            codeElement.classList.add("code");
            codeElement.innerHTML = '<span class="detail">Codename:</span> ' + data.device;
            deviceElement.appendChild(codeElement);
            // Add the Telegram username
            const usernameElement = document.createElement("div");
            usernameElement.classList.add("username");
            usernameElement.innerHTML = '<span class="detail">Maintainer:</span> ' + data.tg_username
            deviceElement.appendChild(usernameElement);
            // Add the version
            const versionElement = document.createElement("div");
            versionElement.classList.add("version");
            versionElement.innerHTML = '<span class="detail">PEX Version:</span> ' + data.pexv;
            deviceElement.appendChild(versionElement);
            // Add the device element to the Xiaomi devices container
            const samsungDevicesContainer = document.getElementById("xiaomi-devices");
            samsungDevicesContainer.appendChild(urlElement);
        });
});

oneplusDevices.forEach(deviceCode => {
    const url = `https://raw.githubusercontent.com/PixelExtended/OTA/trece/builds/${deviceCode}.json`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Create a new link element
            const urlElement = document.createElement("a");
            urlElement.setAttribute("href", data.url);
            urlElement.setAttribute("target", "_blank");
            urlElement.classList.add("url");
            // Create a new device element
            const deviceElement = document.createElement("li");
            deviceElement.classList.add("device");
            urlElement.appendChild(deviceElement);
            // Add the device name
            const nameElement = document.createElement("div");
            nameElement.classList.add("name");
            nameElement.innerHTML = data.device_name;
            deviceElement.appendChild(nameElement);
            // Add the device code
            const codeElement = document.createElement("div");
            codeElement.classList.add("code");
            codeElement.innerHTML = '<span class="detail">Codename:</span> ' + data.device;
            deviceElement.appendChild(codeElement);
            // Add the Telegram username
            const usernameElement = document.createElement("div");
            usernameElement.classList.add("username");
            usernameElement.innerHTML = '<span class="detail">Maintainer:</span> ' + data.tg_username
            deviceElement.appendChild(usernameElement);
            // Add the version
            const versionElement = document.createElement("div");
            versionElement.classList.add("version");
            versionElement.innerHTML = '<span class="detail">PEX Version:</span> ' + data.pexv;
            deviceElement.appendChild(versionElement);
            // Add the device element to the OnePlus devices container
            const samsungDevicesContainer = document.getElementById("oneplus-devices");
            samsungDevicesContainer.appendChild(urlElement);
        });
});