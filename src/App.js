import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router,Switch,Route,Routes} from 'react-router-dom';
import ProductComponent from './components/ProductComponent';
import ProductListing from './components/ProductListing';
import Productdetails from './components/Productdetails';


function App() {
  return (
    <div>
    <Router>
    <Header/>
    <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<Productdetails />} />
        <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
</Router>
  
   </div>
  );
}
export default App;
