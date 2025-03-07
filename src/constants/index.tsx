// data and exports for the logoListSection
import microsoft from "/Microsoft 1.png";
import netflix from "/Vector.png";
import nike from "/Nike.png";
import shopify from "/Shopify.png";
import slack from "/Slack.png";
import intel from "/Intel.png";
export const logoData = [
  { img: microsoft, alt: "microsoft" },
  { img: netflix, alt: "netflix" },
  { img: nike, alt: "nike" },
  { img: shopify, alt: "shopify" },
  { img: slack, alt: "slack" },
  { img: intel, alt: "intel" },
];

// data and exports for the platformSection
import login from "/platformSectionImages/Group 126.png";
import Arrow from "/platformSectionImages/Arrow.png";
import connect from "/platformSectionImages/Connect.png";
import data from "/platformSectionImages/Group 124.png";
export const platformData = [
  {
    img: login,
    header: "Login or sign up to be able use our platform",
    text: "You must log in first to be able to use our platform to get your product analytics",
  },
  {
    arrow: Arrow,
  },
  {
    img: data,
    header: "Take some sales data that you want",
    text: "You already have sales data of your product with some variants you want",
  },
  {
    arrow: Arrow,
  },
  {
    img: connect,
    header: "Connect your website with just a few click",
    text: "Select the application you wanted to be able to connect with just a few clicks",
  },
];

// data and exports for the reasonTextSection
import chart from "/reasonSectionImages/Chart.png";
import dashboard from "/reasonSectionImages/Dashboard.png";
import rocket from "/reasonSectionImages/Rocket.png";
import security from "/reasonSectionImages/Security.png";
export const reasonData = [
  {
    img: chart,
    header: "Real time data analytics",
    text: "Get the data you need to make smarter decisions.",
  },
  {
    img: security,
    header: "Safely Security",
    text: "All customer data is encrypted in transit and at rest",
  },
  {
    img: rocket,
    header: "Fast and Easy to use",
    text: "Easily to convert API with just a few clicks",
  },
  {
    img: dashboard,
    header: "Powerfull App",
    text: "Provide simple and minimalist dashboard",
  },
];

// data and exports for the mapSection
export const TagData = [
  { head: "350+", para: "Over 500k business powered with us" },
  { head: "750k", para: "Users used our platform in around the world" },
  { head: "4.8", para: "Rating on google play and app store" },
  { head: "24+", para: "More than 30 countries trust our platform" },
];

// data and exports for the TestimonailSection
import netflix1 from "/testimonialSectionImages/Netlflix.png";
import microsoft1 from "/testimonialSectionImages/Microsoft.png";
import shopify1 from "/testimonialSectionImages/Shopify.png";
import profile1 from "/testimonialSectionImages/ToyFaces_Colored_BG_29 2.png";
import profile2 from "/testimonialSectionImages/ToyFaces_Colored_BG_47 1.png";
import profile3 from "/testimonialSectionImages/ToyFaces_Colored_BG_56 1.png";
export const testimonialData = [
  {
    img: netflix1,
    text: `“I’ve used Growly at many companies before—it’s the go-to solution when you need user and product analytics.”`,
    profile: profile1,
    name: "Try Washington",
    title: "CEO of Netflix",
  },
  {
    img: microsoft1,
    text: `“Uses Growly as the source of truth for all its product data, and to determine where the team should focus its time.”`,
    profile: profile2,
    name: "Cyhntya Rebecca",
    title: "CEO of Microsoft",
  },
  {
    img: shopify1,
    text: `“Uses Growly to get deeper user insights that could be easily shared among teams throughout the world,  improving the company investment.” `,
    profile: profile3,
    name: "Derry Alasca",
    title: "Manager of Shopify",
  },
];

// data and exports for the navLinks
export const navLinksData = [
  {
    header: "Products",
    links: ["Landingpages", "Pricing", "Benefits", "Features"],
  },
  {
    header: "Company",
    links: [
      "About",
      "Privacy Policy",
      "Terms & Conditions",
      "Partners",
      "Contact",
    ],
  },
  {
    header: "Resources",
    links: ["Guides and resources", "Blog", "Tools", "Support"],
  },
];
