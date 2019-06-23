import React from 'react'
import {Table, Input} from 'reactstrap'
import ReactDOM from 'react-dom';
import ModalTest from './component/modalTest'


class Todo extends React.Component{
    state={
        data:[]
    }

    onBtnAddClick=()=>{
        let todo = this.refs.vTodo.value
        let waktu = this.refs.vDate.value
        var arr=[]
        var obj={
            todo,
            waktu:waktu
        }
        arr.push(obj)
        this.setState({data:this.state.data.concat(arr)})
        
    }

    

    formAdd=()=>{
        return(
            <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-4">
                                <input className="form-control" ref="vTodo" type="text" placeholder="Masukan Todo" />
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" ref="vDate" type="date" id="tanggal"/>
                            </div>
                            <div className="col-md-4">
                                <input type="button" className="btn btn-success btn-block" onClick={this.onBtnAddClick} value="Add"/>
                            </div>
                        </div>
                    </div>
        )
    }

    printDataTodo=()=>{
        var jsx=this.state.data.map((val,index)=>{
            return(
                <tr>
                    <td>{index+1}{this.props.id}</td>
                    <td>{val.todo}</td>
                    <td>{val.waktu}</td>
                    <td><input type="button" className='btn btn-primary' value="Edit" onClick={()=>{this.obBtnEdit(index);}}/> </td>
                    <td><input type="button" className="btn btn-danger" value="Delete" onClick={()=>{this.onBtnDeleteClick(index);}}/></td>
                </tr>
            )
        }
        )
        return jsx
    }

    obBtnEdit=(index)=>{
        var newTodo=prompt('ganti todo', this.state.data[index].todo)
        var newDate=prompt('Edit Date',this.state.data[index].waktu)
        let data = [...this.state.data];

        data[index] = {...data[index], todo: newTodo}
        data[index] = {...data[index],waktu:newDate}
        this.setState({data})


        // this.setState(this.state.data.todo=newTodo)
            
        this.printDataTodo()
        console.log(this.state.data[index].todo)
        // alert(index)
    }

    onBtnDeleteClick=(index)=>{
        // alert(this.state.data[index])
        // return(
        //     this.setState.data.splice(index,1)
        // )
        this.state.data.splice(index,1)
        this.setState({data:this.state.data})
        // console.log(this.state.data)
    }

    

    render(){
        console.log(this.state.data)
        return(
            <center>
                <div>
                    <h1>Crud Todo Apps</h1>
                    <div className="container">
                    <Table>
                        <thead>
                            <tr>
                                <td>No</td>
                                <td>Todo</td>
                                <td>Waktu</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.printDataTodo()}
                        </tbody>
                    </Table>
                    </div>
                        <div ref="inputData" id="inputData">
                        {this.formAdd()}

                        </div>
                </div>
                
            </center>
        )
    }
}

export default Todo;