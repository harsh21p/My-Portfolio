import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"


// import Swiper core and required modules
import {  Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel laboriosam reprehenderit voluptatum ut sed vitae in. Quas adipisci explicabo, corporis aspernatur cupiditate tenetur dolorum voluptatum necessitatibus maiores exercitationem ipsam. Commodi Lorem ipsum dolor, sit amet consectetur.'

  },
  {
    id: 2,
    image: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel laboriosam reprehenderit voluptatum ut sed vitae in. Quas adipisci explicabo, corporis aspernatur cupiditate tenetur dolorum voluptatum necessitatibus maiores exercitationem ipsam. Commodi. Lorem ipsum dolor, sit amet consectetur.'
  },
  {
    id: 3,
    image: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel laboriosam reprehenderit voluptatum ut sed vitae in. Quas adipisci explicabo, corporis aspernatur cupiditate tenetur dolorum voluptatum necessitatibus maiores exercitationem ipsam. Commodi. Lorem ipsum dolor, sit amet consectetur.'
  },
  {
    id: 4,
    image: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel laboriosam reprehenderit voluptatum ut sed vitae in. Quas adipisci explicabo, corporis aspernatur cupiditate tenetur dolorum voluptatum necessitatibus maiores exercitationem ipsam. Commodi. Lorem ipsum dolor, sit amet consectetur.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      {
        data.map(({id, image, name, review}) => {
          return (
        <SwiperSlide key={id} className="testimonial">
          <div className="client__avatar">
            <img src={image} alt="Avatar One"/>
          </div>
          <h5 className="client__name">{name}</h5>
            <small className="client__review">
              {review}
             
            </small>
        </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials