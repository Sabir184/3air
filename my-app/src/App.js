import './App.css';
import FrictionlessExperience from './components/FrictionlessExperience/FrictionlessExperience';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import DefiAndBanking from './components/DefiAndBanking/DefiAndBanking';
import NFTsandOwnership from './components/NFTsAndOwnership/NFTsandOwnership';
import DigitalIdentities from './components/DigitalIdentities/DigitalIdentities';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FrictionlessExperience />
      <DefiAndBanking />
      <NFTsandOwnership />
      <DigitalIdentities />
    </>
  );
}
export default App;
