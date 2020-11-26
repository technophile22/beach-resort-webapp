import React, { Component } from 'react'
import {RoomContext} from '../context';
import Loading from './Loading';
import Room from './Room';

/*
this code is from the documentation to get the understanding of how we can access the data from context

class MyClass extends React.Component {
  static contextType = MyContext;
  render() {
    let value = this.context;
}
}
*/
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {

        const {featuredRooms : rooms } = this.context;
        console.log(rooms);

        return (
            <div>
                hello from featured rooms
                <Room />
                <Loading />
            </div>
        )
    }
}
