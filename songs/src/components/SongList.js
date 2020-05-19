import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

    renderList = () => {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        })
    }

    render() {
        //this.props === what's returned in mapStateToProps
        return (
            <div className="song-list ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        songs: state.songs
    };
}
//the 2nd argument to connect must be an object 'selectSong' right now is shorthand for 'selectSong:selectSong' this is passing the action
//this will also make these actions available in props
export default connect(mapStateToProps, { selectSong })(SongList);