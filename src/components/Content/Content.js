import React from "react"
import "./Content.css"

import Dashboards from "../Dashboards"

export default function Content(){
    return(
        <div class="container-fluid">
            {/* <!-- Page Heading --> */}
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <Dashboards />

        </div>

    )
}