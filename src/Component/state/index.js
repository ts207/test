import React, {Component} from 'react'
import Card from '../card'
import Styles from '../../App.module.css'

class State extends Component{
    state={
        name:"ene bol state iin name gedeg huvisagchtai object yma",
        zurag: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
        type: true,
        number:9999,    
        null:null,
        arr:[{
            title:"test@gmaial.com",
            des:"99292929",
            img:"https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
            css:Styles.box
        }
    ]
    }
    
    render(){
        console.log(this.state)
        return(
            <div className={Styles.grid}>
                {this.state.arr.map((props)=>{
                    return(
                       <Card
                       title={props.title}
                       des={props.des}
                       img={props.img}
                       style={props.css}
                       
                       />
                    )
                })}
                
            </div>
        )
    }
}
export default State 