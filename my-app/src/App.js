import './App.css';
import Container from 'react-bootstrap/Container';
import FrictionlessExperience from './components/FrictionlessExperience/FrictionlessExperience';
import Header from './components/Header/Header';
import Hero from './components/HeroSection/Hero';

function App() {
  return (
    <Container>
      <Header/>
      <Hero/>
      <FrictionlessExperience/>
    </Container>
  );
}
export default App;
