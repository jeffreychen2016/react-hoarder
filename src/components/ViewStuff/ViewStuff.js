import React from 'react';
import './ViewStuff.css';
import stuffRequests from '../../firebaseRequests/stuff';

class ViewStuff extends React.Component {
  state = {
    stuffToView: {},
  };

  viewStuffInFullScreen = () => {
    const stuffId = this.props.match.params.id;
    stuffRequests
      .getSingleStuffRequest(stuffId)
      .then((stuff) => {
        this.setState({stuffToView: stuff});
      })
      .catch((err) => {
        console.error('Error with pulling single stuff',err);
      });
  };

  componentDidMount () {
    this.viewStuffInFullScreen();
  };

  render () {
    return (
      <div>
        <div className="jumbotron">
          <h1>{this.state.stuffToView.itemName}</h1>
          <img src={this.state.stuffToView.itemImage} alt=""/>
          <p>{this.state.stuffToView.itemDescription}</p>
        </div>
      </div>
    )
  }
};

export default ViewStuff;
