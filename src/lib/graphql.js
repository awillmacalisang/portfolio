import { request, gql } from 'graphql-request';

const WP_GRAPHQL_URL = 'http://headless.local/graphql';

export const getPageAndSettings = async () => {
  const query = gql`
query MyQuery {
  globalSettings {
    headerSettings {
      fieldGroupName
      headerLogo {
        node {
          altText
          slug
          title
          mediaItemUrl
        }
      }
      pageMenu {
        nodes {
          slug
        }
      }
    }
    aboutMeSectionSettings {
      aboutContent
      aboutMainHeading
      aboutSubHeading
      aboutStrengthItems {
        strengthLabel
      }
        aboutLeftImage {
        node {
          altText
          mediaItemUrl
          title
        }
      }
      aboutRightImage {
        node {
          altText
          mediaItemUrl
          title
        }
      }
      aboutCompanyDetails {
        companyJobDescription
        companyName
        companyYears
        companyPosition
      }
    }
    skillsSettings {
      skillList {
        skillIcon
        skillsetHeading
        skillTitleList {
          skillsTitle
        }
      }
      skillsHeading
    }
      bannerSettings {
      bannerContent
      bannerHeadingTitle
      bannerImage {
        node {
          altText
          mediaItemUrl
        }
      }
      typingItem {
        typingTitle
      }
    }
  }
}
  `;

  try {
    const data = await request(WP_GRAPHQL_URL, query);
    return data;
  } catch (error) {
    console.error('GraphQL request failed:', error);
    throw error;
  }
};
