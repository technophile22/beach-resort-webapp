import React, { Component } from 'react'

//importing the data from the data.js file
import items from './data';


const RoomContext = React.createContext();
//we have access to provider and consumer because of this context
//normally we will create a provider by writing <RoomContext.Provider value={/* some value */}>
//but here we are making this whole class "RoomProvider" as provider and accessing its children
//using this.props.children

class RoomProvider extends Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true 

    };

    //get data


    componentDidMount() {
        let rooms = this.formatData(items);
        let featuredRooms = rooms.filter( room => room.featured === true);
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false
        })
    
    }

    formatData(items) {
        let tempItems = items.map (item => {

            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = {...item.fields, images, id};
            return room;
        });
        return tempItems;

    }
    render() {
        return (
            <RoomContext.Provider value={ { ...this.state }}>
                {this.props.children}                
            </RoomContext.Provider >
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomContext, RoomProvider, RoomConsumer};