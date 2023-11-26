import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RenderCategories from './Routes/RenderCategories/RenderCategories.tsx'
import CalculatorsSelector from './components/CalculatorsSelector/CalculatorsSelector.tsx'
import CalculatorsRoute from './Routes/CalculatorsRoute.tsx'
import Home from './pages/Home.tsx'
import HomeRoute from './Routes/HomeRoute.tsx'
import AddBox from './pages/AddBox.tsx'
import TransactionHistory from './pages/TransactionHistory.tsx'
import DetailedDisplayBox from './pages/DetailedDisplayBox.tsx'
import UpdateBox from './pages/UpdateBox.tsx'
import Graphics from './pages/Graphics.tsx'
import AddBudget from './pages/AddBudget.tsx'
import MyBudget from './pages/MyBudget.tsx'
import AddTransaction from './pages/AddTransaction.tsx'
import BudgetDetail from './pages/BudgetDetail.tsx'
import BudgetEdit from './pages/BudgetEdit.tsx'
import Login from './pages/Login.tsx'
import NavBarHome from './components/NavBarHome/NavBarHome.tsx'
import RegisterScreen from './pages/RegisterScreen.tsx'
import ApresentationRoute from './Routes/ApresentationRoute.tsx'
import DetailedTransaction from './pages/DetailedTransaction.tsx'
import UserScreen from './pages/UserScreen.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <ApresentationRoute/>
      },
      {
        path: "/login",
        element: <Login/>
      }, 
      {
        path: "/register",
        element: <RegisterScreen/>
      },
      {
        path: "/home",
        element: [<Home/>, <NavBarHome/>]
      },
      {
        path: "/categories",
        element: [<RenderCategories/>, <NavBarHome/>]
      },
      {
        path: "/calculators",
        element: [<CalculatorsSelector/>, <NavBarHome/>]
      },
      {
        path: "/calculators/:id",
        element: <CalculatorsRoute/>
      },
      {
        path: "/:id",
        element: <HomeRoute/>
      },
      {
        path: "/1/addBoxes",
        element: <AddBox/>
      },
      {
        path: "/1/detailedDisplayBox",
        element: <DetailedDisplayBox/>
      },
      {
        path: "/1/updateBox",
        element: <UpdateBox/>
      },
      {
        path: "/2/transactionHistory",
        element: <TransactionHistory/>
      },
      {
        path: "/2/transactionHistory/addTransaction",
        element: <AddTransaction/>
      },
      {
        path: "/2/transactionHistory/detailedTransaction",
        element: <DetailedTransaction/>
      },
      {
        path: "/2/graphics",
        element: <Graphics/>
      },
      {
        path: "/3/mybudget",
        element: <MyBudget/>
      },
      {
        path: "/3/addbudget",
        element: <AddBudget/>
      },
      {
        path: "/3/budgetdetail",
        element: <BudgetDetail/>
      },
      {
        path: "/3/budgetedit",
        element: <BudgetEdit/>
      },
      {
        path: "/user",
        element: <UserScreen/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

// Remove Preload scripts loading
postMessage({ payload: 'removeLoading' }, '*')

// Use contextBridge
window.ipcRenderer.on('main-process-message', (_event, message) => {
  console.log(message)
})
