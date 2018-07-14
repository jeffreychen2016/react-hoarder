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

const getRequest = (uid) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${constants.firebaseConfig.databaseURL}/myStuffs.json?orderBy="uId"&equalTo="${uid}"`)
      .then(res => {
        const myStuffs = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            myStuffs.push(res.data[fbKey]);
          });
        }
        resolve(myStuffs);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const deleteRequest = (stuffId) => {
  return new Promise((resolve,reject) => {
    axios
      .delete(`${constants.firebaseConfig.databaseURL}/myStuffs/${stuffId}.json`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default {postRequest,getRequest,deleteRequest};
