import React, { useEffect, useState } from 'react';
import { crear ,Validar,usuarios, actualizaPassword,actualizaREAL} from '../axios/axiosPeticiones.js';
import Swal from 'sweetalert2'
import { useCookies } from 'react-cookie';

function Login({estadoGlobal ,setEstadoGlobal}) {
  const [loginx, setLoginx] = useState( {
  email:'',
  password:''
});

const [cookies, setCookie] = useCookies();
const [cookie, setCooki] = useCookies(['mantraxjsj']);

const[datos , setDatos]= useState('')
const num = Math.floor(1000 + Math.random() * 9000);
const [recupera , setRecupera]= useState(num );

var numeroAleatorio = Math.floor(1000 + Math.random() * 9000);

  const[registro , setRegistro]= useState({
    name:'', 
    email:'',
    password:'',
    code:numeroAleatorio
  })
/*Registro */
const handleChangeRegist = (e) => {
  const { name, value } = e.target;
  setRegistro({
    ...registro,
    [name]: value
  });
};
/*Registro */
const handleChangeLogin = (e) => {
  const { name, value } = e.target;
  setLoginx({
    ...loginx,
    [name]: value
  });
};
  const handleSubmitRegistro = async(e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a una API
  await Swal.fire({
      title: "Deseas guardar datos?",
      text: "revisa tu correo despues",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "success",
          text: "Revisa tu correo despues de este paso.",
          icon: "success"
        });
        //creacion de code cookie
        setCookie('xtzmrx', registro.code, {
          path: '/',
          expires: new Date(Date.now() + 86400 * 1000), // 1 día
          secure: true,
          httpOnly: false,
        });
        const NewRegistro =  crear(registro)
         
          Swal.fire("Revisa todo ok");
          window.location.href = '/login';
         
       
      }
       
    });
   
  };
  /*Login */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userx = usuarios[0].find(
      (user) => user.email === loginx.email && user.password === loginx.password
    );
console.log(userx)

    if(userx){
      Swal.fire("email y correo bien"+userx.email);
      setCookie('xt', true, { path: '/' });
          const dtM = cookies.xtzmrx 
          setEstadoGlobal(true)
          console.log("email y password ok " +estadoGlobal+" "+dtM)
          window.location.href = "/login";
    }else{
      Swal.fire("Los datos no son correctos");
    }

  };

  const recuperarContrase = async()=>{

    const ConCode = await generacion(num) ; // retorna codigo de aleatorio
    /*valida que sea un Email*/
    const { value: text } = await Swal.fire({
      input: "email",
      inputLabel: `Digita correo registrado  `,
      inputPlaceholder: "@email",
      inputAttributes: {
        "aria-label": "Type your message here"
      },
      showCancelButton: true
    });



    if (text) {
   /*Aquie  envio de correo al mail de la persona */
      //se envian los datos
    const array =  {
      "email":text,
      "codigos":ConCode
    };
     actualizaPassword(array)
      //guadamos el dato
      let n=0;
      while(n < 5){
        
        console.log(cookies.mantra)
        console.log(ConCode)

            const { value: text2 } =  await Swal.fire({
              input: "text",
              inputLabel: `Ingresa a tu correo ${text} , y digita el codigo aqui`,
              inputPlaceholder: "Codigo",
              inputAttributes: {
                "aria-label": "Type your message here"
              },
              showCancelButton: true
            });
          
   const ccc =JSON.stringify(ConCode) 
                  if(text2 === ccc){
                    Swal.fire(`Correcto ${text2}`);
                    //aqui que digite la contraseña y la cambie

                    const { value: text3 } =  await Swal.fire({
                      input: "text",
                      inputLabel: `DIGITA NUEVA CONTRASEÑA. `,
                      inputPlaceholder: "NUEVA CONTRASEÑA",
                      inputAttributes: {
                        "aria-label": "Type your message here"
                      },
                      showCancelButton: true
                    });
                        //send encio contraseña real
                    const arrayxt =  {
                      "email":text,
                      "password":text3
                    };
                    actualizaREAL(arrayxt)//send contraseña real
                    window.location="/login";
                    n=6;
                  }else{
                    Swal.fire(`Codigo incorrecto ${cookies.mantraxjsj}`);
                  }
                  n++;
      } 
       
      }
             
  }

const generacion = (aleatorio)=>{
  setCooki('mantra', aleatorio, { expires: new Date(2025, 0, 1) })
 return  aleatorio;
}

 useEffect(async()=>{
  const valores = await Validar();
  setDatos(...datos , valores)
  const userCookie = cookies.xt;
  //setEstadoGlobal(userCookie)


 },[])

  return (
    <div className="loginOficial">
    <div className="container mt-5">
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">

  <li className="nav-item" role="presentation">
    <button className="nav-link btn  btn-success active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</button>
  </li>
  <li className="nav-item " role="presentation">
    <button className="nav-link btn  btn-success" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Registrar</button>
  </li>

</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
  <div className="login">
      <h2><svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="currentColor" className="bi bi-house-gear" viewBox="0 0 16 16">
        <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z"/>
        <path d="M11.886 9.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.044c-.613-.181-.613-1.049 0-1.23l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
      </svg></h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
          </svg>  Email:</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name='email'
            value={loginx.email}
            onChange={handleChangeLogin}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-backpack" viewBox="0 0 16 16">
          <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z"/>
          <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5"/>
        </svg> Password:</label>
          <input
            type="password"
            className="form-control"
            name='password'
            id="inputPassword"
            value={loginx.password}
            onChange={handleChangeLogin}
            required
          />
        </div>
        <div className="d-grid gap-2">
        <button className="btn btn-secondary" type="Submit">Login</button>
      </div>
      </form>
      <p onClick={recuperarContrase}>Recuperar contraseña </p>
      </div>
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
  <div className="login">
      <h2><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-house-gear" viewBox="0 0 16 16">
        <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z"/>
        <path d="M11.886 9.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.044c-.613-.181-.613-1.049 0-1.23l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
      </svg></h2>

      <form onSubmit={handleSubmitRegistro }>
      <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
          </svg> Nombre:</label>
          <input
            type="text"
            className="form-control"
            name='name'
            value={registro.name}
            onChange={handleChangeRegist}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
          </svg>  Email:</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name='email'
            value={registro.email}
            onChange={handleChangeRegist}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-backpack" viewBox="0 0 16 16">
          <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z"/>
          <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5"/>
        </svg> Password:</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            name='password'
            value={registro.password}
            onChange={handleChangeRegist}
            required
          />
        </div>
        <div className="d-grid gap-2">
        <button className="btn btn-secondary" type="Submit">Registrar</button>
      </div>
      </form>
      </div>
  </div>
</div>
     

    </div>
    </div>
  );
}

export default Login;
