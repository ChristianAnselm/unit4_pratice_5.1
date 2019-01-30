import React from 'react'
import { Link } from 'react-router-dom'

export const AllAlbums = ({ albums }) => {
    return (
        <div>
            <h1>All Albums</h1>
            {albums.map(album => {
                let albumLink = `/albums/${album.id}`

                return (
                    <div key={album.id}>
                        <Link to={albumLink}>{album.title}</Link>
                    </div>
                )
            })}
        </div>
    )
}