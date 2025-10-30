/* eslint-disable @typescript-eslint/no-require-imports */
"use client"
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import "../app.styles.css";


export default function Map() {
  useEffect(() => {
    const L = require("leaflet")
    const { OpenStreetMapProvider, GeoSearchControl } = require("leaflet-geosearch")

    const map = L.map("map", { minZoom: 10 }).setView([0, 0], 13)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

    let currentMarker;

    // Current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        const userLocation = [latitude, longitude]

        map.setView(userLocation, 13)
        currentMarker = L.marker(userLocation).addTo(map).bindPopup("Your location").openPopup()
        L.circle(userLocation, { radius: 30000, color: "blue", fillOpacity: 0.1 }).addTo(map)
      })
    }

    // Search box
    const provider = new OpenStreetMapProvider()
    const searchControl = new GeoSearchControl({
      provider,
      style: "bar",
      autoComplete: true,
      autoCompleteDelay: 250,
      showMarker: true,
      retainZoomLevel: false
    })
    map.addControl(searchControl)

  }, [])

  return <div id="map" className="full" />
}
