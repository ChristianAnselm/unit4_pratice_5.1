import React from "react";

export const SingleAlbum = props => {
  const { id } = props.match.params;
    
  if (props.albums.length && props.photos.length) {

    const findAlbum = props.albums.find(album => album.id === Number(id));
    
    const findPhotos = props.photos.filter(
      photo => photo.albumId === Number(id)
    );

    return (
      <div>
        <h1>{findAlbum.title}</h1>
        {findPhotos.map(photo => (
            <img key={photo.id} src={photo.thumbnailUrl} alt='' />
        ))}
      </div>
    );
  }

  return (<div>loading</div>);
};
