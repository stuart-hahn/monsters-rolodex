import React from 'react';
import Card from '../card/Card'
import './CardList.css'

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map(m => <Card key={m.id} monster={m} />)}
    </div>
  );
}

export default CardList;
