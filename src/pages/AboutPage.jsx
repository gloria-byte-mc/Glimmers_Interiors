import AboutHero    from '../components/AboutHero';
import AboutMission from '../components/AboutMission';
import AboutStats   from '../components/AboutStats';
import AboutStory   from '../components/AboutStory';
import AboutValues  from '../components/AboutValues';
import AboutTeam    from '../components/AboutTeam';
import AboutCta     from '../components/AboutCta';
import Footer       from '../components/Footer';
import AboutVision from '../components/AboutVision';

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutMission />
       {/* 
      <AboutVision />
     
      <AboutStats />
      */}
       <AboutTeam />
      <AboutStory />
      <AboutValues />
     
      <AboutCta />
      <Footer />
    </>
  );
};

export default AboutPage;