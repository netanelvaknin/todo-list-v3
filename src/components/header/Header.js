import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components/macro";
import { mobile } from "../../utils/screen-sizes";

const HeaderStyle = styled.header`
  max-height: 10rem;
  text-align: center;
  padding-top: 2rem;
`;

const MainHeading = styled(Typography)`
  font-size: 4.8rem;
  color: ${(props) => props.theme.palette.text.primary};
  font-weight: 600;

  @media ${mobile} {
    font-size: 3.6rem;
  }
`;

const SubHeading = styled(Typography)`
  text-transform: uppercase;
  font-size: 1.6rem;
  color: ${(props) => props.theme.palette.text.secondary};
  font-weight: 600;
  letter-spacing: 1.1px;
`;

export const Header = () => {
  return (
    <HeaderStyle>
      <MainHeading variant="h1">Personal todo list</MainHeading>
      <SubHeading>Manage your tasks anytime, anywhere</SubHeading>
    </HeaderStyle>
  );
};

export default Header;
