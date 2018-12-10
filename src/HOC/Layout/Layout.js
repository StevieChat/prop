import React, {Component} from 'react';
import Data from '../../api/Data';
import Sound from 'react-sound';
import {setConfiguration} from 'react-grid-system';

import soundfile from '../../assets/Music/Summertime-Sadness-Vanic-Remix.mp3';

import InteractionWindow from '../../Components/InteractionWindow/InteractionWindow';
import ImageWindow from '../../Components/ImageWindow/ImageWindow';
import Auxiliary from '../Auxiliary/Auxiliary';

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            description: '',
            imgNames: [],
            isLast: false,
            isFirst: true
        };

        this.handleNextPageButtonClick = this.handleNextPageButtonClick.bind(this);
        this.handlePrevPageButtonClick = this.handlePrevPageButtonClick.bind(this);
        this.getIsFirst = this.getIsFirst.bind(this);
        this.getIsLast = this.getIsLast.bind(this);

        setConfiguration({
            containerWidths: [540, 750, 960, 1400]
        });
    }

    componentWillMount () {
        this.setState({
            description: Data[0].description,
            imgNames: Data[0].images,
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
                    url={soundfile} 
                    playStatus={Sound.status.STOPPED}
                    volume={10} />

            </Auxiliary>          
        );
    }
}

export default Layout;