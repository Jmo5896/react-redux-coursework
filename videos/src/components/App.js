import React from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

const KEY = 'AIzaSyCSPpd_aoOOMrbCS-Rl2VBQvRhfr4QjV8o';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onTermSubmit('cats');
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
                type: 'video',
                part: 'snippet',
                maxResults: 5,
                key: KEY
            }
        });
        this.setState({ 
            videos: response.data.items, 
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });

    }

    render() {
        return (
            <div className="app ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="5 wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default App