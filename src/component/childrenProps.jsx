import React from 'react'

class ChildrenProps extends React.Component{
    render(){
        return(
            <div style={{backgroundColor: 'red', color:'white', width:'300px', fontWeight:"bold" }}>
            {this.props.anak}
            </div>
        )
    }
}




export default ChildrenProps;