import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function App() {
  useEffect(() => {
    const map = L.map("map", {
      center: [0, 0],
      zoom: 2,
      zoomControl: true
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(map);

    // Темна тема
    const darkTiles = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      { attribution: "&copy; OpenStreetMap, CartoDB" }
    );
    darkTiles.addTo(map);

    // Приклад іконки
    const bossIcon = L.icon({
      iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34]
    });

    L.marker([10, 10], { icon: bossIcon })
      .addTo(map)
      .bindPopup("Boss Area");
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#0a0a0a"
      }}
    ></div>
  );
}
