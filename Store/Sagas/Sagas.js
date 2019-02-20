import { takeEvery, call, select } from 'redux-saga/effects';
import { url } from 'inspector';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';
import CONSTANTES from '../CONSTANTES';

const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success);

const registroEnBaseDeDatos = ({ uid, email, nombre }) => baseDeDatos
  .ref(`usuarios/${uid}`).set({
    nombre,
    email,
  });

const registroFotoCloudinary = ({ imagen }) => {
  console.log(imagen);
  const { uri, type } = imagen;
  const splitName = uri.split('/');
  const name = [...splitName].pop();
  // const foto = {
  //   uri,
  //   type,
  //   name
  // }
  // const formImagen = new FormData();
  // formImagen.append('upload_preset',CONSTANTES.CLOUDINARY_PRESET)
  // formImagen.append('file', foto)

  // return fetch(CONSTANTES.CLOUDINARY_NAME, {
  //   method:'POST',
  //   body:
  // });
};

function* sagaRegistro(values) {
  try {
    // // cargar foto
    const imagen = yield select(state => state.reducerImagenSignUp);
    const urlFoto = yield call(registroFotoCloudinary, imagen);
    // const registro = yield call(registroEnFirebase, values.datos);
    // // uid, email, nombre
    // const { user: { email, uid } } = registro;
    // const { datos: { nombre } } = values;
    // yield call(registroEnBaseDeDatos, { uid, email, nombre });
  } catch (error) {
    console.log(error);
  }
}

const loginEnFirebase = ({ email, password }) => autenticacion
  .signInWithEmailAndPassword(email, password)
  .then(success => success);

function* sagaLogin(values) {
  try {
    console.log(values);
    const resultado = yield call(loginEnFirebase, values.datos);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

export default function* funcionPrimaria() {
  yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
  yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
  console.log('funcion generadora');
}
