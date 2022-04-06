import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>LET'S WORK TOGETHER</LinkTitle>
          <LinkItem href="awazgyawali@gmail.com">
            awazgyawali@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan>Inspired by Enyel Sequeira</Slogan> */}
        </CompanyContainer>
        <SocialIcons href="https://github.com/awazgyawali">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://np.linkedin.com/in/aawaz">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
