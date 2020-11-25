import React, { Component } from 'react'

import Title from '../components/Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';


export default class Services extends Component {

    state = {
        services : [
            {
            icon : <FaCocktail />,
            title: "Free Cocktails",
            info : "Enjoy the beautiful holidays with an unlimited supply of drinks to keep you hydrated ;)"
        },
        {
            icon :  <FaHiking />, 
            title: "Endless Hiking",
            info : "We are up for you to reach greatest of heights, enjoy the hiking with us to remember it forever."
        },
        {
            icon : <FaShuttleVan />, 
            title: "Free Shuttle",
            info : "Roam around this beautiful heaven with no worries, we provide you a free shuttle service to feed your travel lust."
        },
        {
            icon : <FaBeer />, 
            title: "Strongest Beer",
            info : "No party is over without a beer and we keep everything in mind to give you the experience you never had before, cheers!"
        }

        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                    {this.state.services.map( (item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                    
                </div>
                
            </section>
        )
    }
}
