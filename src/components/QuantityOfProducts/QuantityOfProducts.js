import React, { Component } from "react"
import "./QuantityOfProducts.css"
const URL_API='http://localhost:3001/api/product/'

export default class QuantityOfProducts extends Component{

    constructor(props){
        super(props);
        this.state={
            quantity:null
        }
    }

    componentDidMount(){
        fetch(URL_API)
        .then( res => res.json())
        .then( (response) =>{ 
            this.setState({
                quantity:response.meta.count
            })
        }
            )
        .catch( error => console.log(error))
    }

    render() {return(
        <div className="col-md-4 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Quantity of products</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.quantity}</div>
                    </div>
                    <div className="col-auto">
                        <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }
}
