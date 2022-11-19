import axios from 'axios';
import {string_general} from '../resources/strings';

export const sw_login = params => {
  return axios
    .post(
      `${string_general.base_URL}auth/login`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
      {params},
    )
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

export const sw_data_app = params => {
  const {token} = params;

  return axios
    .get(
      `${string_general.base_URL}auth/dataApp`,
      {
        headers: {
          Authorization: `bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
      {params},
    )
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

export const sw_save_pdf = params => {
  const {token} = params;
  console.log('params', params);
  return axios({
    method: 'post',
    url: `${string_general.base_URL}auth/createReport`,
    data: params,
    headers: {
      Authorization: `bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};

export const sw_send_report = params => {
  const {token} = params;

  return axios
    .post(
      `${string_general.base_URL}auth/sendReport`,
      {
        headers: {
          Authorization: `bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
      {params},
    )
    .then(res => {
      return res;
    })
    .catch(error => {
      return error.response;
    });
};
