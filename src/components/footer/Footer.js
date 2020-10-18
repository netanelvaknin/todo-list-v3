import React from "react";
import styled from "styled-components/macro";

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  font-size: 1.6rem;
  color: ${(props) => props.theme.palette.text.primary};
  background: #fff;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  font-weight: 500;
  align-items: center;
`;

export const Footer = () => {
  return <FooterStyle>Made by Netanel Vaknin</FooterStyle>;
};

export default Footer;
