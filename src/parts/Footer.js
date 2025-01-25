import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.section`
  background-color: var(--secondary-bg-color);
  padding: 25px 0;
  text-align: center;

  p {
      margin: 0;
  }

  a {
      text-decoration: none;
  }
`
const Footer = () => {
    return (
        <FooterWrap>
            <div className="wrapper">
                <p>Developed with 💗 by <a href="https://www.instagram.com/blessingbanda01/" target="_blank" rel="noreferrer">BB</a>, Code on <a href="#" target="_blank" rel="noreferrer">BBwebsite</a></p>
            </div>
        </FooterWrap>
    )
}


export default Footer;
