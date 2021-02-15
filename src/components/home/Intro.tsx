import React from "react";
import Image from "next/image";

import { scrollToAboutUs } from "../head";


/* eslint-disable import/no-default-export */
export default function Intro(): JSX.Element {
	return (
        <div className='intro-div' id='home'>
            <div className='intro-inside-div'>
                <div className='intro-text-div'>
                    <h1>
                        We are Sparks
                        <br />
                        Volleyball Club
                    </h1>
                    <p onClick={scrollToAboutUs} className='intro-button'>Learn More</p>
                </div>
                <div className='intro-img-div'>
					<Image width={900} height={900} src='/Images/Sparks/Logos/Transparent-White.png' alt='' className='intro-img' />
                </div>
            </div>
        </div>
    )
}
