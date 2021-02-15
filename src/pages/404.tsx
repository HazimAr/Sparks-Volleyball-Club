import React from 'react'
import Image from 'next/image'

export default function PageNotFound() {
    return (
        <div className='FourZeroFour-div'>
            <Image width={373} height={241} src='/Images/404.png' className='FourZeroFour-img' alt="rip taco" />
			<Image width={800} height={600} src='/Images/taco.gif' className='FourZeroFour-img2'  alt="404" />
            <h3 className="FourZeroFour-Header">THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST</h3>
            <p className="FourZeroFour-Text">
                (Unless you were looking for a page with an animation of a taco
                <br/>
                tripping and literally spilling the beans. If that's the case, it
                <br/>
                definitely exists, and you definitely found it.)</p>
            <a id='fof-button' className='intro-button' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">Go Home</a>
        </div>
    )
}