import './App.css';
import Container from 'react-bootstrap/Container';
import FrictionlessExperience from './components/FrictionlessExperience/FrictionlessExperience';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';
import DefiAndBanking from './components/DefiAndBanking/DefiAndBanking';

function App() {
  return (
    <Container>

      <Header/>
      <Hero/>
      <FrictionlessExperience/>
      <Header />
      <br />
      <FrictionlessExperience />
      <DefiAndBanking />
    </Container>
  );
}
export default App;
