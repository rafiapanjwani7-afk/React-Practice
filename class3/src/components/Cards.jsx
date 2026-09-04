import React from 'react'
import Card from './card'

 
const Cards = () => {
    let products=[
    {
        title:"Product 1",
        description:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5Qt-T7PQ2Cpm9ubwRLpVnJjC0d1rb8CCR_FywLQBDaXk3W06yPjmC3o&s=10"
    },{
        title:"Product 2",
        description:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5Qt-T7PQ2Cpm9ubwRLpVnJjC0d1rb8CCR_FywLQBDaXk3W06yPjmC3o&s=10"
    },{
        title:"Product 3",
        description:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5Qt-T7PQ2Cpm9ubwRLpVnJjC0d1rb8CCR_FywLQBDaXk3W06yPjmC3o&s=10"
    },{
        title:"Product 4",
        description:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5Qt-T7PQ2Cpm9ubwRLpVnJjC0d1rb8CCR_FywLQBDaXk3W06yPjmC3o&s=10"
    },{
        title:"Product 5",
        description:"This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5Qt-T7PQ2Cpm9ubwRLpVnJjC0d1rb8CCR_FywLQBDaXk3W06yPjmC3o&s=10"
    }
 ]
    return (
        <>
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">

                     {
                    products.map(function(product){
                        return <Card title={product.title} img={product.img} desc ={product.desc} price ={product.price}/>
                        
                    })
                }
                        
 
                </div>
            </div>
        </>
    )
}

export default Cards
