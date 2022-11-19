import {
  CLEAR_STATE_USER,
  SET_INPUT_USER,
  WAITING_DATA,
  STOP_WAITING_DATA,
  SET_INITIAL_DATA,
  CLEAR_DATA_REPORT,
} from './types';

import {
  sw_login,
  sw_data_app,
  sw_save_pdf,
  sw_send_report,
} from '../../services/AuthApi';
import {isEmpty, showAlert} from '../../resources/util';

export const setInputUser = info => {
  const {prop, value} = info;
  return dispatch => {
    dispatch({
      type: SET_INPUT_USER,
      payload: {prop, value},
    });
  };
};
export const logOut = info => {
  const {token, callback} = info;
  return dispatch => {
    dispatch({
      type: CLEAR_STATE_USER,
    });
    callback();
  };
};
export const userLogin = info => {
  const {user, password, callback} = info;

  return dispatch => {
    if (isEmpty(user) || isEmpty(password)) {
      showAlert({type: 2, msj: 'Usuario o Clave vacios'});
      return false;
    }

    dispatch({
      type: WAITING_DATA,
    });

    sw_login({
      user,
      password,
    }).then(data => {
      if (data.status == 200) {
        dispatch({
          type: SET_INPUT_USER,
          payload: {prop: 'user', value: data.data.user},
        });

        dispatch({
          type: SET_INPUT_USER,
          payload: {prop: 'token', value: data.data.token},
        });

        callback();
      } else {
        showAlert({type: 2, msj: data.data.error});
      }
      dispatch({
        type: STOP_WAITING_DATA,
      });

      dispatch({
        type: STOP_WAITING_DATA,
      });
    });
  };
};

