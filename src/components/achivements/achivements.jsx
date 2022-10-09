import React from 'react'
import "./achivements.css"
import AVTR1 from "../../assets/nciipc.png"
import AVTR2 from "../../assets/usdod.png"
import AVTR3 from "../../assets/scg.png"
import AVTR4 from "../../assets/exmo.png"
import AVTR5 from "../../assets/ceh1.png"
import AVTR6 from "../../assets/olx.png"
import AVTR7 from "../../assets/wb.png"
import AVTR8 from "../../assets/urs.png"

import {  Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: AVTR5,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel laboriosam reprehenderit voluptatum ut sed vitae in. Quas adipisci explicabo, corporis aspernatur cupiditate tenetur dolorum voluptatum necessitatibus maiores exercitationem ipsam. Commodi Lorem ipsum dolor, sit amet consectetur.'

  },
  {
    id: 2,
    image: AVTR1,
    name: 'Shatta Wale',
    review: 'Got listed in top 15 security researchers in newsletter announced by government of India.'
  },
  {
    id: 3,
    image: AVTR2,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel laboriosam reprehenderit voluptatum ut sed vitae in. Quas adipisci explicabo, corporis aspernatur cupiditate tenetur dolorum voluptatum necessitatibus maiores exercitationem ipsam. Commodi. Lorem ipsum dolor, sit amet consectetur.'
  },
  {
    id: 4,
    image: AVTR8,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel laboriosam reprehenderit voluptatum ut sed vitae in. Quas adipisci explicabo, corporis aspernatur cupiditate tenetur dolorum voluptatum necessitatibus maiores exercitationem ipsam. Commodi. Lorem ipsum dolor, sit amet consectetur.'
  },
  {
    id: 5,
    image: AVTR3,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel laboriosam reprehenderit voluptatum ut sed vitae in. Quas adipisci explicabo, corporis aspernatur cupiditate tenetur dolorum voluptatum necessitatibus maiores exercitationem ipsam. Commodi. Lorem ipsum dolor, sit amet consectetur.'
  },
  {
    id: 6,
    image: AVTR4,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel laboriosam reprehenderit voluptatum ut sed vitae in. Quas adipisci explicabo, corporis aspernatur cupiditate tenetur dolorum voluptatum necessitatibus maiores exercitationem ipsam. Commodi. Lorem ipsum dolor, sit amet consectetur.'
  },
  {
    id: 7,
    image: AVTR7,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel laboriosam reprehenderit voluptatum ut sed vitae in. Quas adipisci explicabo, corporis aspernatur cupiditate tenetur dolorum voluptatum necessitatibus maiores exercitationem ipsam. Commodi. Lorem ipsum dolor, sit amet consectetur.'
  },
  {
    id: 8,
    image: AVTR6,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel laboriosam reprehenderit voluptatum ut sed vitae in. Quas adipisci explicabo, corporis aspernatur cupiditate tenetur dolorum voluptatum necessitatibus maiores exercitationem ipsam. Commodi. Lorem ipsum dolor, sit amet consectetur.'
  }
]

const Achivements = () => {
  
  return (
    <section id="achievements">
      <h5>Honors And Rewards</h5>
      <h2>Achievements</h2>

      <Swiper className="container achivements__container"
      modules={[ Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      {
        data.map(({id, image, name, review}) => {
          return (
        <SwiperSlide key={id} className="testimonial">
          <div className="achivement__thumb">
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
  );
};

export default Achivements