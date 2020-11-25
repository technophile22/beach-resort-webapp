import React from 'react';

import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

export const Rooms = () => {
    return (
        <Hero hero="roomsHero">
            <Banner title="our rooms" subtitle="experience the comfort with our catalogue">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>

    )
}

export default Rooms;