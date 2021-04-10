import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Cabs from './case-studies/Cabs';
import TravelMalawi from './case-studies/TravelMalawi';
import Jobs from './case-studies/Jobs';
import Furniture from './case-studies/Furniture';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/265Cabs" component={Cabs}></Route>
      <Route exact path="/travel-malawi" component={TravelMalawi}></Route>
      <Route exact path="/jobs" component={Jobs}></Route>
      <Route exact path="/furniture" component={Furniture}></Route>

    </>
  );
}

export default App;
