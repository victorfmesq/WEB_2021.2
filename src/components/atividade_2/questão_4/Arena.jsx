import React from "react"

export default function Arena(props) {
    return (
        <div>
            <h1>Arena: {props.arena}</h1>

            {React.Children.map(props.children, Hero => {
                return React.cloneElement(Hero, { ...props });
            })}

            {React.Children.map(props.children, Enemy => {
                return React.cloneElement(Enemy, { ...props });
            })}
            
        </div>
    )
}