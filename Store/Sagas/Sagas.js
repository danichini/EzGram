import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';


const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success);

const registroEnBaseDeDatos = ({ uid, email, nombre }) => baseDeDatos
  .ref(`users/${uid}`).set({
    username: nombre,
    email,
  });

function* generadoraRegistro(values) {
  try {
    console.log('values de registro', values);
    const registro = yield call(registroEnFirebase, values.datos);
    console.log('registro', registro);
    // uid, email, nombre
    const { user: { email, uid } } = registro;
    const { datos: { nombre } } = values;
    yield call(registroEnBaseDeDatos, { uid, email, nombre });
  } catch (error) {
    console.log(error);
  }
}

export default function* funcionPrimaria() {
  yield takeEvery('REGISTRO', generadoraRegistro);
  console.log('funcion generadora');
}
