import React, { Component } from "react"
import "./QuantityOfUsers.css"
const URL_API=`http://localhost:3001/api/users/`

export default class QuantityOfUsers extends Component{

    constructor(props){
        super(props);
        this.state={
            quantity:""
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

    render() {
        return(
        <div class="col-md-4 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity
                            </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{this.state.quantity}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-user-check fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

QuantityOfUsers.defaultProps = {
    quantity: "N/A"
}