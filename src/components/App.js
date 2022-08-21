import '../styles/App.css';
import AnimatedRoutes from './AnimatedRoutes';
import Menu from './Menu.js';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Menu />  
        <AnimatedRoutes /> 
      </Router>
    </div>
  );
}

export default App;

{/* couleurs à utiliser : #98d65a - #b5b5b5 - #e8e8e8 */}