import styled from "styled-components";
import React from 'react'
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";


const Home = () => {

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  )
}

const Container = styled.main`
position: relative;
min-height: calc(100vh - 250px);
overflow-x: hidden;
display: block;
top: 70px;
padding: 0 calc(3.5vw + 5px);

&:after{
  background: url("/images/home-background.png") center center / cover no-repeat fixed;
  content: '';
  position: absolute;
  z-index: -1;
  opacity: 1;
  inset: 0px;
}
`;

export default Home