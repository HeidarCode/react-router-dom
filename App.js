
import './App.css';

import Register from './component/Register';
import Info_Register from './component/Info_Register';
import { BrowserRouter  as Router,Link , Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Register />
      <Router>
        <div>
          <Route exact path='/' Component={Register} />
          <Route path='' Component={Info_Register} />
        </div>
      </Router>
      <Info_Register /> 
    
      
  
    </div>
  );
}

export default App;
