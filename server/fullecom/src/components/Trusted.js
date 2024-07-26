import React from 'react'
import styled from 'styled-components'
import {BsApple} from 'react-icons/bs'
import {SiAdidas} from'react-icons/si';
import { SiPuma } from "react-icons/si";
import { SiNike } from "react-icons/si";
import {SiDell} from 'react-icons/si'
const Trusted = () => {
    return (
        <Wrapper className='brand-section'>
           <div className='container'>
            <h3>Trusted By 1000+ Companies</h3>
            <div className='brand-section-slider'>
                {/* my 1 img */}
                <div className='slide'>
                    <BsApple className='icon'/>
                </div>
                <div className='slide'>
                    <SiAdidas className='icon'/>
                </div>
                <div className='slide'>
                    <SiPuma className='icon'/>
                </div>
                <div className='slide'>
                    <SiNike className='icon'/>
                </div>
                <div className='slide'>
                    <SiDell className='icon'/>
                </div>
            </div>
           </div>


        </Wrapper>
    )
}
const Wrapper=styled.section`

padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius:20%;
    background-color: #fff;
    color: #000;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }

`;
export default Trusted