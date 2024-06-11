import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


const MyMap = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.error('Error al obtener la ubicación:', error);
          }
        );
      }, []);
      const position = L.marker([{longitude},{latitude}]); // Coordenadas de la ubicación a mostrar

      return (
        <div className="myMapaok">
             <MapContainer center={position} zoom={4} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        maxZoom={19}
      />
      <Marker position={position} alt="Kyiv">
        <Popup>
          Kyiv, Ukraine is the birthplace of Leaflet!
        </Popup>
      </Marker>
    </MapContainer>
        
        </div>
      )
};

export default MyMap;