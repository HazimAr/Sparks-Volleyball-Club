/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-empty */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect } from "react";

function scroll(offset: number, id: string) {
	const yOffset = offset;
	const element: HTMLDivElement | null = document.querySelector(`#${id}`);
	if (element !== null) {
		const y =
			element.getBoundingClientRect().top + window.pageYOffset + yOffset;
		window.scrollTo({ top: y, behavior: "smooth" });
	}
}
const elementsToCheck: string[][] = [
	// [elementID, animation] set id to visibility:hidden and position:relative in CSS
	["about-img-1", "imgBlowUp 1.5s"],
	["row-0", "slideFromLeft 1.5s"],
	["about-img-2", "imgBlowUp 1.5s"],
	["row-1", "slideFromRight 1.5s"],
	["register-img", "slideFromRight 1.5s"],
	["register-text", "slideFromLeft 1.5s"],
	["faq-left", "slideFromLeft 1.5s"],
	["faq-middle", "onScrollFade 1.5s"],
	["faq-right", "slideFromRight 1.5s"],
	["contact", "onScrollFade 1.5s"],
];
const checkElement = function (
	array: string[][] | number[][],
	iteration: number
) {
	const offset = window.innerHeight + -200; // px away from bottom of screen to trigger animation
	if (window.scrollY + offset > array[iteration][2]) {
		const ele: HTMLDivElement | null = document.querySelector(
			`#${array[iteration][0]}`
		);
		if (ele !== null) {
			ele.style.visibility = "visible";
			ele.style.animation = String(array[iteration][1]);
		}
		return array.splice(iteration, 1);
	}
};

const checkFadeElements = function (array: string[][]) {
	if (array.length > 0) {
		checkElement(array, 0);
	}
};

export function checkAll(): void {
	const len = elementsToCheck.length;
	for (let i = 0; i < len; i++) {
		checkFadeElements(elementsToCheck);
	}
}

const offset = -200;
export function scrollToTop(): void {
	window.scrollTo(0, 0);
}
export function scrollToContact(): void {
	try {
		scroll(offset, "contact");
		checkAll();
	} catch {}
}
export function scrollToAboutUs(): void {
	try {
		scroll(offset, "about");
		checkAll();
	} catch {}
}
export function scrollToRegister(): void {
	try {
		scroll(offset, "register");
		checkAll();
	} catch {}
}
let isActive = false;
function invertDropDownMenu() {
	const element: HTMLDivElement | null = document.querySelector("#dropdown");
	if (element !== null) {
		if (isActive) {
			element.style.animation = "dropExpand 1s forwards";
			isActive = false;
		} else {
			element.style.animation = "dropHide 1s forwards";
			isActive = true;
		}
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
						onClick={() => {
							scrollToTop();
							invertDropDownMenu();
						}}
					>
						Home
					</a>
					<a
						href="/#about"
						onClick={() => {
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
						onClick={() => {
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
export function checkHeader(): void {
	const header: HTMLDivElement | null = document.querySelector(
		"#drop-header"
	);
	if (header !== null) {
		try {
			if (window.scrollY > 100) {
				header.style.animation = "headerComeIn 1s forwards";
				header.style.display = "flex";
			} else {
				header.style.animation = "headerComeOut 1s forwards"; // TODO fade out?
			}
		} catch {}
	}
}

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
	useEffect(() => {
		window.addEventListener("scroll", checkHeader);
	}, []);
	function HeaderContent(props: { menuColor: string }): JSX.Element {
		return (
			<>
				<p className="header-name"/>
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
					<a
						href="/register"
						className="header-link"
					>
						Summer Camp
					</a>
					{/* <a href='/staff' className='header-link' id='header-link'>Staff</a> */}
					<a
						href="/#faq"
						onClick={scrollToContact}
						className="header-link"
					>
						Contact
					</a>
				</div>
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
				</svg>
			</>
		);
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
