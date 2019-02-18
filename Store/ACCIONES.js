
import CONSTANTES from './CONSTANTES';

export const actionRegistro = datos => ({
  type: CONSTANTES.REGISTRO,
  datos,
});

export const actionLogin = datos => ({
  type: CONSTANTES.LOGIN,
  datos,
});
