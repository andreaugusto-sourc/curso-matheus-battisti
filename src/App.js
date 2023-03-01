import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import Projetos from './components/pages/Projetos';

import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import NovoProjeto from './components/pages/NovoProjeto';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container customClass="min-height">
          <Routes>
            <Route exact path='/novoprojeto' element={<NovoProjeto />} />
            <Route exact path='/' element={<Home />} />
            <Route exact path='/projetos' element={<Projetos />} />
            <Route exact path='/sobre' element={<Sobre />} />
            <Route exact path='/contato' element={<Contato />} />
          </Routes>
        </Container> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
