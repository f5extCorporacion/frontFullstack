import Redimientopc from "./Rendimientopc"
import Visitas from "./visitas"
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

 const Menu2=()=>{
    return(
        <>
        <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
        <div className="bg-dark p-4">
          <h5 className="text-body-emphasis h4">Collapsed content</h5>
          <span className="text-body-secondary">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      </>
    )
}



const Otros =()=>{
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Edward",
    
  ];
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return(
    <div className="card otrosProyectos">
      
      <h4>Proyectos</h4>
          <div className="input-group">
          <input type="text" className="form-control" placeholder="Buscar nombres..."
        value={searchTerm}
        onChange={handleChange}
        />
        
          <span className="input-group-text btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-zoom-in" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"/>
          <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z"/>
          <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"/>
        </svg>Buscar
        </span>
        </div>
  <div className="card-body">
    
  </div>
</div>
  )
}
export const Proyectos =()=>{
  
 
    return(
        <div className="adminOficial">
            <Menu2/>
            <div className="container proyectos">
            <Otros/>
            </div>
            <div className="card foter">
            <div className="card-body foter2">
                Desarrollador fullstack Franklim de jesus muñoz valverde @ 2024
            </div>
            </div>
            
            
        </div>
    )
}