import Discover from '@/pages/discover';
import Recommend from '@/pages/discover/c-pages/recommend';
import Rank from '@/pages/discover/c-pages/rank';
import Songs from '@/pages/discover/c-pages/songs';
import Anchor from '@/pages/discover/c-pages/anchor';
import Singer from '@/pages/discover/c-pages/singer';
import Album from '@/pages/discover/c-pages/album';
import SongDetail from '@/pages/discover/c-pages/song-detail'

import Mine from '@/pages/mine';
import Friend from '@/pages/friend';
import { Redirect } from 'react-router-dom';
const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/discover' />
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to='/discover/recommend' />
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/rank',
        component: Rank
      },
      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/anchor',
        component: Anchor
      },
      {
        path: '/discover/singer',
        component: Singer
      },
      {
        path: '/discover/album',
        component: Album  
      },
      {
        path: "/discover/song",
        component: SongDetail
      }
    ]
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  }
];

export default routes;
