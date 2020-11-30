import React from 'react';

import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomContainer from '../components/RoomContainer';
import Room from '../components/Room';

export const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our rooms" subtitle="deluxe rooms starting at $299">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
        <RoomContainer />
        </>

    )
}

export default Rooms;