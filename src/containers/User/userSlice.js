import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: ''
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    logout: (state, action) => {
      return {
        token: ''
      }

    },
    update: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
  },
});

export const loginUser = (body) => async (dispatch) => {
  try {

    const user = await axios.post("https://zsnkrs.herokuapp.com/api/auth/login", body);

    console.log(user);

    let decodificada = jwt(user.data.token);
    console.log(decodificada)

    //En caso de que todo haya ido bien, es decir, el backend y la red nos responden con un código 200 que significa que todo está ok
    if (user.status === 200) {
      //Procedo por fin al guardado en redux, aqui estoy guardando en el estado, aquello que se decodifica del token
      //y también el token por otro lado.
      dispatch(login({ ...decodificada, token: user.data.token }))
    }

  } catch (error) {
    console.log(error)
  }
};

export const logOut = () => (dispatch) => {
  dispatch(logout());
  window.location.reload(false);
};




export const deleteUser = (datosUsuario) => async (dispatch) => {
  console.log("datos usuario",datosUsuario);
  


  let config = {
    headers: { Authorization: `Bearer ${datosUsuario.token}` }
  };

  await axios.delete(`https://zsnkrs.herokuapp.com/api/users/${datosUsuario.user_id}`, config);
  
  window.location.reload(false);
  
 
};



export const updateUser = (datosUsuario, perfilUsuario) => async (dispatch) => {
  console.log("perfil usuario",perfilUsuario)
  console.log("datos usuario",datosUsuario)


  try {

    let body = {
      name: perfilUsuario.user_name,
      surname: perfilUsuario.user_surname,
      phone: perfilUsuario.user_phone,
      address: perfilUsuario.user_address,
      email: perfilUsuario.user_email

    }



    let config = {
      headers: { Authorization: `Bearer ${datosUsuario.token}` }
    };

    let resultado = await axios.put(`https://zsnkrs.herokuapp.com/api/users/${datosUsuario.user_id}`, body, config);
    console.log("datos usuario despues axios", resultado.data.data);
    //Después de cambiar en la database los datos de usuario, cambiamos esos datos
    //en redux.

    if (resultado.status === 200) {
     
          dispatch(update({perfilUsuario}));
      
     }

  }catch (error) {
    console.log(error)
    }
}
export const { login, logout, update } = userSlice.actions;

export const userData = (state) => state.user;

export default userSlice.reducer;