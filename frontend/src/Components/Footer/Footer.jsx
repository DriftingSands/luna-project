import React from "react";
import {
  MainFooter,
  LeftFooter,
  FirstFooterLink,
  FooterLink,
  RightFooter,
  SocialIcon,
  CopyrightFooter,
  CopyrightLuna,
} from "./FooterStyles";
import facebooklogo from "../../assets/svgs/facebook.svg";
import twitterlogo from "../../assets/svgs/twitter.svg";
import googlepluslogo from "../../assets/svgs/googleplus.svg";
import instagramlogo from "../../assets/svgs/instagram.svg";

function Footer() {
  return (
    <MainFooter>
      <LeftFooter>
        <FirstFooterLink href="#">About Us</FirstFooterLink>
        <FooterLink href="#">Press</FooterLink>
        <FooterLink href="#">Blog</FooterLink>
        <FooterLink href="#">iOS</FooterLink>
        <FooterLink href="#">Android</FooterLink>
      </LeftFooter>
      <RightFooter>
        <SocialIcon href="https://www.facebook.com/">
          <img src={facebooklogo} width="40" height="40" alt="Facebook" />
        </SocialIcon>
        <SocialIcon href="https://twitter.com/">
          <img src={twitterlogo} width="40" height="40" alt="Twitter" />
        </SocialIcon>
        <SocialIcon href="https://plus.google.com/">
          <img src={googlepluslogo} width="40" height="40" alt="Google Plus" />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/">
          <img src={instagramlogo} width="40" height="40" alt="Instagram" />
        </SocialIcon>
      </RightFooter>
      <CopyrightFooter>
        <CopyrightLuna>© Copyright Luna 2021</CopyrightLuna>
      </CopyrightFooter>
    </MainFooter>
  );
}

export default Footer;
