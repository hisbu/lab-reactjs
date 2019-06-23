import React from 'react'

/*KEUNGGULAN CLASS COMPONENT :
 > LIFECYCLE METHODE
 > STATE MANAJEMEN
*/

class Latihan extends React.Component{
    render(){
        return(
            <div>
                {this.props.kata}
            </div>
        )
    }
}



export default Latihan;