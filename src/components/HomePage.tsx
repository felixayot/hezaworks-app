/* eslint-disable */
// @ts-nocheck

import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HomePh from "../assets/home-image.jpg";
import { HomeButton, HomeContainer, HomeDescription, HomeImage, HomeTitle, HomeLink, ItemTitle } from "../styles/HomePage.styles";
import Icon, { HomeIcon } from "./Icons";

function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "HezaWorks | Home";
  }, []);

  return (
    <>
      <Outlet />
      <HomeContainer>
        <HomeTitle>Join the biggest professional community at HezaWorks</HomeTitle>
        <HomeDescription>Find talent and get hired for your talent today<br /><br />
          <HomeButton onClick={() => navigate("/signup")}>{/*<HomeLink to="/signup">*/}Get started{/*</HomeLink>*/}</HomeButton>
        </HomeDescription>
        <HomeImage src={ HomePh} ></HomeImage>
      </HomeContainer>
      <HomeContainer>
        <div>
        <ItemTitle><HomeIcon className="fa-solid fa-list" />Our Services</ItemTitle>
        <HomeDescription>Find talent and get hired for your talent today
        <br /><br />
          <HomeButton><HomeLink to="#">Learn more</HomeLink></HomeButton>
          </HomeDescription>
        </div>
        <div>
      <ItemTitle><HomeIcon className="fa-solid fa-gift" />Our Offers</ItemTitle>
      <HomeDescription>Find talent and get hired for your talent today
      <br /><br />
        <HomeButton><HomeLink to="#">Learn more</HomeLink></HomeButton>
      </HomeDescription>
      </div>     
      </HomeContainer>

      <HomeContainer>
      <div>
      <ItemTitle>About Us</ItemTitle>
      <HomeDescription>Find talent and get hired for your talent today
        </HomeDescription>
        </div>
        <div>
        <ItemTitle>Our Mission</ItemTitle>
        <HomeDescription>Find talent and get hired for your talent today
        </HomeDescription>
        </div>
        <div>
        <ItemTitle>Our Vision</ItemTitle>
        <HomeDescription>Find talent and get hired for your talent today
        </HomeDescription>
        </div>
      </HomeContainer>
    </>
  );
}

export default HomePage;
