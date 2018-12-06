import React, {Component} from 'react';
import QuizQuestions from '../../api/QuizQuestions';

import InteractionWindow from '../../Components/InteractionWindow/InteractionWindow';
import ImageWindow from '../../Components/ImageWindow/ImageWindow';
import Auxiliary from '../Auxiliary/Auxiliary';

class Layout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            question: '',
            answerOptions: [],
            answer: '',
            imgNames: [],
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentWillMount () {
        this.setState({
            question: QuizQuestions[0].question,
            answerOptions: QuizQuestions[0].answers,
            imgNames: QuizQuestions[0].images
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
            question: QuizQuestions[counter].question,
            answerOptions: QuizQuestions[counter].answers,
            imgNames: QuizQuestions[counter].images,
            answer: ''
        });
    }

    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);

        if(this.state.counter < QuizQuestions.length - 1) {
            setTimeout(() => this.setNextQuestion(), 300);
        } 
    }

    render(){
        return (
            <Auxiliary>
                <InteractionWindow
                    answer={this.state.answer}
                    answerOptions={this.state.answerOptions}
                    question={this.state.question}
                    onClick={this.handleAnswerSelected}
                />

                <ImageWindow
                    imgNames={this.state.imgNames}
                />
            </Auxiliary>
            
        );
    }
}

export default Layout;