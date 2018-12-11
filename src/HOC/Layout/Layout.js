import React, {Component} from 'react';
import Data from '../../api/Data';
import Music from '../../api/Music';
import Sound from 'react-sound';
import {setConfiguration} from 'react-grid-system';

import InteractionWindow from '../../Components/InteractionWindow/InteractionWindow';
import ImageWindow from '../../Components/ImageWindow/ImageWindow';
import Auxiliary from '../Auxiliary/Auxiliary';

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            songCounter: 0,
            description: '',
            imgNames: [],
            isLast: false,
            isFirst: true,
            songName: ''
        };

        this.handleNextPageButtonClick = this.handleNextPageButtonClick.bind(this);
        this.handlePrevPageButtonClick = this.handlePrevPageButtonClick.bind(this);
        this.getIsFirst = this.getIsFirst.bind(this);
        this.getIsLast = this.getIsLast.bind(this);
        this.handleSongFinishedPlaying = this.handleSongFinishedPlaying.bind(this);

        setConfiguration({
            containerWidths: [540, 750, 960, 1400]
        });
    }

    componentWillMount () {
        this.setState({
            description: Data[0].description,
            imgNames: Data[0].images,
            songName: Music[0].songName
        });
    }

    setNext() {
        let counter = this.state.counter +1;
        let isLastPage = this.getIsLast(counter);
        let isFirstPage = this.getIsFirst(counter);

        this.setState({
            counter: counter,
            description: Data[counter].description,
            imgNames: Data[counter].images,
            isFirst: isFirstPage,
            isLast: isLastPage
        });
    }

    setPrev() {
        let counter = this.state.counter -1;
        let isLastPage = this.getIsLast(counter);
        let isFirstPage = this.getIsFirst(counter);

        this.setState({
            counter: counter,
            description: Data[counter].description,
            imgNames: Data[counter].images,
            isFirst: isFirstPage,
            isLast: isLastPage
        });
    }

    handleNextPageButtonClick(event) {
        if(this.state.counter < Data.length - 1) {
            this.setNext();
        }
    }

    handlePrevPageButtonClick(event) {
        if(this.state.counter > 0){
            setTimeout(() => this.setPrev(), 0);
        }
    }

    getIsLast(counter) {
        let islast = true;

        if(counter === Data.length - 1){
            islast = true;
        } else {
            islast = false;
        }

        return islast;
    }

    getIsFirst(counter) {
        let isfirst = true;

        if(counter > 0){
            console.log("compared counter");
            isfirst = false;
        } else {
            isfirst = true;
        }

        return isfirst;
    }

    handleSongFinishedPlaying() {
        let songcounter = this.state.songCounter + 1;
        let songname = Music[songcounter].songName;

        this.setState({
            songName: songname,
            songCounter: songcounter
        });

    }

    render(){
        return (
            <Auxiliary>
                <InteractionWindow
                    description={this.state.description}
                    onClickNext={this.handleNextPageButtonClick}
                    onClickPrev={this.handlePrevPageButtonClick}
                    isLast={this.state.isLast} 
                    isFirst={this.state.isFirst} />

                <ImageWindow
                    imgNames={this.state.imgNames}/>

                <Sound 
                    url={require(`../../assets/Music/${this.state.songName}`)} 
                    playStatus={Sound.status.PLAYING}
                    volume={5} 
                    onFinishedPlaying={this.handleSongFinishedPlaying} />

            </Auxiliary>          
        );
    }
}

export default Layout;