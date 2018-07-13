import React from 'react';
import './Stuff.css';

class Stuff extends React.Component {
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
                <a class="btn btn-primary" role="button">Add</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Stuff;
