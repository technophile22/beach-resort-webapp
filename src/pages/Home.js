import React from 'react';
import {Link} from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';

export default function () {
    return (
        <>
        <Hero>
            <Banner title="luxurious rooms" subtitle="Experience the passion of hospitality." >
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
            
        </Hero>
        <Services />
        </>
        
    )
}
