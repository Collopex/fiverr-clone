import React from 'react';
import {
  Featured,
  TrustedBy,
  CategoryCards,
  Slider,
  SellingProposition,
  ExploreMarketplace,
  Wrapper,
  FiverBusiness,
  FiverrLogoMaker,
  ProjectCards,
  GetStarted,
} from '../components/Home';
import { cards, projects } from '../utils/data/index';

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slider
        header='Popular professional services'
        slidesToShow={5}
        slidesToScroll={5}
        backgroundColor=''
      >
        {cards.map((card) => (
          <CategoryCards key={card.id} {...card} />
        ))}
      </Slider>
      <Wrapper backgroundColor='#f1fdf7'>
        <SellingProposition />
      </Wrapper>
      <ExploreMarketplace />
      <Wrapper backgroundColor='#0d084d'>
        <FiverBusiness />
      </Wrapper>
      <FiverrLogoMaker />
      <Slider
        backgroundColor='#f5f5f5'
        header='Get inspired with projects made by our freelancers'
        slidesToShow={4}
        slidesToScroll={4}
      >
        {projects.map((card) => (
          <ProjectCards key={card.id} {...card} />
        ))}
      </Slider>
      <GetStarted />
    </div>
  );
};

export default Home;
