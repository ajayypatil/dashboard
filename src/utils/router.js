
import { createBrowserRouter } from "react-router-dom";
import Team from '../Components/Team';
import Contacts from '../Components/Contacts';
import Invoices from '../Components/Invoices';
import Form from '../Components/Form';
import Bar from '../Components/Bar';
import Pie from '../Components/Pie';
import Line from '../Components/Line';
import FAQ from '../Components/FAQ';
import Geography from '../Components/Geography';
import Calendar from '../Components/Calendar';
import App from '../App'
import Dashboard from '../Components/Dashboard';
import Cars from "../Components/Cars";
import Login from "../Components/Login";







 export  const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Login/>
    },
    {
        path: '/browse',
        element : <App/>,
    
    children : [
        {
            path : "/browse",
            element: <Dashboard/>
        },
        {
            path : '/browse/team',
            element : <Team/>
        },
        {
            path : '/browse/contacts',
            element : <Contacts/>
        },
        {
            path : '/browse/invoices',
            element : <Invoices/>
        },
        {
            path : '/browse/form',
            element : <Form/>
        },
        {
            path : '/browse/bar',
            element : <Bar/>
        },
        {
            path : '/browse/pie',
            element : <Pie/>
        },
        {
            path : '/browse/line',
            element : <Line/>
        },
        {
            path : '/browse/faq',
            element : <FAQ/>
        },
        {
            path : '/browse/geography',
            element : <Geography/>,
            
        },
        {
            path : '/browse/calendar',
            element : <Calendar/>
        },
        {
            path : '/browse/cars',
            element : <Cars/>
        },
    ]
}
  ]);



  