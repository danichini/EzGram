/* eslint-disable camelcase */
import { takeEvery, call, select } from 'redux-saga/effects';
import axios from 'axios';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';
import CONSTANTES from '../CONSTANTES';


const registroFotoCloudinary = ({ imagen }) => {
  const {
    uri, type, height, width,
  } = imagen;
  const splitType = uri.split('.');
  const extension = [...splitType].pop();
  const splitName = uri.split('/');
  const name = [...splitName].pop();
  const foto = {
    uri,
    type: `${type}/${extension}`,
    name,
    height,
    width,
  };

  const formData = new FormData();
  formData.append('file', foto);
  formData.append('upload_preset', CONSTANTES.CLOUDINARY_PRESET);

  return axios({
    url: CONSTANTES.CLOUDINARY_NAME,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData,
  }).then(res => res);


  // return fetch(CONSTANTES.CLOUDINARY_NAME, {
  //   method: 'POST',
  //   body: formImagen,
  // }).then(response => response);
};

const registroEnBaseDeDatos = ({
  uid, email, nombre, profileImageUrl,
}) => baseDeDatos.ref(`usuarios/${uid}`).set({
  nombre,
  email,
  profileImageUrl,
});

const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success);

function* sagaRegistro(values) {
  try {
    // // cargar foto
    const imagen = yield select(state => state.reducerImagenSignUp);
    const urlFoto = yield call(registroFotoCloudinary, imagen);
    const { data: { secure_url } } = urlFoto;
    // profileImageUrl
    const profileImageUrl = secure_url;
    const registro = yield call(registroEnFirebase, values.datos);
    // uid, email, nombre
    const { user: { email, uid } } = registro;
    const { datos: { nombre } } = values;

    yield call(registroEnBaseDeDatos, {
      uid, email, nombre, profileImageUrl,
    });
  } catch (error) {
    console.log(error);
  }
}

const loginEnFirebase = ({ email, password }) => autenticacion
  .signInWithEmailAndPassword(email, password)
  .then(success => success);

function* sagaLogin(values) {
  try {
    const resultado = yield call(loginEnFirebase, values.datos);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

export default function* funcionPrimaria() {
  yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
  yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
}
