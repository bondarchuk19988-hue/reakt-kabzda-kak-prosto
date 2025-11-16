import React from 'react';
import s from '.././Music.module.css';

class MyMusic extends React.Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
        this.state = {
            currentTime: 0,
            duration: 0,
            isTrackListVisible: false
        };
    }

    componentDidMount() {
        if (this.audioRef.current) {
            this.audioRef.current.addEventListener('timeupdate', this.updateProgress);
            this.audioRef.current.addEventListener('loadedmetadata', this.updateProgress);
            this.audioRef.current.addEventListener('ended', this.nextTrack);
        }
    }

    componentWillUnmount() {
        if (this.audioRef.current) {
            this.audioRef.current.removeEventListener('timeupdate', this.updateProgress);
            this.audioRef.current.removeEventListener('loadedmetadata', this.updateProgress);
            this.audioRef.current.removeEventListener('ended', this.nextTrack);
        }
    }

    togglePlayPause = () => {
        const { musicPage, dispatch } = this.props;
        
        if (this.audioRef.current) {
            if (musicPage.isPlaying) {
                this.audioRef.current.pause();
                dispatch({ type: 'TOGGLE_PLAY', isPlaying: false });
            } else {
                this.audioRef.current.play().catch(error => {
                    console.log('Ошибка воспроизведения:', error);
                });
                dispatch({ type: 'TOGGLE_PLAY', isPlaying: true });
            }
        }
    };

    nextTrack = () => {
        const { musicPage, dispatch } = this.props;
        const nextIndex = (musicPage.currentTrackIndex + 1) % musicPage.tracks.length;
        
        dispatch({ type: 'SET_CURRENT_TRACK', index: nextIndex });
        
        if (musicPage.isPlaying) {
            setTimeout(() => {
                if (this.audioRef.current) {
                    this.audioRef.current.play().catch(error => {
                        console.log('Ошибка воспроизведения:', error);
                    });
                }
            }, 100);
        }
    };

    previousTrack = () => {
        const { musicPage, dispatch } = this.props;
        const prevIndex = (musicPage.currentTrackIndex - 1 + musicPage.tracks.length) % musicPage.tracks.length;
        
        dispatch({ type: 'SET_CURRENT_TRACK', index: prevIndex });
        
        if (musicPage.isPlaying) {
            setTimeout(() => {
                if (this.audioRef.current) {
                    this.audioRef.current.play().catch(error => {
                        console.log('Ошибка воспроизведения:', error);
                    });
                }
            }, 100);
        }
    };

    playTrack = (index) => {
        const { dispatch } = this.props;
        dispatch({ type: 'SET_CURRENT_TRACK', index: index });
        
        if (this.audioRef.current) {
            this.audioRef.current.play().catch(error => {
                console.log('Ошибка воспроизведения:', error);
            });
        }
        dispatch({ type: 'TOGGLE_PLAY', isPlaying: true });
        this.setState({ isTrackListVisible: false });
    };

    updateProgress = () => {
        if (this.audioRef.current) {
            this.setState({
                currentTime: this.audioRef.current.currentTime,
                duration: this.audioRef.current.duration || 0
            });
        }
    };

    handleSeek = (e) => {
        if (this.audioRef.current && this.state.duration) {
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            const newTime = percent * this.state.duration;
            this.audioRef.current.currentTime = newTime;
            this.setState({ currentTime: newTime });
        }
    };

    formatTime = (seconds) => {
        if (isNaN(seconds)) return '0:00';
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    };

    toggleTrackList = () => {
        this.setState({ isTrackListVisible: !this.state.isTrackListVisible });
    };

    render() {
        const { musicPage } = this.props;
        const { currentTime, duration, isTrackListVisible } = this.state;
        const currentTrack = musicPage.tracks[musicPage.currentTrackIndex];
        const progressPercent = duration ? (currentTime / duration) * 100 : 0;

        return (
            <div className={s.nav1}>
                <audio
                    ref={this.audioRef}
                    src={currentTrack.src}
                />

                <div className={s.compactPlayer}>
                    <div className={s.playerMain}>
                        <div className={s.albumArt}>🎵</div>
                        <div className={s.trackInfo}>
                            <div className={s.trackTitle}>{currentTrack.title}</div>
                            <div className={s.trackArtist}>{currentTrack.artist}</div>
                        </div>
                        <div className={s.controls}>
                            <button className={s.controlBtn} onClick={this.previousTrack}>⏮</button>
                            <button className={s.playPause} onClick={this.togglePlayPause}>
                                {musicPage.isPlaying ? '⏸' : '▶'}
                            </button>
                            <button className={s.controlBtn} onClick={this.nextTrack}>⏭</button>
                        </div>
                    </div>

                    <div className={s.progressSection}>
                        <div className={s.progressBar} onClick={this.handleSeek}>
                            <div 
                                className={s.progress} 
                                style={{ width: `${progressPercent}%` }}
                            ></div>
                        </div>
                        <div className={s.timeDisplay}>
                            <span>{this.formatTime(currentTime)}</span>
                            <span>{this.formatTime(duration)}</span>
                        </div>
                    </div>

                    <div className={s.toggleTracks} onClick={this.toggleTrackList}>
                        <span>Список следующих треков</span>
                    </div>

                    {isTrackListVisible && (
                        <div className={s.trackList}>
                            {musicPage.tracks.map((track, index) => (
                                <div 
                                    key={track.id}
                                    className={`${s.trackItem} ${index === musicPage.currentTrackIndex ? s.active : ''}`}
                                    onClick={() => this.playTrack(index)}
                                >
                                    <div className={s.trackItemNumber}>{index + 1}</div>
                                    <div className={s.trackItemInfo}>
                                        <div className={s.trackItemTitle}>{track.title}</div>
                                        <div className={s.trackItemArtist}>{track.artist}</div>
                                    </div>
                                    <div className={s.trackItemDuration}>{track.duration}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default MyMusic;