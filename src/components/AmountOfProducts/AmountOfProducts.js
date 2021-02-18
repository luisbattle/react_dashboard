import React, { Component } from "react"
import QuantityOfUsers from "../QuantityOfUsers"
import "./AmountOfProducts.css"
const URL_API='http://localhost:3001/api/product/'

export default class AmountOfProducts extends Component{

    constructor(props){
        super(props);
        this.state={
            amount:0
        }
    }

/* 
    *ACUMULADOR
    TO-DO -> Setear un acumulador y iterar sobre price de cada producto y acumular el total de productos en el state amount
*/
    componentDidMount(){
        fetch(URL_API)
        .then( res => res.json())
        .then( (response) =>{ 
            const items = response.products
            items.map(item =>{
                this.setState({
                    amount:this.state.amount+item.price
                })
            })
        }
            )
        .catch( error => console.log(error))
    }



    render() {
        return(
            <div className="col-md-4 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Products in Data Base $</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">${this.state.amount}</div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
        }
}

AmountOfProducts.defaultProps = {
    quantity :"N/A"
}