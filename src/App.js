import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
    Header,
    Home,
    Destinations,
    Plans,
    CoupleTour,
    Booking,
    AboutUs,
    ContactUs,
    Footer,
    NotFound
} from './components';

import styles from './App.module.css';

function App() {
    return (
        <div className={styles.app}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/coupletour" element={<CoupleTour />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
