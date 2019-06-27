import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Button from './component/button' ==> untuk export default di komponent
// import {Button, InputComponent} from './component/button' // ==> export beberapa komponen dalam 1 file komponent
// import ClassComp from './component/latihan'
// import bebas from './component/childrenProps'
import Todo from './todo'
import { Route } from 'react-router-dom'
import Header from './component/header'
import ReduxPage from './reduxPage'
import WordCount from './component/wordcount'
import Wilayah from './component/apiWIlayah'

function Home(){
  return(
    <div>
      <center>
      
      <h1>Home</h1>
     
      
      </center>
    </div>
  )
}












// let buah=['apel',' mangga',' anggur']

class App extends React.Component {
  state={
    todo:['Makan']
  }

  onBtnAddClick=()=>{
    this.setState({todo: [this.refs.todo.value]}) //this.setStste > untuk merubah isi state || this.refs >> (virtual dom react) fungsi sepert InnerHtml pada DOM
  }

  componentWillMount(){
    //Ke triger sebelum render pertama
    // console.log('Ini willmount')
  }

  componentDidMount(){
    //ke triger setelah render pertama
    // console.log('Ini Didmount')

  }

  componentWillUpdate(){
    //ke triger setelah ada perubahan state, sebelum re render
    // console.log('ini willupdate')
  }

  componentDidUpdate(){
    //ke triger seltelah ada perubahan state, setelah re render
    // console.log('ini DidUpdate')
  }
  render(){
    // console.log('ini render')
    
    return (
      <div >
        <Header/>
        <Route path='/todo' component={Todo}/>
        <Route path='/' component={Home} exact/>
        <Route path='/reduxpage' component={ReduxPage}/>
        <Route path='/wordcount' component={WordCount}/>
        <Route path='/wilayah' component={Wilayah}/>
      </div>
    );

  }
}

export default App;
