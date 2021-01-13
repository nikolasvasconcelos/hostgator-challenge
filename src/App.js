import './App.css';
import Header from './components/Header';
import Informational from './components/Informational';
import PlanSelection from './components/PlanSelection';

import './styles/app.scss';

function App() {
  return (
    <div className="d-flex flex-column flex-base">
      <Header />
      <Informational />
      <PlanSelection />
    </div>
  );
}

export default App;
