import {WAITING_CALIDAD_DATA, STOP_WAITING_CALIDAD_DATA} from './types';

import {isEmpty, showAlert} from '../../resources/util';

export const sendCalidadData = info => {
  const {
    date,
    sofya,
    cliente,
    ruc,
    representante,
    supervision,
    supervisor,
    proyecto,
    direccion,
    tiempoDuracion,
    cronograma,
    hitos,
    tiempoHitos,
    hitoActual,
    supervisorUC,
    asistenteUC,
    tieneRetraso,
    pathCrono,
    planoProyecto,
    planoAvance,
    textCausa,
    causas,
    textObservacion,
    observaciones,
    arrPhotos,
    textInputs,
    responsable1,
    responsable2,
    responsable3,
    responsable4,
    telefono1,
    telefono2,
    telefono3,
    telefono4,
    califica1,
    califica2,
    califica3,
    califica4,
  } = info;
  return dispatch => {
    dispatch({
      type: WAITING_CALIDAD_DATA,
    });
  };
};
