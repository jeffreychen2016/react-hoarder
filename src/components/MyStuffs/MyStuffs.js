import React from 'react';
import './MyStuffs.css';
import stuffRequests from '../../firebaseRequests/stuff';
import Stuff from '../../components/Stuff/Stuff';
import authRequests from '../../firebaseRequests/auth';

class MyStuffs extends React.Component {
  state = {
    myStuffs: [],
  };

  componentDidMount () {
    stuffRequests
      .getRequest(authRequests.getUid())
      .then((myStuffs) => {
        this.setState({myStuffs});
      })
      .catch((err) => {
        console.error('error with get request', err);
      });
  };

  render () {
    const stuffComponent = this.state.myStuffs.map((stuff) => {
      return (
        <Stuff
          details={stuff}
        />
      );
    });
    return (
      <div className="MyStuffs">
        <h2>MyStuffs</h2>
        <div className="container-fluid">
          <div className="row">
            {stuffComponent}
          </div>
        </div>
      </div>
    );
  }
};

export default MyStuffs;
