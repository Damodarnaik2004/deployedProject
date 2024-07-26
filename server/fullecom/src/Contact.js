import React from 'react'
import styled from 'styled-components'
const auth = localStorage.getItem('user');
const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>Fell Free to Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10937.142379327857!2d79.42696769320071!3d13.61612129432022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1690185670933!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

       <div className="container">
        <div className="contact-form">
            
          <form action='https://formspree.io/f/xwkdpano' method='post' className='contact-inputs'>
            <input type='text'
                   name='UserName'
                   placeholder='username'
                   required
                   autoComplete='off'
                   value={`Name :  ${JSON.parse(auth).username}`}
                   /// here for third party apps like form doest need attribute of value 
                   /// it can work with name variable also
                   />
            <input type='email'
                   name='Email'
                   placeholder='email'
                   autoComplete='off'
                   required
                   value={`Email :  ${JSON.parse(auth).email}`}
                   />
            <textarea name='Message'
                      cols='30'
                      rows='10'
                      required
                      autoComplete='off'
                      placeholder='Enter your message'></textarea>
                       

            <input type='submit' value='Send'/>
          </form>
        </div>
       </div>


    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;


export default Contact