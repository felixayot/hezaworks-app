/* eslint-disable */
// @ts-nocheck

import {FooterContainer, Title, Wrapper, Column, Row, FooterLink} from '../styles/Footer.styles'
import Icon from './Icons'

function Footer() {
  return (
    <FooterContainer>
      <Wrapper>
        <Row>
        <Column>
        <Title>For Employers</Title>
        <FooterLink to="/#">How to Hire</FooterLink>
        <FooterLink to="/#">Pricing</FooterLink>
        </Column>
        <Column>
        <Title>For Job seekers</Title>
        <FooterLink to="/#">How to Find Work</FooterLink>
        <FooterLink to="/#">Pricing</FooterLink>
        </Column>
        <Column>
        <Title>HezaWorks</Title>
        <FooterLink to="/#">About Us</FooterLink>
        <FooterLink to="/#">FAQs</FooterLink>
        </Column>
        <Column>
        <Title>Contact Us</Title>
        <FooterLink to="/#"><Icon className="fa-brands fa-whatsapp" />WhatsApp</FooterLink>
        <FooterLink to="/#"><Icon className="fa-brands fa-instagram" />Instagram</FooterLink>
        <FooterLink to="/#"><Icon className="fa-brands fa-facebook" />Facebook</FooterLink>
        <FooterLink to="/#"><Icon className="fa-brands fa-linkedin" />LinkedIn</FooterLink>
        <FooterLink to="/#"><Icon className="fa-brands fa-youtube" />YouTube</FooterLink>
        </Column>
        {/* <Column>
        <Title>Developers</Title>
        <FooterLink to="https://linkedin.com/in/felixayot" target="_blank"><Icon className="fa-brands fa-linkedin" />LinkedIn</FooterLink>
        <FooterLink to="https://github.com/felixayot" target="_blank"><Icon className="fa-brands fa-github" />GitHub</FooterLink>
        <FooterLink to="mailto:ariscladconsult@gmail.com"><Icon className="fa-regular fa-envelope" />Email</FooterLink>
        </Column> */}
        <Column>
        <Title>Terms and Conditions</Title>
        <FooterLink to="/privacypolicy" target="_blank"><Icon className="fa-solid fa-shield-halved" />View Terms and Conditions</FooterLink>
        </Column>
        </Row>
        </Wrapper>
      </FooterContainer>
  )
}

export default Footer
