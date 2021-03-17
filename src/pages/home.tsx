import { useState, useEffect } from 'react';

import axios from 'axios';

import './home-styles.css';

import Navbar from '../components/navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import GamesList from '../components/games/games-list';
import Contact from './contact';

interface Game {
  id: number;
  name: string;
  rating: number;
  summary: string;
  first_release_date: number;
}

interface Form {
  name: string;
  sort: string;
  score: string;
}

const Home: React.FC = (): JSX.Element => {
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState<string>('video');
  const [searchedGames, setSearchedGames] = useState<Game[]>([]);

  const getGames = async () => {
    const { data } = await axios.get(
      'https://public.connectnow.org.uk/applicant-test/'
    );
    setGames(data);
  };

  useEffect(() => {
    getGames();
  }, []);

  const togglePage = (p: string): void => {
    setPage(p);
  };

  const filterGames = (form: Form) => {
    const data = orderBy(
      form.sort,
      games.filter((game: Game) => {
        return (
          searchName(form.name, game.name) &&
          searchScore(form.score, game.rating)
        );
      })
    );
    setSearchedGames(data);
  };

  const resetData = (): void => {
    setSearchedGames(games);
  };

  const selectGamesArray: () => Game[] = () => {
    if (searchedGames.length !== 0) {
      return searchedGames;
    }
    return games;
  };

  const searchName = (name: string, game_name: string): boolean =>
    game_name.includes(name.toUpperCase());

  const searchScore = (rating: string, game_rating: number) =>
    Math.round(game_rating / 10) >= parseInt(rating);

  const orderBy = (sort: string, data: Game[]) => {
    switch (sort) {
      case 'date':
        return data.sort(
          (a: Game, b: Game) => b.first_release_date - a.first_release_date
        );
      case 'name':
        return data.sort((a: Game, b: Game) => a.name.localeCompare(b.name));

      case 'score':
        return data.sort((a: Game, b: Game) => b.rating - a.rating);
      default:
        return games;
    }
  };

  return (
    <div className='home'>
      <Navbar page={page} togglePage={togglePage} />
      {page === 'video' ? (
        <div className='main-container'>
          <Sidebar resetData={resetData} filterData={filterGames} />
          <GamesList games={selectGamesArray()} />
        </div>
      ) : (
        <Contact />
      )}
    </div>
  );
};

export default Home;
