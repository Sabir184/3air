import './App.css';
import Container from 'react-bootstrap/Container';
import FrictionlessExperience from './components/FrictionlessExperience/FrictionlessExperience';
import Header from './components/Header/Header';

function App() {
  return (
    <Container>
      <Header/><br/>
      <FrictionlessExperience/>
    </Container>
  );
}
export default App;
