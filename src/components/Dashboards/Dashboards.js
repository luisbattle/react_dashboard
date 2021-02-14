import React from "react"
import AmountOfProducts from "../AmountOfProducts"
import AllOfProducts from "../AllOfProducts"
import AmountOfUsers from "../AmountOfUsers"

export default function Dashboards(){
    return(
        <div className="row">
            <AmountOfProducts />
            <AllOfProducts />
            <AmountOfUsers />
        </div>
    )
}