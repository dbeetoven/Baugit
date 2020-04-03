import Routes from './routes';

const sidebarItems = [
  {
    title: 'Jobs',
    Subtitle: 'Seccion Laboral',
    control: 'jobcontrolCollapse',
    childrens: [
      {
        title: 'Busquedas',
        route: Routes.JOBS_HIRING,
      },
      {
        title: 'Desafios',
        route: Routes.CHALLENGE,
      },
      {
        title: 'Entrevistas',
        route: Routes.INTERVIEW,
      },
    ],
  },
  {
    title: 'Foros',
    Subtitle: 'Foros',
    control: 'forosControlCollaspe',
    childrens: [
      {
        title: 'Foros',
        route: Routes.JOBS_HIRING,
      },
      {
        title: 'Desafios',
        route: Routes.CHALLENGE,
      },
    ],
  },
];
export default sidebarItems;
