import { useState } from "react"

export default function BodyContent(props) {
    const [show , setshow] = useState(true);
    function HideContent() {
        console.log(show)
        setshow(!show);
    }
    return (
        <article>
            { show && <img src={props.img.src} alt={props.img.alt}/> }
            <div>
                <span>
                  <h5>{props.country}</h5>
                  <a href={props.googleMapsLink}>View the google map here</a> 
                </span>
                <h3>{props.title}</h3>
                <h5>{props.dates}</h5>
                <p>{props.text}.</p>
                <button onClick={HideContent}>{show ?'Hide':'Show'}</button>
            </div>
        </article>
    )
}