import React from "react";
import { checkAll } from "../index";
function scroll(offset: any, id: any) {
	const yOffset = offset;
	const element: any = document.getElementById(id);
	const y =
		element.getBoundingClientRect().top + window.pageYOffset + yOffset;
	window.scrollTo({ top: y, behavior: "smooth" });
}

const offset = -200;
export function scrollToTop() {
	window.scrollTo(0, 0);
}
export function scrollToContact() {
	try {
		scroll(offset, "contact");
		checkAll();
	} catch {}
}
export function scrollToAboutUs() {
	try {
		scroll(offset, "about");
		checkAll();
	} catch {}
}
export function scrollToRegister() {
	try {
		scroll(offset, "register");
		checkAll();
	} catch {}
}
let isActive = false;
function invertDropDownMenu() {
	const element: any = document.getElementById("dropdown");
	if (isActive) {
		element.style.animation = "dropExpand 1s forwards";
		isActive = false;
	} else {
		element.style.animation = "dropHide 1s forwards";
		isActive = true;
	}
}
function HeaderDropDown() {
	return (
		<div className="dropdown-div" id="dropdown">
			<div className="drop-exit-div" onClick={invertDropDownMenu} />
			<div className="dropdown-body">
				<svg
					onClick={invertDropDownMenu}
					className="menu"
					xmlns="http://www.w3.org/2000/svg"
					width="60"
					height="60"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="#000000"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<line x1="4" y1="6" x2="20" y2="6" />
					<line x1="4" y1="12" x2="20" y2="12" />
					<line x1="4" y1="18" x2="20" y2="18" />
				</svg>
				<div className="dropdown-link-div">
					<a
						href="/#"
						onClick={function () {
							scrollToTop();
							invertDropDownMenu();
						}}
					>
						Home
					</a>
					<a
						href="/#about"
						onClick={function () {
							invertDropDownMenu();
							scrollToAboutUs();
						}}
					>
						About Us
					</a>
					<a href="/register" onClick={invertDropDownMenu}>
						Register
					</a>
					{/* <a href='/staff' className='header-link' id='header-link'>Staff</a> */}
					<a
						href="/#faq"
						onClick={function () {
							invertDropDownMenu();
							scrollToContact();
						}}
					>
						Contact
					</a>
				</div>
			</div>
		</div>
	);
}
export function checkHeader() {
	const header: any = document.getElementById("drop-header");
	try {
		if (window.scrollY > 100) {
			header.style.animation = "headerComeIn 1s forwards";
			header.style.display = "flex";
		} else {
			header.style.animation = "headerComeOut 1s forwards"; // TODO fade out?
		}
	} catch {}
}
export default function Header() {
	function HeaderContent(props: any): any {
		return [
			<p className="header-name"></p>,
			<div className="header-links-div">
				<a href="/" onClick={scrollToTop} className="header-link">
					Home
				</a>
				<a
					href="/#about"
					onClick={scrollToAboutUs}
					className="header-link"
				>
					About Us
				</a>
				<a
					href="/register"
					className="header-link"
					id="header-register"
				>
					Register
				</a>
				{/* <a href='/staff' className='header-link' id='header-link'>Staff</a> */}
				<a
					href="/#faq"
					onClick={scrollToContact}
					className="header-link"
				>
					Contact
				</a>
			</div>,
			<svg
				onClick={invertDropDownMenu}
				className="header-menu-img"
				xmlns="http://www.w3.org/2000/svg"
				width="60"
				height="60"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke={props.menuColor}
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<line x1="4" y1="6" x2="20" y2="6" />
				<line x1="4" y1="12" x2="20" y2="12" />
				<line x1="4" y1="18" x2="20" y2="18" />
			</svg>,
		];
	}
	return (
		<div>
			<header>
				<HeaderContent menuColor="white" />
			</header>
			<header id="drop-header">
				<HeaderContent menuColor="black" />
			</header>
			<HeaderDropDown />
		</div>
	);
}
