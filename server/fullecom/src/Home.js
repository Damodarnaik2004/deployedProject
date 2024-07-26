import React from 'react'
import styled  from 'styled-components'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProducts from './components/FeatureProducts';


const Home = () => {
 
  const name='Dstore';
 
  return (
     <>
     <HeroSection name={name} />
     <FeatureProducts/>
     <Services />
     <Trusted />
   </>
  )
}

const Wrapper=styled.section`
  background-color:${({theme})=>theme.colors.bg};
 
`;
export default Home