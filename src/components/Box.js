import React from 'react'

export default function Box(props) {
    let imageDisplayed = ""
    if (props.image == "rock"){
        imageDisplayed = "https://images-na.ssl-images-amazon.com/images/I/61m9jG%2Bjj-L._AC_SX679_.jpg"
    }else if (props.image == "scissors"){
        imageDisplayed = "https://www.cchobby.com/media/catalog/product/cache/14/image/9df78eab33525d08d6e5fb8d27136e95/1/1/11196_1.jpg"
    }else if (props.image == "paper"){
        imageDisplayed = "https://cdn11.bigcommerce.com/s-xa92dr7qw8/images/stencil/1280x1280/products/1489/3361/Samples_Card_and_Paper__76320.1547129756.jpg?c=2&imbypass=on"
    }

    if (props.status == "tie"){
        return (
            <div className = {`box tie`}>
                <h2>{props.user}</h2>
                <img src= {imageDisplayed} alt = "" width = {200}/>
                <h3>Tie</h3>
            </div>
        )
    }
    if (props.status == "user"){
        if (props.user == "You"){
            return (
                <div className = {`box winner`}>
                    <h2>{props.user}</h2>
                    <img src= {imageDisplayed} alt = "" width = {200}/>
                    <h3>Winner</h3>
                </div>
            )
        }else if (props.user == "Computer"){
            return (
                <div className = {`box loser`}>
                    <h2>{props.user}</h2>
                    <img src= {imageDisplayed} alt = "" width = {200}/>
                    <h3>Loser</h3>
                </div>
            )
        }
    }
    if (props.status == "computer"){
        if (props.user == "You"){
            return (
                <div className = {`box loser`}>
                    <h2>{props.user}</h2>
                    <img src= {imageDisplayed} alt = "" width = {200}/>
                    <h3>Loser</h3>
                </div>
            )
        }else if (props.user == "Computer"){
            return (
                <div className = {`box winner`}>
                    <h2>{props.user}</h2>
                    <img src= {imageDisplayed} alt = "" width = {200}/>
                    <h3>Winner</h3>
                </div>
            )
        }
    }

   
}