export const generatePDF = info => {
  const {
    token,
    codSofya,
    local,
    idClienteSelect,
    direccion,
    idSupervisorSelect,
    ubicacion,
    fecha,
    horInicio,
    horFin,
    idMarcaAir,
    idTipoAir,
    capacidadAir,
    energiaAir,
    refrigeranteAir,
    idMarcaVen,
    idTipoVen,
    capacidadVen,
    energiaVen,
    idEquipoGen,
    modeloGen,
    serieGen,
    idEquipoTwoGen,
    modeloTwoGen,
    serieTwoGen,
    observaciones,
    recomendaciones,
    compresor1,
    compresor2,
    compresor3,
    ventiladorCon1,
    ventiladorCon2,
    ventiladorCon3,
    ventilador1,
    ventilador2,
    ventilador3,
    amperaje1,
    amperaje2,
    amperaje3,
    altaInicial,
    altaFinal,
    bajaInicial,
    bajaFinal,
    Voltaje1,
    Voltaje2,
    Voltaje3,
    temperatura,
    manoMarca,
    manoModelo,
    manoSerie,
    pinzaMarca,
    pinzaModelo,
    pinzaSerie,
    termoMarca,
    termoModelo,
    termoSerie,
    idUser,
    arrPhotos,
    textInputs,
    nomCli,
    dniCli,
    cargoCli,
    callback,
  } = info;
  console.log('info', info);

  return dispatch => {
    dispatch({
      type: WAITING_DATA,
    });

    sw_save_pdf({
      token,
      codSofya: isEmpty(codSofya) ? '-' : codSofya,
      local: isEmpty(local) ? '-' : local,
      idUser,
      idClienteSelect,
      direccion: isEmpty(direccion) ? '-' : direccion,
      idSupervisorSelect,
      ubicacion: isEmpty(ubicacion) ? '-' : ubicacion,
      fecha,
      horInicio,
      horFin,
      idMarcaAir: isEmpty(idMarcaAir) ? 0 : idMarcaAir,
      idTipoAir: isEmpty(idTipoAir) ? 0 : idTipoAir,
      capacidadAir: isEmpty(capacidadAir) ? '-' : capacidadAir,
      energiaAir: isEmpty(energiaAir) ? '-' : energiaAir,
      refrigeranteAir: isEmpty(refrigeranteAir) ? '-' : refrigeranteAir,
      idMarcaVen: isEmpty(idMarcaVen) ? 0 : idMarcaVen,
      idTipoVen: isEmpty(idTipoVen) ? 0 : idTipoVen,
      capacidadVen: isEmpty(capacidadVen) ? '-' : capacidadVen,
      energiaVen: isEmpty(energiaVen) ? '-' : energiaVen,
      idEquipoGen: isEmpty(idEquipoGen) ? 0 : idEquipoGen,
      modeloGen: isEmpty(modeloGen) ? '-' : modeloGen,
      serieGen: isEmpty(serieGen) ? '-' : serieGen,
      idEquipoTwoGen: isEmpty(idEquipoTwoGen) ? 0 : idEquipoTwoGen,
      modeloTwoGen: isEmpty(modeloTwoGen) ? '-' : modeloTwoGen,
      serieTwoGen: isEmpty(serieTwoGen) ? '-' : serieTwoGen,
      observaciones: isEmpty(observaciones) ? '-' : observaciones,
      recomendaciones: isEmpty(recomendaciones) ? '-' : recomendaciones,
      compresor1: isEmpty(compresor1) ? '-' : compresor1,
      compresor2: isEmpty(compresor2) ? '-' : compresor2,
      compresor3: isEmpty(compresor3) ? '-' : compresor3,
      ventiladorCon1: isEmpty(ventiladorCon1) ? '-' : ventiladorCon1,
      ventiladorCon2: isEmpty(ventiladorCon2) ? '-' : ventiladorCon2,
      ventiladorCon3: isEmpty(ventiladorCon3) ? '-' : ventiladorCon3,
      ventilador1: isEmpty(ventilador1) ? '-' : ventilador1,
      ventilador2: isEmpty(ventilador2) ? '-' : ventilador2,
      ventilador3: isEmpty(ventilador3) ? '-' : ventilador3,
      amperaje1: isEmpty(amperaje1) ? '-' : amperaje1,
      amperaje2: isEmpty(amperaje2) ? '-' : amperaje2,
      amperaje3: isEmpty(amperaje3) ? '-' : amperaje3,
      altaInicial: isEmpty(altaInicial) ? '-' : altaInicial,
      altaFinal: isEmpty(altaFinal) ? '-' : altaFinal,
      bajaInicial: isEmpty(bajaInicial) ? '-' : bajaInicial,
      bajaFinal: isEmpty(bajaFinal) ? '-' : bajaFinal,
      Voltaje1: isEmpty(Voltaje1) ? '-' : Voltaje1,
      Voltaje2: isEmpty(Voltaje2) ? '-' : Voltaje2,
      Voltaje3: isEmpty(Voltaje3) ? '-' : Voltaje3,
      temperatura: isEmpty(temperatura) ? '-' : temperatura,
      manoMarca: isEmpty(manoMarca) ? '-' : manoMarca,
      manoModelo: isEmpty(manoModelo) ? '-' : manoModelo,
      manoSerie: isEmpty(manoSerie) ? '-' : manoSerie,
      pinzaMarca: isEmpty(pinzaMarca) ? '-' : pinzaMarca,
      pinzaModelo: isEmpty(pinzaModelo) ? '-' : pinzaModelo,
      pinzaSerie: isEmpty(pinzaSerie) ? '-' : pinzaSerie,
      termoMarca: isEmpty(termoMarca) ? '-' : termoMarca,
      termoModelo: isEmpty(termoModelo) ? '-' : termoModelo,
      termoSerie: isEmpty(termoSerie) ? '-' : termoSerie,
      arrPhotos: isEmpty(arrPhotos) ? '-' : arrPhotos,
      textInputs: isEmpty(textInputs) ? '-' : textInputs,
      nomCli: isEmpty(nomCli) ? '-' : nomCli,
      dniCli: isEmpty(dniCli) ? '-' : dniCli,
      cargoCli: isEmpty(cargoCli) ? '-' : cargoCli,
    })
      .then(data => {
        if (data.status == 200) {
          callback(data.data.idReport);
        } else {
          console.log('eee', data);
          showAlert({type: 2, msj: data.data.error});
        }

        dispatch({
          type: STOP_WAITING_DATA,
        });
      })
      .catch(e => {
        console.log('eee', e);
        dispatch({
          type: STOP_WAITING_DATA,
        });
      });
  };
};
export const getInitialDataApp = info => {
  const {token, callback} = info;

  return dispatch => {
    dispatch({
      type: WAITING_DATA,
    });

    sw_data_app({token}).then(data => {
      if (data.status == 200) {
        dispatch({
          type: SET_INITIAL_DATA,
          payload: data.data,
        });

        callback();
      } else {
        showAlert({type: 2, msj: data.data.error});
      }

      dispatch({
        type: STOP_WAITING_DATA,
      });
    });
  };
};

export const sendReport = info => {
  const {token, idReport, callback} = info;

  return dispatch => {
    dispatch({
      type: WAITING_DATA,
    });

    sw_send_report({token, idReport})
      .then(data => {
        if (data.status == 200) {
          dispatch({
            type: CLEAR_DATA_REPORT,
          });

          callback();
        } else {
          showAlert({type: 2, msj: data.data.error});
        }

        dispatch({
          type: STOP_WAITING_DATA,
        });
      })
      .catch(e => {
        dispatch({
          type: STOP_WAITING_DATA,
        });
      });
  };
};
