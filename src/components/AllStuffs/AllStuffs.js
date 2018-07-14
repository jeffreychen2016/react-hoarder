import React from 'react';
import './AllStuffs.css';
import allStuffsRequests from '../../firebaseRequests/allStuffs';
import Stuff from '../Stuff/Stuff';

class AllStuffs extends React.Component {
  state = {
    allStuffs: [],
    componentFrom: 'AllStuffs',
  };

  componentDidMount () {
    allStuffsRequests
      .getRequest()
      .then((allStuffs) => {
        this.setState({allStuffs});
      })
      .catch((err) => {
        console.error('error with get request', err);
      });
  };

  render () {
    const stuffComponent = this.state.allStuffs.map((stuff) => {
      return (
        <Stuff
          details={stuff}
          key={stuff.id}
          componentFrom={this.state.componentFrom}
        />
      );
    });
    return (
      <div className="AllStuffs">
        <h2>AllStuffs</h2>
        <div className="container-fluid">
          <div className="row">
            {stuffComponent}
          </div>
        </div>
      </div>
    );
  }
};

export default AllStuffs;
