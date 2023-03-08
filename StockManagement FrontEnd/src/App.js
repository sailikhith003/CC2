import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Addproduct from "./addproduct";
import Home from "./display";
import EditProduct from './EditProduct';
function App() {
  return ( 
    <Router>
      <Routes>
        <Route path="/add_product" element={<Addproduct />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path='/edit_product' element={<EditProduct />} />
      </Routes>
    </Router>
   );
}

export default App;
