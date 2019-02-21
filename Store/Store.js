import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import funcionPrimaria from './Sagas/Sagas';
import CONSTANTES from './CONSTANTES';

const reducerSesion = (state = null, action) => {
  switch (action.type) {
    case CONSTANTES.ESTABLECER_SESION:
      return action.usuario;
    case CONSTANTES.CERRAR_SESION:
      return null;
    default:
      return state;
  }
};

const reducerImagenSignUp = (state = { imagen: null }, action) => {
  switch (action.type) {
    case CONSTANTES.CARGAR_IMAGEN_SIGNUP:
      return { imagen: action.imagen };
    case CONSTANTES.LIMPIAR_IMAGEN_SIGNUP:
      return { imagen: null };
    default:
      return state;
  }
};

const reducerImagenPublicacion = (state = { imagen: null }, action) => {
  switch (action.type) {
    case CONSTANTES.CARGAR_IMAGEN_PUBLICACION:
      return { imagen: action.imagen };
    case CONSTANTES.LIMPIAR_IMAGEN_PUBLICACION:
      return { imagen: null };
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  reducerSesion,
  reducerImagenSignUp,
  reducerImagenPublicacion,
  form,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(funcionPrimaria);

export default store;
