import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Search from './pages/Search'

import './App.css'
import Comments from './pages/Comments'

TimeAgo.addDefaultLocale(en)

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/comments/:id" element={<Comments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
