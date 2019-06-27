import React from 'react'
import {Table} from 'reactstrap'
// import ReactDOM from 'react-dom';
// import ModalTest from './component/modalTest'
// import {Link} from 'react-router-dom'
// import Header from './component/header'

class Todo extends React.Component{
    state={
        data:[],
        selectedEditState:null
    }

    onBtnAddClick=()=>{
        let vtodo = this.refs.vTodo.value
        let waktu = this.refs.vDate.value
        if(waktu==='' || vtodo[0]===' '){
            alert('semua field harus diisi')
        }else{
            var arr=[]
            var obj={
                todo:vtodo,
                waktu:waktu
            }
            arr.push(obj)
            this.setState({data:this.state.data.concat(arr)})
            
            this.refs.vTodo.value=""
            this.refs.vDate.value=''
        }
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
            if(this.state.selectedEditState===index){
                return(
                <tr key="index">
                <td>{index+1}{this.props.id}</td>
                <td><input type="text" ref="editTodo" className="form-control" defaultValue={val.todo}/></td>
                <td><input type="date" ref="editDate" className="form-control" defaultValue={val.waktu}/></td>
                <td><input type="button" className='btn btn-success' value="Update" onClick={()=>this.onBtnUpdate(index)}/> </td>
                <td><input type="button" className="btn btn-warning" value="Cancel" onClick={()=>this.setState({selectedEditState:null})}/></td>
                </tr>

                )
            }
            return(
                <tr>
                    <td>{index+1}{this.props.id}</td>
                    <td>{val.todo}</td>
                    <td>{val.waktu}</td>
                    <td align='center'><input type="button" className='btn btn-primary' value="Edit" onClick={()=>this.obBtnEdit(index)}/> </td>
                    <td align='center'><input type="button" className="btn btn-danger" value="Delete" onClick={()=>this.onBtnDeleteClick(index)}/></td>
                </tr>
            )
        }
        )
        return jsx
    }

    obBtnEdit=(index)=>{
       
       this.setState({selectedEditState:index})
        // var newTodo=prompt('ganti todo', this.state.data[index].todo)
        // var newDate=prompt('Edit Date',this.state.data[index].waktu)
        // let data = [...this.state.data];

        // data[index] = {...data[index], todo: newTodo}
        // data[index] = {...data[index],waktu:newDate}
        // this.setState({data})


        // this.setState(this.state.data.todo=newTodo)
            
        // this.printDataTodo()
        // console.log(this.state.data[index].todo)
        // alert(index)
    }

    onBtnUpdate=(index)=>{
        if(window.confirm('yakin akan melakukan perubahan data ini?')){

            var arr=this.state.data
            arr[index].todo = this.refs.editTodo.value
            arr[index].waktu = this.refs.editDate.value
    
            this.setState({data:arr, selectedEditState:null})
        }
    }

    onBtnDeleteClick=(index)=>{
        // alert(this.state.data[index])
        // return(
        //     this.setState.data.splice(index,1)
        // )
        
        if(window.confirm('Yakin data ini akan dihapus?'))
        {
            this.state.data.splice(index,1)
            this.setState({data:this.state.data})
        }
        // console.log(this.state.data)
    }

    

    render(){
        console.log(this.state.data)
        return(
            <center>
                {/* <Header/> */}
                <div>
                    <h1>Crud Todo Apps</h1>
                    <div className="container">
                    <Table className='table table-hover'>
                        <thead className='thead-dark'>
                            <tr>
                                <td>No</td>
                                <td>Todo</td>
                                <td>Waktu</td>
                                <td colSpan="2" align='center'>Action</td>
                            
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