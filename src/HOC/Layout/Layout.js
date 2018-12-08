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
            isLast: false
        };

        this.handleNextPageButtonClick = this.handleNextPageButtonClick.bind(this);
    }

    componentWillMount () {
        this.setState({
            description: Data[0].description,
            imgNames: Data[0].images,
        });
    }

    setNext() {
        const counter = this.state.counter +1;
        this.setState({
            counter: counter,
            description: Data[counter].description,
            imgNames: Data[counter].images,
        });
    }

    handleNextPageButtonClick(event) {
        if(this.state.counter < Data.length - 1) {
            setTimeout(() => this.setNext(), 300);

            if(this.state.counter == Data.length - 2){
                const islast = true;
                this.setState({
                    isLast: islast
                });
            }
        }
    }

    render(){
        return (
            <Auxiliary>
                <InteractionWindow
                    description={this.state.description}
                    onClick={this.handleNextPageButtonClick}
                    isLast={this.state.isLast} />

                <ImageWindow
                    imgNames={this.state.imgNames}/>

            </Auxiliary>          
        );
    }
}

export default Layout;