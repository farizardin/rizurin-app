import './App.css';
import Banner from './pages/home/Banner';
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollReveal from './components/ScrollReveal';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {  
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '9C8A16E24C2DDC8863CEE3361D40DA2C';
  const steamId = '76561198241997466';
  const gameDetail = `https://cors-anywhere.herokuapp.com/store.steampowered.com/api/appdetails`;
  const ownedGame = `https://cors-anywhere.herokuapp.com/api.steampowered.com/IPlayerService/GetOwnedGames/v0001/`;
  useEffect(() => {
    // Example of using Axios to fetch data
    axios.get(`https://cors-anywhere.herokuapp.com/api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/`, {
        params: {
          key: apiKey,
          steamids: steamId,
        },
      })
      .then((response) => {
        setPlayerData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

      axios.get(ownedGame, {
        params: {
          key: apiKey,
          steamid: steamId,
          include_appinfo: 1,
        },
      })
      .then((response) => {
        setPlayerData(response.data);
        const games = response?.data?.response?.games;
        games.forEach(element => {
          console.log(element);
        });
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [apiKey, steamId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ParallaxProvider>
        <Banner/>
      </ParallaxProvider>
      <ScrollReveal/>
    </div>

    // <div style={{ position: "relative", height: "100vh", width: "100%" }}>
    //   <Particle/>
    // </div>
  );
}

export default App;