import React, { Component} from 'react'
import {Input, Spinner} from 'reactstrap'
import Axios from 'axios'
const url = 'https://x.rajaapi.com/MeP7c5neRZPPYYYeRvsoXaByj8v52nAfAvwm2BYhRdf4soquXNE7729t1F/m/wilayah/'

class Wilayah extends Component{
    state={
        provinsi:[],
        kabupaten:[],
        loadingKabupaten: true
    }

    componentDidMount(){
       Axios.get(url + 'provinsi')
       .then((res) =>{
           console.log(res.data)
           this.setState({provinsi: res.data.data})
       })
       .catch((err) => {
           console.log(err)
       })
    }

    renderDataProvinsi = () => {
        var jsx = this.state.provinsi.map((val) => {
            return (
                <option value={val.id}>{val.name}</option>
            )
        })

        return jsx
    }

    handleOnClickKabupaten = () => {

        var id = this.refs.prov.refs.provinsiInner.value
        if(id >0){
            Axios.get(url + 'kabupaten?idpropinsi='+id)
            .then((res)=>{
                this.setState({kabupaten: res.data.data, loadingKabupaten: false})
            })
            .catch((err) => {
                console.log(err)
            })

        }
        // alert(id)
    }

    handleOnChangeProv = () => {
        this.setState({loadingKabupaten : true})
    }

    renderDataKabupaten = () => {
        if(this.state.loadingKabupaten === true){
            return (
                <option>Loading ...</option>
            )
        }
        
        var jsx = this.state.kabupaten.map((val) => {
            return(
                <option> {val.name}</option>
                
            )
        })
        return jsx
        
    }
   
    render(){
        if(this.state.provinsi.length===0){
            return(
            <center className="m-5">
                <Spinner color="primary" />
            </center>
            )
        }
        return(
            <div className='container m-4'>
                <center><h1>API Wilayah Indonesia</h1></center>
                
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <Input type='select' ref='prov' innerRef="provinsiInner" onChange={this.handleOnChangeProv}>
                            <option>Pilih Provinsi</option> 
                            {this.renderDataProvinsi()}
                        </Input>
                    </div>

                    <div className='col-md-4'>
                        <Input type='select' onClick={this.handleOnClickKabupaten} ref='kab' innerRef='kabInner'>
                            <option value='0'>Pilih Kabupaten</option>
                            {this.renderDataKabupaten()}
                        </Input>
                    </div>

                    <div className='col-md-4'>
                        <Input type='select' onClick={this.handleOnClickKecamatan}>
                            <option>Pilih Kecamatan</option>
                            
                        </Input>
                    </div>
                </div>
            </div>
        )
    }
}

export default Wilayah;