import React, {Component} from 'react';
import Data from '../../api/Data';

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
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentWillMount () {
        this.setState({
            description: Data[0].description,
            imgNames: Data[0].images
        });
    }

    setUserAnswer(answer) {
        this.setState((state) => ({
            answer: answer
        }));
    }

    setNextQuestion() {
        const counter = this.state.counter +1;
        this.setState({
            counter: counter,
            description: Data[counter].description,
            imgNames: Data[counter].images,
        });
    }

    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);

        if(this.state.counter < Data.length - 1) {
            setTimeout(() => this.setNextQuestion(), 300);
        } 
    }

    render(){
        return (
            <Auxiliary>
                <InteractionWindow
                    description={this.state.description}
                />

                <ImageWindow
                    imgNames={this.state.imgNames}
                />
            </Auxiliary>          
        );
    }
}

export default Layout;