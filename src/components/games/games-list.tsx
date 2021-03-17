import React from 'react';

import './games-list-styles.css';
import ListItem from './list-item';

interface Game {
  id: number;
  name: string;
  rating: number;
  summary: string;
  first_release_date: number;
}

interface Props {
  games: Game[];
}

const GamesList: React.FC<Props> = (props): JSX.Element => {
  const { games } = props;

  return (
    <div className='games-list'>
      {games.length !== 0 ? (
        games.map((game: Game) => <ListItem key={game.id} game={game} />)
      ) : (
        <div className='loading'>loading...</div>
      )}
    </div>
  );
};

export default GamesList;
