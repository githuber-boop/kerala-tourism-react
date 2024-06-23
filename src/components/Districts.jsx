import React from 'react'
import District from './District'
import '../styles/Districts.css'
// import Periyar from 'src/assets/images/periyar.jpg'


const Districts = () => {

    let districtDetails = [
        {
            district:"Thiruvantupuram",
            name:"Thiruvantupuram",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quibusdam amet, fugiat sint adipisci iste fuga accusamus nobis iusto! Itaque quis optio maxime magni aperiam libero molestias architecto, suscipit placeat!",
            image: 'src/assets/images/trivandrum.png'
        },
        {
            district:"Kottayam",
            name:"Kottayam",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quibusdam amet, fugiat sint adipisci iste fuga accusamus nobis iusto! Itaque quis optio maxime magni aperiam libero molestias architecto, suscipit placeat!",
            image:'src/assets/images/kottayam.png'
        },
        {
            district:"Ernakulam",
            name:"Ernakulam",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quibusdam amet, fugiat sint adipisci iste fuga accusamus nobis iusto! Itaque quis optio maxime magni aperiam libero molestias architecto, suscipit placeat!",
            image:'src/assets/images/ernakulam.png'
        },
        {
            district:"Kasargod",
            name:"Kasargod",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quibusdam amet, fugiat sint adipisci iste fuga accusamus nobis iusto! Itaque quis optio maxime magni aperiam libero molestias architecto, suscipit placeat!",
            image:'src/assets/images/kasargod.png'
        },
        {
            district:"Wayanad",
            name:"Wayanad",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quibusdam amet, fugiat sint adipisci iste fuga accusamus nobis iusto! Itaque quis optio maxime magni aperiam libero molestias architecto, suscipit placeat!",
            image:'src/assets/images/wayanad.png'
        },
        {
            district:"Palakad",
            name:"Palakad",
            description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quibusdam amet, fugiat sint adipisci iste fuga accusamus nobis iusto! Itaque quis optio maxime magni aperiam libero molestias architecto, suscipit placeat!",
            image:"src/assets/images/palakad.png"
        },
    ]   

  return (
    <section className="districts">
        <div className="container">
            <h1 className="title">OUR DISTRICTS</h1>
            <div className="districtsGrid">
                {districtDetails.map((district, index) => (
                    <District key={district.index} district={district}  districtDescription={district.description} districtImg={district.image} districtTitle={district.name}/>
                ))}
            </div>
        </div>

    </section>
  )
}

export default Districts