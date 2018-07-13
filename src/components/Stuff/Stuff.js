import React from 'react';
import './Stuff.css';
import stuffRequests from '../../firebaseRequests/stuff';
import authRequests from '../../firebaseRequests/auth';

class Stuff extends React.Component {

  addStuffEvent = () => {
    const stuffToAdd = {
      uId: authRequests.getUid(),
      itemName: this.props.details.itemName,
      itemDescription: this.props.details.itemDescription,
      itemImage: this.props.details.itemImage,
    };
    stuffRequests
      .postRequest(stuffToAdd)
      .then(() => {
        // this.props.history.push('./allstuffs');
      })
      .catch((err) => {
        console.error('Error with posting stuff',err);
      });
  };

  render () {
    const { details } = this.props;
    return (
      <div className="Stuff">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <h3>{details.itemName}</h3>
            <img src={details.itemImage} alt={details.itemName} />
            <div className="caption">
              <p>{details.itemDescription}</p>
              <p>
                <a className="btn btn-primary" role="button" onClick={this.addStuffEvent}>Add</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Stuff;
