import React from "react";
import "./Sidebar.css"

export default function(props){
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
			{/*<!-- Sidebar - Brand -->*/}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>
			{/*<!-- Divider -->*/}
			<hr class="sidebar-divider my-0"></hr>
			{/*<!-- Nav Item - Dashboard -->*/}
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span></a>
			</li>
			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider"></hr>
			{/*<!-- Heading -->*/}
			<div class="sidebar-heading">Actions</div>
			{/*<!-- Nav Item - Pages -->*/}
			<li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Pages</span>
				</a>
			</li>
			{/*<!-- Nav Item - Charts -->*/}
			<li className="nav-item">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Charts</span></a>
			</li>

			{/*<!-- Nav Item - Tables -->*/}
			<li className="nav-item">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-table"></i>
					<span>Tables</span></a>
			</li>
			{/*<!-- Divider -->*/}
			<hr className="sidebar-divider d-none d-md-block"></hr>
		</ul>
    )
}