import {useRef, useState, useEffect} from "react";
import './Home.css';

function Home(){
    const array = ["SOFTWARE DEVELOPER", "MERN STACK DEVELOPER"]
    const [displayedText,setDisplayedText] = useState("");
    const [isDeleting,setDeleting] = useState(false);
    const [index,setIndex] = useState(0);
    useEffect(() => {
        const handleTyping = ()=>{
            if(isDeleting){
                if(displayedText.length > 0){
                    setDisplayedText((prev) => prev.slice(0,-1));
                }
                else{
                    setIndex((index+1)% array.length);
                    setDeleting(false);
                }
            }
            else{
                if(displayedText.length < array[index].length){
                    setDisplayedText((prev) => prev + array[index].charAt(displayedText.length));
                }
                else{
                    setDeleting(true);
                }
            }
        };
        const timeout = setTimeout(handleTyping, isDeleting?50:100)

        return() => clearTimeout(timeout);
    },[displayedText,isDeleting,index])
    return(
        <div className="home" id='Home'>
            <div className="home-left">
                <div className='icons'>
                    <a href="https://github.com/rushil-118" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/></svg> 
                    </a>
                    <a href="https://www.linkedin.com/in/rushil-choudhary-630292290/" target="_blank" rel="noreferrer" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.64"><rect width="512" height="509.64" rx="115.61" ry="115.61"/><path fill="#fff" d="M204.97 197.54h64.69v33.16h.94c9.01-16.16 31.04-33.16 63.89-33.16 68.31 0 80.94 42.51 80.94 97.81v116.92h-67.46l-.01-104.13c0-23.81-.49-54.45-35.08-54.45-35.12 0-40.51 25.91-40.51 52.72v105.86h-67.4V197.54zm-38.23-65.09c0 19.36-15.72 35.08-35.08 35.08-19.37 0-35.09-15.72-35.09-35.08 0-19.37 15.72-35.08 35.09-35.08 19.36 0 35.08 15.71 35.08 35.08zm-70.17 65.09h70.17v214.73H96.57V197.54z"/></svg>                    
                    </a>
                    {/* <a href="https://twitter.com/" target="_blank" rel="noreferrer" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M640.012 121.513c-23.528 10.524-48.875 17.516-75.343 20.634 27.118-16.24 47.858-41.977 57.756-72.615-25.347 14.988-53.516 25.985-83.363 31.866-24-25.5-58.087-41.35-95.848-41.35-72.508 0-131.21 58.736-131.21 131.198 0 10.228 1.134 20.232 3.355 29.882-109.1-5.528-205.821-57.757-270.57-137.222a131.423 131.423 0 0 0-17.764 66c0 45.497 23.102 85.738 58.347 109.207-21.508-.638-41.74-6.638-59.505-16.359v1.642c0 63.627 45.225 116.718 105.32 128.718-11.008 2.988-22.63 4.642-34.606 4.642-8.48 0-16.654-.874-24.78-2.35 16.783 52.11 65.233 90.095 122.612 91.205-44.989 35.245-101.493 56.233-163.09 56.233-10.63 0-20.988-.65-31.334-1.89 58.229 37.359 127.206 58.997 201.31 58.997 241.42 0 373.552-200.069 373.552-373.54 0-5.764-.13-11.35-.366-16.996 25.642-18.343 47.87-41.493 65.469-67.844l.059-.059z"/></svg>
                    </a> */}
                    <a href="https://youtube.com/" target="_blank" rel="noreferrer" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M633.468 192.038s-6.248-44.115-25.477-63.485c-24.366-25.477-51.65-25.642-64.123-27.118-89.493-6.52-223.904-6.52-223.904-6.52h-.236s-134.352 0-223.893 6.52c-12.52 1.523-39.768 1.63-64.123 27.118-19.24 19.37-25.358 63.485-25.358 63.485S-.012 243.806-.012 295.681v48.509c0 51.768 6.366 103.643 6.366 103.643s6.248 44.114 25.358 63.52c24.355 25.477 56.363 24.65 70.655 27.367 51.237 4.89 217.644 6.366 217.644 6.366s134.529-.237 224.022-6.638c12.52-1.477 39.756-1.63 64.123-27.119 19.24-19.37 25.476-63.532 25.476-63.532S640 396.03 640 344.154v-48.508c-.13-51.769-6.497-103.643-6.497-103.643l-.035.035zm-379.8 211.007V223.173L426.56 313.41l-172.892 89.635z"/></svg>                    
                    </a>                    
                </div>
            </div>
            <div className='self-img'>
                <img src="https://media.licdn.com/dms/image/D4D03AQHQWHq4A2zxaQ/profile-displayphoto-shrink_800_800/0/1715864572954?e=1723075200&v=beta&t=TeZRNCSm_mzrBAmRarp3eiGleV8UdfXo8qTXLAynQQo" alt="self-img"/>
            </div>
            <div className="home-right">
                <div className='self-details'>
                    <h6>{displayedText}</h6>
                    <h1>Rushil Choudhary</h1>
                    <p></p>
                    <div className='buttons'>
                        <a>
                            <button className='cv'>Download CV</button>
                        </a>
                        <a>
                            <button className='contacts-btn'>Contact</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;