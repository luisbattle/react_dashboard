import React, {Component} from "react"
import AmountOfProducts from "../AmountOfProducts"
import QuantityOfProducts from "../QuantityOfProducts"
import QuantityOfUsers from "../QuantityOfUsers"

export default class Dashboards extends Component{


    componentDidMount(){
        console.log("componentDidMount")
    }
    componentDidUpdate(){
        console.log("componentDidUpdate")

    }
        render(){
            return(
            <div className="row">
                <AmountOfProducts amount="2.300.000"/>
                <QuantityOfProducts quantity="540"/>
                <QuantityOfUsers  quantity="22"/>
            </div>
        )
    }
}