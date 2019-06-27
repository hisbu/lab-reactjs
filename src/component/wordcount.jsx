import React, {Component} from 'react';
import {Input } from 'reactstrap';
import { connect } from 'react-redux'
import { CountWord, CountChar } from './../redux/actions/wordsAction'



class wordCount extends Component{
    state={
        text : null,
        count: 0,
        countChar: 0
    }

    handleOnChangeTextArea = () =>{
        var textArea = this.refs.input.refs.inputInner.value
        var word= textArea.split(' ')
        // console.log(word.length)
        var hasilFilter = word.filter((val)=>{
            return val !== ""
        })

        
        //menggunakan RegEx
        var regex = /\s+/gi;
        var wordCount = textArea.trim().replace(regex, ' ').split(' ').length;
        var charCount = textArea.trim().replace(regex, ' ').split(' ').join('').length;
        console.log(wordCount)
        
        this.setState({count: wordCount})
        this.setState({countChar: charCount})

        this.props.CountWord(wordCount)
        this.props.CountChar(charCount)
    }
    
    render(){
        return(

            <div className="container mt-4">
                <h1 style={{textAlign:"center"}}>Count Words App with Redux</h1>
                <center>
                    <Input type="textarea" ref="input" onChange={this.handleOnChangeTextArea} innerRef='inputInner' placeholder="enter words"></Input>

                    {/* <h1>{this.state.count > 0 && this.state.count <= 5 ? this.state.count + ' words ' : this.state.count > 5 ? 'kebanyakan oy' : null} </h1> */}
                    <h1>{this.props.count} Words</h1>
                    <p>{this.props.countChar} Character</p>
                </center>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.word.count,
        countChar: state.char.charCount
    }
}

export default connect(mapStateToProps, {CountWord, CountChar})(wordCount);

