import React from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'

import { AllAlbums } from './allAlbums'
import { SingleAlbum } from './singleAlbum'

const albumsURL = 'https://jsonplaceholder.typicode.com/albums'
const photosURL = 'https://jsonplaceholder.typicode.com/photos'

export default class Albums extends React.Component {
    constructor(){
        super()

        this.state = {
            allAlbums: [],
            allPhotos: []
        }
    }

    getAlbums = () => {
        axios.get(albumsURL)
        .then(res => {
            this.setState({
                allAlbums: res.data
            })
        })
    }

    getPhotos = () => {
        axios.get(photosURL)
        .then(res => {
            this.setState({
                allPhotos: res.data
            })
        })
    }

    componentDidMount(){
        this.getAlbums()
        this.getPhotos()
    }

    render(){
        return(
            <div>
               <Route 
                exact path='/albums' 
                render={
                    () => <AllAlbums albums={this.state.allAlbums}/>}
                />
                <Route 
                path='/albums/:id' 
                render={props => <SingleAlbum 
                                {...props}
                                albums={this.state.allAlbums} 
                                photos={this.state.allPhotos}/>}
                                />
            </div>
        )
    }
}