import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import HomePh from "../assets/home-image.jpg";
import { HomeButton, HomeContainer, HomeDescription, HomeImage, HomeTitle, HomeLink } from "../styles/HomePage.styles";

function HomePage() {
  useEffect(() => {
    document.title = "HezaWorks - Home Page";
  }, []);

  return (
    <>
      <Outlet />
      <HomeContainer>
        <HomeTitle>Join the biggest professional community at HezaWorks</HomeTitle>
        <HomeDescription>Find talent and get hired for your talent today
          <HomeButton><HomeLink to="/signup">Get started</HomeLink></HomeButton>
        </HomeDescription>
        <HomeImage src={ HomePh} ></HomeImage>
      </HomeContainer>
      <HomeContainer>
        <HomeTitle>Our Services
        <HomeDescription>Find talent and get hired for your talent today
          <HomeButton><HomeLink to="#">Learn more</HomeLink></HomeButton>
        </HomeDescription>
      </HomeTitle>
      <HomeTitle>Our Offers
      <HomeDescription>Find talent and get hired for your talent today
        <HomeButton><HomeLink to="#">Learn more</HomeLink></HomeButton>
      </HomeDescription>
      </HomeTitle>
      </HomeContainer>
      <HomeContainer>
      <HomeTitle>About Us
      <HomeDescription>Find talent and get hired for your talent today
        </HomeDescription>
      </HomeTitle>
        <HomeTitle>Our Mission
        <HomeDescription>Find talent and get hired for your talent today
        </HomeDescription>
        </HomeTitle>
        <HomeTitle>Our Vision
        <HomeDescription>Find talent and get hired for your talent today
        </HomeDescription>
        </HomeTitle>
      </HomeContainer>
    </>
  );
}

export default HomePage;
