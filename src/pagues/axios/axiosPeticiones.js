import axios from "axios";
const url = "http://localhost:3001/user";
const url2 = "http://localhost:3001/user/recupera";
const url3 = "http://localhost:3001/user/1";
export const usuarios = [];
export const respuestas = [];

export async function crear(valor) {
  try {
    const resp = await axios
      .post(url, valor)
      .then(function (response) {
        document.cookie = `xtz=${response.data.mensaje}; max-age=3600; path=/`;
        respuestas.push(response.data.mensaje);
        return response.data.mensaje;
      })
      .catch(function (error) {
        return error;
      });
    return resp;
  } catch (error) {
    return error;
  }
}
/**Retorna los datos  de los usuarios completo */
export function Validar() {
  const restt = axios
    .get("http://localhost:3001/user")
    .then((response) => {
      usuarios.push(response.data.view);
      // return response.data.view;
      // Manejar la respuesta exitosa
    })
    .catch((error) => {
      console.error("Error al hacer la solicitud:", error); // Manejar errores
    });
  return restt;
}

export function buscarLogin(emailx, passwordx) {
  const user = usuarios.find(
    (user) => user.email === emailToFind && user.password === passwordToFind
  );
  return user;
}
//SEND MAIL POST
export async function actualizaPassword(valorx) {
  const resp = await axios
    .post(url2, valorx)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  return resp;
}

//ESTE CODIGO EJECUTA RUTA PATCH QUE ACTUALIZA DESPUES DE VALIDACIONES
export async function actualizaREAL(valorxt) {
  const resp = await axios
    .patch(url3, valorxt)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
  return resp;
}
