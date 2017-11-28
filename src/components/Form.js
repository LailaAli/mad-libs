import React, { Component } from 'react';
import {readStory} from '../actions';

import {connect} from 'react-redux';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstWord: ' ',
            secondWord: ' '
        }
    }
    render() {
        return (
            <div className="Form">
                <input onChange={this.handleFirstWord} type='text' value={this.state.firstWord} placeholder='first word' />
                <input onChange={this.handleSecondWord} type='text' value={this.state.secondWord} placeholder='second word' />
                <button onClick={this.handleButtonClick}>Read Story</button>
            </div>
        );
    }
    handleFirstWord = (event) => {
        this.setState ({
            firstWord: event.target.value
          })
    }

    handleSecondWord = (event) => {
        this.setState ({
            secondWord: event.target.value
          })
    }

    handleButtonClick = (event) => {
       //and call it w/my words
       this.props.readStory(this.state.firstWord, this.state.secondWord)
    }

}

const mapActionsToProps = { readStory }

export default connect(null, mapActionsToProps)(Form);
