import { Home, About_me, Experiance, Skills, Covid } from '../pages';

const routes = [
  // {
  //   path: '/profile/:profileId',
  //   component: ProfileId,
  //   isPublic: false,
  // },
  {
    path: '/covid',
    component: Covid,
    name: 'COVID',
    isPublic: true,
  },
  {
    path: '/experiance',
    component: Experiance,
    name: 'EXPERIANCE',
    isPublic: true,
  },
  {
    path: '/skills',
    component: Skills,
    name: 'SKILLS',
    isPublic: true,
  },
  {
    path: '/AboutMe',
    component: About_me,
    name: 'ABOUT ME',
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    name: 'Home',
    isPublic: false,
  },

  // {
  //   path: '/',
  //   component: Home,
  //   isPublic: true,
  // },
];

export default routes;
