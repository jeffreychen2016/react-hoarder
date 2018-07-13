import constants from '../constants';
import axios from 'axios';

const postRequest = (stuffToAdd) => {
  return new Promise((resolve,reject) => {
    axios
      .post(`${constants.firebaseConfig.databaseURL}/myStuffs.json`,stuffToAdd)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {postRequest};
