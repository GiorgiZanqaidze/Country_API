import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Error } from './pages/Error'
import { Home } from "./pages/Home"
import { SingleCountryPage } from "./pages/SingleCountryPage"
import { Navbar } from './components/Navbar';
import { useGlobalContext } from './context'

function App() {
  const { darkMode } = useGlobalContext()
  return (
    <div className="app">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='country/:id' element={<SingleCountryPage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
