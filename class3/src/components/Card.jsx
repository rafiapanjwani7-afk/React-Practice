import React from 'react'

const Card = (props) => {
  return (
    <>
       <div class="col">
    <div class="card h-100">
      <img src={props.img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.desc}</p>
        <p class="card-text">{props.price}</p>
      </div>
    </div>
  </div>
    </>
  )
}

export default Card
