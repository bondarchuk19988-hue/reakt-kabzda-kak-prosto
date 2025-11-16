import React from 'react';
import s from '../Music.module.css';

class MyAlbum extends React.Component {
    playAlbum = (album) => {
        const { dispatch } = this.props;
        
     
        dispatch({ type: 'SET_CURRENT_ALBUM', albumId: album.id });
        
        dispatch({ type: 'SET_ALBUM_TRACKS', tracks: album.tracks });
        
        setTimeout(() => {
            dispatch({ type: 'TOGGLE_PLAY', isPlaying: true });
        }, 100);
    };

    render() {
        const { musicPage } = this.props;
        
        return (
            <div className={s.albumsContainer}>
                <h2 className={s.albumsTitle}>Альбомы</h2>
                
                <div className={s.albumsGrid}>
                    {musicPage.albums.map(album => (
                        <div 
                            key={album.id}
                            className={`${s.albumCard} ${musicPage.currentAlbumId === album.id ? s.activeAlbum : ''}`}
                            onClick={() => this.playAlbum(album)}
                        >
                            <div className={s.albumCover}>
                                <img 
                                    src={album.cover} 
                                    alt={album.title}
                                    className={s.albumImage}
                                />
                                <div className={s.albumPlayOverlay}>
                                    <span className={s.playIcon}>▶</span>
                                </div>
                            </div>
                            
                            <div className={s.albumInfo}>
                                <h3 className={s.albumTitle}>{album.title}</h3>
                                <p className={s.albumArtist}>{album.artist}</p>
                                <p className={s.albumTracksCount}>
                                    {album.tracks.length} треков
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default MyAlbum;