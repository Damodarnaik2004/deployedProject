import { Button } from '../style.js/Button';
import React from 'react'
import { NavLink } from 'react-router-dom';
import  styled  from 'styled-components'

const HeroSection = ({name}) => {

  return (
   <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>Welcome to</p>
                    <h1>{name}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit veritatis reprehenderit fuga consequuntur aspernatur tempora hic aliquid rerum, repellendus maiores eos eum necessitatibus cum modi! Nihil aliquid minima explicabo sequi culpa? Accusantium labore, dolore quo alias adipisci nam nihil odit, sint officia quasi perspiciatis omnis aliquid, rerum et ea.</p>
                    <NavLink to='/products'>
                        <Button>Shop Now</Button>
                    </NavLink>
                </div>
                {/* our home page image */}
                <div className='hero-section-image'>
                    <figure>
                        <img src="/ecom.jpg" alt="hero-section-photo" className='img-style'/>
                    </figure>
                </div>
            </div>
        </div>
   </Wrapper>
  )
}

const Wrapper=styled.section`
 padding: 12rem 0;

img {
  min-width: 10rem;
  height: 10rem;
}

.hero-section-data {
  p {
    margin: 2rem 0;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
  }

  .intro-data {
    margin-bottom: 0;
  }
}

.hero-section-image {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  position: relative;

}
.img-style {
  width: 100%;
  height: auto;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid {
    gap: 10rem;
  }


}


`;
export default HeroSection