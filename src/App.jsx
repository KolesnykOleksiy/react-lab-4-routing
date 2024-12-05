import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CardsPage from "./pages/CardsPage/CardsPage.jsx";
import NewsPage from "./pages/NewsPage/NewsPage.jsx";
import ConcreteCardPage from "./pages/ConcreteCardPage.jsx";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<div>Home element</div>} />
          <Route path="shop" element={<CardsPage/>}/>
          <Route path="shop/:id" element={<ConcreteCardPage/>} />

          <Route path="news" element={<NewsPage/>}/>
          <Route path="shop/:id" element={<ConcreteCardPage/>} />
        </Routes>
      </Router>
  )
}

export default App
