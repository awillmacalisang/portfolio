import { getPageAndSettings } from '../lib/graphql';
import HeaderDetails from '../components/HeaderDetails';
import FooterDetails from '../components/FooterDetails';
import AboutDetails from '../components/AboutDetails';
import SkillsDetails from '../components/SkillsDetails';
import ProjectDetails from '../components/ProjectDetails';
import BannerDetails from '@/components/BannerDetails';

export default async function Home() {
  const data = await getPageAndSettings();

  const logo = data?.globalSettings?.headerSettings?.headerLogo?.node || null;
  const menu = data?.globalSettings?.headerSettings?.pageMenu?.nodes || null;

  /*  About Section */
  const aboutMainHeading = data?.globalSettings?.aboutMeSectionSettings?.aboutMainHeading || null;
  const aboutsubHeading = data?.globalSettings?.aboutMeSectionSettings?.aboutSubHeading || null;
  const aboutContent = data?.globalSettings?.aboutMeSectionSettings?.aboutContent || null;
  const strengthItems = data?.globalSettings?.aboutMeSectionSettings?.aboutStrengthItems || null;
  const aboutRightImage = data?.globalSettings?.aboutMeSectionSettings?.aboutRightImage?.node || null;
  const aboutLeftImage = data?.globalSettings?.aboutMeSectionSettings?.aboutLeftImage?.node || null;
  const aboutCompanyDetails = data?.globalSettings?.aboutMeSectionSettings?.aboutCompanyDetails || null;

  /* Skills Section */
  const skillsHeading = data?.globalSettings?.skillsSettings?.skillsHeading || null;
  const skillList = data?.globalSettings?.skillsSettings?.skillList || null;

  /* Banner Section */
  const typingTexts = data?.globalSettings?.bannerSettings?.typingItem || null;
  const bannerImage = data?.globalSettings?.bannerSettings?.bannerImage?.node || null;
  const bannerContent = data?.globalSettings?.bannerSettings?.bannerContent || null;
  const bannerHeading = data?.globalSettings?.bannerSettings?.bannerHeadingTitle || null;


  return (
    <>
      <HeaderDetails
        logo={logo}
        menu={menu}
      />
      <BannerDetails 
        typingTexts={typingTexts}
        bannerImage={bannerImage}
        bannerContent={bannerContent}
        bannerHeading={bannerHeading}
      
      />
      <AboutDetails 
        aboutmainHeading={aboutMainHeading}
        aboutsubHeading={aboutsubHeading}
        aboutContent={aboutContent}
        strengthItems={strengthItems}
        aboutRightImage={aboutRightImage}
        aboutLeftImage={aboutLeftImage}
        aboutCompanyDetails={aboutCompanyDetails}
      />
      <SkillsDetails
        skillsHeading={skillsHeading}
        skillList={skillList}
      />
      <ProjectDetails />
      <FooterDetails />
    </>

  );
}
