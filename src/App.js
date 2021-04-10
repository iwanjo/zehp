import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cabs from './case-studies/Cabs';
import TravelMalawi from './case-studies/TravelMalawi';
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/265Cabs" component={Cabs}></Route>
      <Route exact path="/travel-malawi" component={TravelMalawi}></Route>
    </>
  );
}

export default App;
