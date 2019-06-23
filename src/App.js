import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from './component/button' ==> untuk export default di komponent
import {Button, InputComponent} from './component/button' // ==> export beberapa komponen dalam 1 file komponent
import ClassComp from './component/latihan'
import bebas from './component/childrenProps'

let buah=['apel',' mangga',' anggur']

class App extends React.Component {
  state={
    todo:['Makan']
  }

  onBtnAddClick=()=>{
    this.setState({todo: [this.refs.todo.value]}) //this.setStste > untuk merubah isi state || this.refs >> (virtual dom react) fungsi sepert InnerHtml pada DOM
  }

  componentWillMount(){
    //Ke triger sebelum render pertama
    console.log('Ini willmount')
  }

  componentDidMount(){
    //ke triger setelah render pertama
    console.log('Ini Didmount')

  }

  componentWillUpdate(){
    //ke triger setelah ada perubahan state, sebelum re render
    console.log('ini willupdate')
  }

  componentDidUpdate(){
    //ke triger seltelah ada perubahan state, setelah re render
    console.log('ini DidUpdate')
  }
  render(){
    console.log('ini render')
    
    return (
      <div >
        <h1>{this.state.todo[0]}</h1>
        <input type="text" placeholder="Masukan todo" ref='todo'/>
        <input type="button" value='add' onClick={this.onBtnAddClick}/>


        {/* <h1>Hello world</h1>
        <Button/><br/>
        <InputComponent/>
        <ClassComp kata='coba saja'/>
        <ClassComp kata='siaaap'/>
        <ClassComp kata={buah}/>
        <ClassComp>
          ini props dari ClassComp
        </ClassComp>
        {this.props.nama}
        <bebas>
         <br></br> ini props dari children
        </bebas>
        <bebas anak='coba saja'/> */}
        
      </div>
    );

  }
}

export default App;
