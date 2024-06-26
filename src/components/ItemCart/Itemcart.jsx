import React from 'react'

const Itemcart = ({item}) => {
  return (
    <div>
      <h3>{item.nombre}</h3>
      <img src={item.imagen}></img>
      <p>{item.precio}</p>
      <p>{item.cuantity}</p>
      <button type="button" className="btn btn-info" onClick={()=>console.log("borrar")}>Borrar</button>

    </div>
  )
}

export default Itemcart;