import React from "react"


const EmptyItems = ({ message }) => {

    return (
        <div className="emptyItemsContainer" >
            <span className="errorMessage">{message}</span>
        </div>
    )
}
export default EmptyItems