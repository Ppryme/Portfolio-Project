import React from 'react';

// Import images
import PCCSR from '../Images/pccsr latest.png';
import Consultancypage from '../Images/consultancy page.png';
import TimerGame from '../Images/brands/FireShot Capture 002 - Refs & Portals - [localhost].png';
import mobileApp from '../Images/E-commerce Mobile Application Design for Free (Community).png';
import foodWeb from '../Images/Restaurant Application.png';
import mobileproj from '../Images/mobile-project-1.jpg';

// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi';

// ✅ Create an array with two projects
export const allProjectDetails = [
  {
    id: 1,
    slug: 'project-management-ui',
    ProjectHeader: {
      title: 'Project Management UI',
      publishDate: 'Jul 26, 2021',
      tags: 'UI / Frontend',
    },
    ProjectImages: [
      { id: 1, title: 'Dashboard Overview', img: PCCSR },
      { id: 2, title: 'Analytics Page', img: Consultancypage },
      { id: 3, title: 'User Settings', img: TimerGame },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { id: 1, title: 'Name', details: 'Company Ltd' },
        { id: 2, title: 'Services', details: 'UI Design & Frontend Development' },
        { id: 3, title: 'Website', details: 'https://company.com' },
        { id: 4, title: 'Phone', details: '555 8888 888' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'Design and develop an intuitive project management dashboard for better task tracking and collaboration.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'TailwindCSS', 'AdobeXD'],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Creating a responsive dashboard layout that adapts to multiple screen sizes while maintaining a professional aesthetic.',
        },
        {
          id: 2,
          details:
            'Integrating multiple APIs for analytics, project updates, and user management seamlessly.',
        },
      ],
      SocialSharingHeading: 'Share This',
      SocialSharing: [
		{ id: 1, name: 'Twitter', icon: React.createElement(FiTwitter), url: 'https://twitter.com/' },
		{ id: 2, name: 'Instagram', icon: React.createElement(FiInstagram), url: 'https://instagram.com/' },
		{ id: 3, name: 'Facebook', icon: React.createElement(FiFacebook), url: 'https://facebook.com/' },
		{ id: 4, name: 'LinkedIn', icon: React.createElement(FiLinkedin), url: 'https://linkedin.com/' },
		{ id: 5, name: 'Youtube', icon: React.createElement(FiYoutube), url: 'https://youtube.com/' },
],
    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [
        { id: 1, title: 'Mobile UI', img: mobileApp },
        { id: 2, title: 'Web Application', img: mobileproj },
        { id: 3, title: 'UI Design', img: Consultancypage },
      ],
    },
  },

  // ✅ Second duplicated project (example)
  {
    id: 2,
   slug: 'e-commerce-mobile-application',

    ProjectHeader: {
      title: 'E-Commerce Mobile Application',
      publishDate: 'Oct 10, 2022',
      tags: 'UI / Mobile App',
    },
    ProjectImages: [
      { id: 1, title: 'Home Screen', img: mobileApp },
      { id: 2, title: 'Product Page', img: foodWeb },
      { id: 3, title: 'Checkout Flow', img: mobileproj },
    ],
    ProjectInfo: {
      ClientHeading: 'About Client',
      CompanyInfo: [
        { id: 1, title: 'Name', details: 'ShopSmart Inc.' },
        { id: 2, title: 'Services', details: 'Mobile App Development' },
        { id: 3, title: 'Website', details: 'https://shopsmart.com' },
        { id: 4, title: 'Phone', details: '777 1234 999' },
      ],
      ObjectivesHeading: 'Objective',
      ObjectivesDetails:
        'To design a fast and engaging mobile shopping experience with real-time inventory updates.',
      Technologies: [
        {
          title: 'Tools & Technologies',
          techs: ['React Native', 'Expo', 'Firebase', 'TailwindCSS'],
        },
      ],
      ProjectDetailsHeading: 'Challenge',
      ProjectDetails: [
        {
          id: 1,
          details:
            'Ensuring smooth image loading and data synchronization for users on slow networks.',
        },
        {
          id: 2,
          details:
            'Designing an intuitive checkout process that minimizes drop-offs.',
        },
      ],
      SocialSharingHeading: 'Share This',
      SocialSharing: [
       { id: 1, name: 'Twitter', icon: React.createElement(FiTwitter), url: 'https://twitter.com/' },
		{ id: 2, name: 'Instagram', icon: React.createElement(FiInstagram), url: 'https://instagram.com/' },
		{ id: 3, name: 'Facebook', icon: React.createElement(FiFacebook), url: 'https://facebook.com/' },
		{ id: 4, name: 'LinkedIn', icon: React.createElement(FiLinkedin), url: 'https://linkedin.com/' },
		{ id: 5, name: 'Youtube', icon: React.createElement(FiYoutube), url: 'https://youtube.com/' },
      ],

    },
    RelatedProject: {
      title: 'Related Projects',
      Projects: [
        { id: 1, title: 'Food Delivery Web', img: foodWeb },
        { id: 2, title: 'Shopping Dashboard', img: PCCSR },
        { id: 3, title: 'UI Design', img: Consultancypage },
      ],
    },
  },
];
