import { About_me, Experiance, Skills } from '../pages';

const routes = [
  // {
  //   path: '/profile/:profileId',
  //   component: ProfileId,
  //   isPublic: false,
  // },
  {
    path: '/AboutMe',
    component: About_me,
    name: 'ABOUT ME',
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
  // {
  //   path: '/login',
  //   component: Login,
  //   isPublic: true,
  // },

  // {
  //   path: '/',
  //   component: Home,
  //   isPublic: true,
  // },
];

export default routes;
