// import Movie from './components/Movie';
// import { dummy } from './movieDummy';
// import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tv from './pages/Tv';
import Celebrity from './pages/Celebrity';
import NotFound from './pages/NotFound';
import Movies from './pages/Movies';
import Header from './components/Header';
import MovieDetail from './pages/MovieDetail';
import Login from './pages/Login';

function App() {
  return (
    <div className='root-wrap'>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:title" element={<MovieDetail />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/person" element={<Celebrity />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element= {<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App;
