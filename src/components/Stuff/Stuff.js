import React from 'react';

class Stuff extends React.Component {
  render () {
    const { details } = this.props;
    const image = require(`${details.itemImage}`);
    return (
      <div className="Stuff">
        <img src={image} alt={details.itemName} />
        <h3>{details.itemName}</h3>
      </div>
    );
  }
};

export default Stuff;
