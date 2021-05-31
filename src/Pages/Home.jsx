import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link exact to="/Beers" > BEERS</Link>
            <Link exact to="/RandomBeer" > Random Beer</Link>
            <Link exact to="/New-Beer" > New Beer</Link>
        </div>
    );
}

export default Home;