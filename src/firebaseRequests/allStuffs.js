import constants from '../constants';
import axios from 'axios';

const getRequest = () => {
  return new Promise((resolve, rejects) => {
    axios.get(`${constants.firebaseConfig.databaseURL}/allStuffs.json`)
      .then((res) => {
        const allStuffs = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            allStuffs.push(res.data[fbKey]);
          });
        };
        resolve(allStuffs);
      })
      .catch((err) => {
        rejects(err);
      });
  });
};

export default { getRequest };
