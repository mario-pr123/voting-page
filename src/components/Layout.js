import React from 'react'
import Header from './Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from '../pages/MainPage/Main';
import Footer from '../components/Footer/Footer';
import Categories from '../pages/Type/Categories';
import Category from '../pages/Type/Category';
import Type from '../pages/Type/Type';
import InfoPage from '../pages/InfoPage/InfoPage';
import Results from '../pages/Type/Results';
import CategoryResults from '../pages/Type/CategoryResults';

export default function Layout() {

    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/categories/:id" element={<Categories />} />
                    <Route exact path="/type" element={<Type />} />
                    <Route exact path="/category/:id" element={<Category />} />
                    <Route exact path="/info" element={<InfoPage />} />
                    <Route exact path="/results" element={<Results />} />
                    <Route exact path="/results/:id" element={<CategoryResults />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}
