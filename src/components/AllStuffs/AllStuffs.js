import React from 'react';
import './AllStuffs.css';
import allStuffsRequests from '../../firebaseRequests/allStuffs';
import Stuff from '../Stuff/Stuff';

class AllStuffs extends React.Component {
  state = {
    allStuffs: [],
  };

  componentDidMount () {
    allStuffsRequests
      .getRequest()
      .then((allStuffs) => {
        this.setState({allStuffs});
      })
      .catch((err) => {
        console.error('error with fish get request', err);
      });
  };

  render () {
    const stuffComponent = this.state.allStuffs.map((stuff) => {
      return (
        <Stuff
          details={stuff}
        />
      );
    });
    return (
      <div className="AllStuffs">
        <h2>AllStuffs</h2>
        {stuffComponent}
      </div>
    );
  }
};

export default AllStuffs;
