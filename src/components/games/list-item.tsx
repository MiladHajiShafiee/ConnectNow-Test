import React from 'react';
import moment from 'moment';

import './list-item-styles.css';

interface Game {
  id: number;
  name: string;
  rating: number;
  summary: string;
  first_release_date: number;
}

interface Props {
  game: Game;
}

const ListItem: React.FC<Props> = (props): JSX.Element => {
  const { game } = props;
  const rate = Math.round(game.rating / 10);
  const date = moment(game.first_release_date).format('DD/MM/YYYY');

  return (
    <div className='list-item'>
      <div className='black' />
      <div className='content'>
        <div className='info'>
          <div className='title'>{game.name}</div>
          <div className='date'> Release Date: {date}</div>
          <div className='description'>{game.summary}</div>
        </div>
      </div>
      <div className='circle-container'>
        <div className='circle'>{rate}</div>
      </div>
    </div>
  );
};

export default ListItem;
