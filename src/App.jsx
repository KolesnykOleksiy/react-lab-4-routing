import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardsPage from "./pages/CardsPage/CardsPage.jsx";
import NewsPage from "./pages/NewsPage/NewsPage.jsx";
import ConcreteCardPage from "./pages/ConcreteCardPage.jsx";
import PageTitle from "./components/PageTitle.jsx";
import Layout from "./components/Layout.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path={"home"} element={<div>Home page</div>}/>
                    <Route path="shop" element={<PageTitle title="Shop" />}>
                        <Route index element={<CardsPage />} />
                        <Route path=":id" element={<ConcreteCardPage />} />
                    </Route>
                    <Route path="news" element={<PageTitle title="News" />}>
                        <Route index element={<NewsPage />} />
                        <Route path=":id" element={<ConcreteCardPage />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
