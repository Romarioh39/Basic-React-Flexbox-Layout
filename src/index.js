import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

class TopDog extends React.Component{
    render(){
        return(
            <div className="main-cont">
                <div className="top">
                    <h1 className="title">Hot Dogs</h1>
                </div>    
                <div className="content">
                    <div className="c1 left" >
                        <h3>Hit me with the left</h3>
                    </div>
                    <div className="c1 right" >
                        <h3>Hit me with the right</h3>
                    </div>
                </div>    
                <div className="bottom">
                    <h4>By Romario</h4>
                </div>               
            </div>
        )
    }
}

ReactDOM.render(<TopDog/>, document.getElementById('root'))