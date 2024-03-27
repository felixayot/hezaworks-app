import React from 'react'
import {FooterContainer, Title, Wrapper, Column, Row, FooterLink} from '../styles/Footer.styles'
import Icon from './Icons'

function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <Row>
        <Column>
        <Title>For Employers and Clients</Title>
        <FooterLink to="/#">How to Hire</FooterLink>
        <FooterLink to="/#">Pricing</FooterLink>
        </Column>
        <Column>
        <Title>For Job seekers</Title>
        <FooterLink to="/#">How to Find Work</FooterLink>
        <FooterLink to="/#">Pricing</FooterLink>
        </Column>
        <Column>
        <Title>About Us</Title>
        <FooterLink to="/#">Mission</FooterLink>
        <FooterLink to="/#">Vision</FooterLink>
        </Column>
        <Column>
        <Title>Contact Us</Title>
        <FooterLink to="/#"><Icon className="fa-brands fa-whatsapp" />WhatsApp</FooterLink>
        <FooterLink to="/#"><Icon className="fa-brands fa-instagram" />Instagram</FooterLink>
        <FooterLink to="/#"><Icon className="fa-brands fa-facebook" />Facebook</FooterLink>
        <FooterLink to="/#"><Icon className="fa-brands fa-linkedin" />LinkedIn</FooterLink>
        <FooterLink to="/#"><Icon className="fa-brands fa-youtube" />YouTube</FooterLink>
        </Column>
        <Column>
        <Title>Developers</Title>
        <FooterLink to="/#"><Icon className="fa-brands fa-linkedin" />LinkedIn</FooterLink>
        <FooterLink to="/#"><Icon className="fa-brands fa-github" />GitHub</FooterLink>
        <FooterLink to="/#"><Icon className="fa-regular fa-envelope" />Email</FooterLink>
        </Column>
        </Row>
        </Wrapper>
      </FooterContainer>
  )
}

export default Footer
