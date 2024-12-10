import React from 'react';
import PageHeading from '../components/PageHeading';
import JoinusCard from '../components/joinuscard';
import Map from '../components/map';
import Solution from '../components/solution';
import Embed from '../components/ytembed';
import Welcome from '../components/aboutwelcome';
import VisionMission from '../components/vision-mission';
function About() {
  return (
    <>
      <PageHeading name="About us"/>
      <Welcome />
      <VisionMission />
      <Embed />
      <Solution />
      <Map />
      <JoinusCard />
    </>
  );
}

export default About;
