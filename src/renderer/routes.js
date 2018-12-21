import React from 'react'

import Hello from './views/hello'
import Favorites from './views/favorites'
import Playlists from './views/playlists'
import Profile from './views/profile'

const routes = [
  {
    path: '/',
    action: () => <Hello />,
  },
  {
    path: '/profile',
    action: ctx => <Profile options={ctx} />,
  },
  {
    path: '/favorites',
    action: ctx => <Favorites options={ctx} />,
  },
  {
    path: '/playlists',
    action: ctx => <Playlists options={ctx} />,
  },
]

export default routes
