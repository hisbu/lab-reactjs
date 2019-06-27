import React from 'react'
// import {Link} from 'react-router-dom'
// import Header from './component/header'
import { connect } from 'react-redux' //untuk menghubungkan content dengan global state
import { Add, Min } from './redux/actions/countAction'


class reduxpage extends React.Component{

    onBtnAddClick=() => {
        this.props.Add()
    }

    onBtnMinClick=() => {
        this.props.Min()
    }
    render(){
        console.log(this.props.count)
        // console.log(this.mapStateToProps.count)
        return(
            <div>
                {/* <Header/> */}
                
                <div className="container">
                <h1 style={{textAlign:"center"}}>Ini page redux</h1>
                <hr></hr>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-outline-primary' style={{width:"60px", height:"60px"}} onClick={this.onBtnMinClick}>-</button>
                <span className='ml-3 mr-3 text-center' style={{width:"60px", height:"60px", fontWeight:"bolder", fontSize:"30px"}}>{this.props.count}</span>
                <button className='btn btn-outline-primary' style={{width:"60px", height:"60px"}} onClick={this.onBtnAddClick}>+</button>
            </div>
            </div>
            </div>
            
            )
            
    }
}
const mapStateToProps = (state) => {
    return{
        count : state.angka.count //,,, Nilai diambil dari reducer/index.js
    }
}

export default connect(mapStateToProps, {Add, Min})(reduxpage)