import {WAITING_CALIDAD_DATA, STOP_WAITING_CALIDAD_DATA} from './types';

const initialState = {
  loading: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case WAITING_CALIDAD_DATA:
      return {
        ...state,
        loading: true,
      };

    case STOP_WAITING_CALIDAD_DATA:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
