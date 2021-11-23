import React from 'react'
import{Button} from "../../Styles/Button"
const Button = ({class,name}) => {
    return (
        <>
        <Button>
        <a href="" className={class}>{name}</a>
        </Button>
        </>
    )
}

export default Button
