import Visitas from "./visitas"
import React, { useState } from 'react';
import Swal from 'sweetalert2'
// Import Swiper styles
import { useCookies } from 'react-cookie';


import { ProyectosD, Single } from "./MenuDash";


 const Menu2 =()=>{
  const [cookies, setCookie, removeCookie] = useCookies();

  const handleOutSession = () =>{
    console.log("ok")
   removeCookie('xt');
   window.location="/login"
   
  }
    return(
        <>
        <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
        <div className="bg-dark p-4">
          <h5 className="display-6 text-white" onClick={handleOutSession}>Cerrar Session</h5>
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

const Opciones =()=>{
    return(  
      <>
      <h1 className="display-6">Datos</h1>
         <div className="card-group">
                <div className="card">
                  <p className="display-6">Visitas</p>
                  <Visitas/>
                </div>
                <div className="card">
                    <h5 className="display-6 "><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-code" viewBox="0 0 16 16">
                    <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
                  </svg> 3600 Horas </h5><br/>
                      <p> Horas de aproximadas de aprendizaje de nuevos conocimientos y aplicación de nuevas tecnologias del mercado de desarrollo de software entre web, escritorio y electronica. <br /> Actualmente estudio ingenieria informatica ultimos semestres.</p>
                </div>
                <div className="card">
                  <div className="card-body">
                    <ul className=" cv">
                      <li>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="166" height="166" fill="currentColor" className="bi bi-box-arrow-down" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"/>
                      <path fillRule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"/>
                    </svg>
                    </a>
                    </li>
                      <li> <p className="display-6"> Descarga  cv</p> </li>
                    </ul>
                </div>
                </div>
              </div>
              </>
    )
}



const Mod=()=>{
  const[itemx , setItemx] = useState([]);
  const[suma , setSuma] = useState(0);
 const precios =[100,200,300,400,500,600,700,800,900,1000,2000,3000];
  /*Funciones agregar borrar localstorage */

  /*Agregar al carrito */
const handleadd= (e) =>{
  e.preventDefault();
  console.log(Number(e.target.value))
      //cuando confirma se ejecuta
      setItemx([...itemx ,e.target.value ])  
      //const Total = CarritoAdd(datosPrecios[0].preci o)
    setSuma(suma + Number(e.target.value))  
}
/*Eliminar del carrito */
const handleElimina =(v1 , v2)=>{
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "¿Deseas eliminar?",
    text: "!!!!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Si!",
    cancelButtonText: "No",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      const elimi =itemx.filter((quita, index) => index !== v1)// array con numero eliminado
      setItemx(elimi)
      setSuma(suma - Number(v2)) 
      console.log(v1)
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "Your imaginary file is safe :)",
        icon: "error"
      });
    }
  });

 
}

  return(
    <div className="mod">
    <div className={`modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true`}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary"> Carrito .</span>
                    <span className="badge bg-primary rounded-pill">{itemx.length} </span>
                  </h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          
        </div>
            <div className="modal-body">
            <nav aria-label="...">
            <select className="form-select form-select-lg mb-3" onChange={handleadd} aria-label="Large select example">
              <option selected>🎉Seleccionar</option>
              {
                precios.map((pre)=>(
                  <option value={pre} key={pre}> 💲<strong>{pre} us</strong></option>
                ))
              }
              
          
            </select>
              </nav>
                  <div className="row g-5">
                <div className="col-md-12 col-lg-12 order-md-last">
                 
                  <ul className="list-group mb-3">
                    <li className="list-group-item d-flex justify-content-between lh-sm">
                      <div>
                        <h6 className="my-0">Producto</h6>
                      </div>
                      <span className="text-body-secondary">Precio</span>
                    </li>
                      {
                        itemx.map((db , index)=>(
                          <li key={db.length} className="list-group-item d-flex justify-content-between lh-sm">
                          <div>
                            <small className="text-body-secondary"> <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>handleElimina(index ,db)}  width="26" height="26" fill="currentColor" className="bi bi-x-circle " viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                      </svg> Colaboracion</small>
                          </div>
                          <span className="text-body-secondary">$ {db} us</span>
                        </li>
                        ))
                      }
                  </ul>
                </div>
                </div>
        </div>
        <div className="modal-footer">
        
                      <strong> <h1 className="display-6 text-black"> Total ${suma} </h1></strong>
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Generar factura</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}



const Opciones2 =()=>{
  return(  
    <>
    <h1 className="display-6">Extras</h1>
       <div className="card-group">

              <div className="card">
              <h5 className="display-6 ">Juegos Online</h5><br/>
                 <div className="card-body">
                  <a href="https://poki.com/es?campaign=377822703&adgroup=1253443829025962&extensionid=%7Bextensionid%7D&targetid=kwd-78340610208793%3Aloc-43&location=161023&matchtype=e&network=o&device=c&devicemodel=&creative=&keyword=online+game&placement=&target=&msclkid=36043e84264912e18eb058eca0106d17&utm_source=bing&utm_medium=cpc&utm_campaign=Poki.com%2Fen+-+ROW+%28Desktop%29+%28Standard+Search%29+%28Generic%29+%28Bing%29&utm_term=online+game&utm_content=Online+Games+%28Online+Games%29+%5BHP%5D#utm_source=redirect-en-es">
                 <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-playstation" viewBox="0 0 16 16">
                <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z"/>
              </svg>
              </a>
                 </div>
              </div>
              
              <div className="card">
              <p className="display-6"> Peliculas Online </p>
                <div className="card-body">
                  <a href="https://pelisflix.promo/">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
                <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
              </svg>
              </a>
              </div>
              </div>
            </div>
            </>
  )
}
export const Dasboard =()=>{ 
  
    return(
      <div className="adm">
      <Menu2/>
          <div className="adminOficial container">
              <Opciones/><br/>
              <ProyectosD/>
              <Mod/><br/>
              <Opciones2/> <br />
              <Single/>
              </div>
        </div>
    )
}