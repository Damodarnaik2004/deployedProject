import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/FilterContext'
import Pa from '../components/Pa'
import FormatPrice from '../helpers/FormatPrice'
import {Button} from '../style.js/Button'
const FilterSection = () => {

  /// here we are using filter_products for left side view 
  /// and all_products for category showing 
  /// in real both carry same data

  const {all_products,filters:{text,category,price,maxPrice,minPrice},updateFilterValue,clearFilters}=useFilterContext();


  //geting uniquee data
  const getUniqueData=(data,property)=>{
     let newVal=data.map((curElem)=>{
      return curElem[property];
     })
   return newVal=['All',...new Set(newVal)] 
    
  }

   
   // we need uniqee data to dispalay category
   const categoryOnlyData=getUniqueData(all_products,"category");
    
   // to get company data
   const companyData=getUniqueData(all_products,"company");
   
  
  return (
    <Wrapper>
      <div className='filter-search'>
        <form onSubmit={(e)=>e.preventDefault()}>
          <input 
          type="text"
          name='text'
          value={text}
          onChange={updateFilterValue}
          placeholder='search'
          />
        </form>
        </div>
        {/* <h3>Category</h3>
        
        {
            filter_products.map((curElem)=>{
              return <Pa curElem={curElem}/>
            })
        } */}
         
         {/* <h3>Category</h3>
                   .... i did it .......
         {
          categoryOnlyData.map((curElem)=>{
            return <li>{curElem}</li>
          })
         } */}
        
        <div className="filter-category">
          <h3>Category</h3>
          <div>
          {
          categoryOnlyData.map((curElem,index)=>{
            return <button key={index} type='button' name='category' value={curElem}
             onClick={updateFilterValue}>{curElem}</button>
          })
         }
          </div>
        </div>



        {/* <h3>Company</h3>
                 ..... I tryed here
        <div className="sort-selection">
      <form action="#">
        <label htmlFor="sort"></label>
        <select
          name="sort"
          id="sort"
          className="sort-selection--style"
          >
            {
              companyData.map((curEelm)=>{
                return <option name='company' value={curEelm} onClick={updateFilterValue}>{curEelm}</option>
              })
          
            }
        </select>
      </form>
    </div> */}

    
       <div className="filter-company">
        <h3>Company</h3>
        <form action="#" >
          <select name='company' id="company" className='filter-company--select' onClick={updateFilterValue}>
            {
             companyData.map((curEelm,index)=>{
              return <option name='company' value={curEelm} key={index} >{curEelm}</option>
            })
            }
          </select>
        </form>
       </div>

      {/* range section */}
      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price}/>

        </p>
          <input type='range'
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue} />
      </div>

     
         {/* filterSection */}
         <div className="filter-clear">
          <Button className='btn' onClick={clearFilters}>Clear Filters</Button>
         </div>

         
      
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection