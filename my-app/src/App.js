import './App.css';
import Container from 'react-bootstrap/Container';
import FrictionlessExperience from './components/FrictionlessExperience/FrictionlessExperience';
import Header from './components/Header/Header';
import DefiAndBanking from './components/DefiAndBanking/DefiAndBanking';

function App() {
  return (
    <>
      <Header />
      <br />
      <FrictionlessExperience />
      <DefiAndBanking />
    </>
  );
}
export default App;
