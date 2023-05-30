import MainLayout from './components/layouts/MainLayout'
import { PATH } from './configs/path'
import { Home } from './pages'
import { ChatPage } from './pages/chat'
import { LoginPage } from './pages/login'

export const routers = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: PATH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PATH.CHAT,
        element: <ChatPage />,
      },
    ],
  },
]
