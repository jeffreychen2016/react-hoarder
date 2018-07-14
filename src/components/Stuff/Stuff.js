import React from 'react';
import './Stuff.css';
import stuffRequests from '../../firebaseRequests/stuff';
import authRequests from '../../firebaseRequests/auth';

class Stuff extends React.Component {
  state = {
    stuffs: this.props.details,
    componentFrom: this.props.componentFrom,
    stuffToView: {},
  }

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

  deleteStuffEvent = () => {
    const stuffId = this.props.details.id;
    stuffRequests
      .deleteRequest(stuffId)
      .then(() => {
        stuffRequests
          .getRequest(authRequests.getUid())
          .then((myStuffs) => {
            this.props.updateMyStuffsAfterDelete(myStuffs);
          });
      })
      .catch((err) => {
        console.error('Error with deleting stuff',err);
      });
  };

  viewStuffInFullScreen = () => {
    const stuffId = this.props.details.id;
    this.props.redirectToViewStuff(stuffId);
  };

  render () {
    const { stuffs } = this.state;
    return (
      <div className="Stuff">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <h3>{stuffs.itemName}</h3>
            <img src={stuffs.itemImage} alt={stuffs.itemName} />
            <div className="caption">
              <p>{stuffs.itemDescription}</p>
              { this.state.componentFrom === 'MyStuffs' ?
                (
                  <div>
                    <a className="btn btn-primary" role="button" onClick={this.deleteStuffEvent}>Delete</a>
                    <a className="btn btn-primary" role="button" onClick={this.viewStuffInFullScreen}>View</a>
                  </div>
                )
                :
                (<a className="btn btn-primary" role="button" onClick={this.addStuffEvent}>Add</a>)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Stuff;
