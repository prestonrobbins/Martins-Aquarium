import {locationArray} from "./location-list.js"
    

export const locationSend = (hippo) => {
    return `
    <div class = "location-section">
        <div class = "lo-top">
		<h3 class = "Lo-heading">${hippo.name}</h3>
        </div>
        <div class = "lo-drop">
        <p class = "lo-tip">${hippo.tip} </p>
        <p class = "lo-cost">${hippo.cost} </p>
        </div>
        </div>
        `;}
