import './App.css';
import FrictionlessExperience from './components/FrictionlessExperience/FrictionlessExperience';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import DefiAndBanking from './components/DefiAndBanking/DefiAndBanking';
import NFTsandOwnership from './components/NFTsAndOwnership/NFTsandOwnership';
import DigitalIdentities from './components/DigitalIdentities/DigitalIdentities';
import Architecture from './components/Architecture/Architecture';
import LogosSection from './components/HeroSection/LogosSection';
import NewUsers from './components/NewUsers/NewUsers';
import Team from './components/CoreTeam/Team';
import Edication from './components/Edication/Edication';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <LogosSection />
      <NewUsers />
      <FrictionlessExperience />
      <DefiAndBanking />
      <Edication />
      <NFTsandOwnership />
      <DigitalIdentities />
      <Architecture />
      <Team />
    </>
  );
}
export default App;
