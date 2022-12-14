import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'ACADEMICO',
    group: true,
  },
  {
    title: 'Mesas',
    icon: 'edit-2-outline',
    link: '/pages/mesas/listar',
    home: true,
  },
  {
    title: 'Partidos Politicos',
    icon: 'grid-outline',
    link: '/pages/partidos/listar',
  },
  {
    title: 'Candidatos',
    icon: 'map-outline',
    link: '/pages/candidatos/listar',
  },
  {
    title: 'Resultados',
    icon: 'layout-outline',
    link: '/pages/resultados/listar',
  },
  {
    title: 'Reportes',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Mesas',
        link: '/pages/reportes/mesas',
      },
      {
        title: 'Candidatos',
        link: '/pages/reportes/candidatos',
      },
      {
        title: 'Partidos politicos',
        link: '/pages/reportes/partidos',
      },
    ],
  },
  {
    title: 'ADMINISTRACION',
    group: true,
  },
  {
    title: 'Usuarios',
    icon: 'browser-outline',
    link: '/pages/usuarios/listar',
  },
  {
    title: 'Roles',
    icon: 'lock-outline',
    link: '/pages/roles/listar',
  },
];
