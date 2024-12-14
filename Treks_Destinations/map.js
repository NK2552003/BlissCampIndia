document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const latitude = params.get("latitude");
  const longitude = params.get("longitude");

  // Initialize the map
  const map = L.map("map", {
    center: [latitude, longitude],
    zoom: 15,
    zoomControl: false,
  });

  // Add the satellite tile layer (ESRI World Imagery)
  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        'Tiles &copy; <a href="https://www.esri.com/">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community',
    }
  ).addTo(map);

  // Custom icon
  const customIcon = L.icon({
    iconUrl:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='red' stroke='blue' width='36px' height='36px'%3E%3Cpath d='M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z'/%3E%3C/svg%3E",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
  });

  // Add marker
  L.marker([latitude, longitude], { icon: customIcon }).addTo(map);

  // Fetch address
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  )
    .then((response) => response.json())
    .then((data) => {
      const placeName = data.name || "Unknown place";
      const address = data.display_name || "Address not found";
      document.getElementById("address").innerHTML = `
        <strong>Place:</strong> ${placeName}<br>
        <strong>Address:</strong> ${address}
      `;
    })
    .catch((error) => {
      console.error("Error fetching address:", error);
      document.getElementById("address").innerHTML = `
        <strong>Place:</strong> Unknown place<br>
        <strong>Address:</strong> Address not found
      `;
    });
});
