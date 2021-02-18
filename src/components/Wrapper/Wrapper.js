import React from "react"

import Sidebar from "../Sidebar"
import TopBar from "../TopBar"
import Content from "../Content"
import Footer from "../Footer"


export default function Wrapper(){
    return(
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
                <div id="content">
                    <TopBar />
                    <Content />
                </div>
                <Footer />
            </div>
        </div>
    )
}
