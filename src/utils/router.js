
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







 export const appRouter = createBrowserRouter([
    {
        path: '/',
        element : <App/>,
    
    children : [
        {
            path : "/",
            element: <Dashboard/>
        },
        {
            path : '/team',
            element : <Team/>
        },
        {
            path : '/contacts',
            element : <Contacts/>
        },
        {
            path : '/invoices',
            element : <Invoices/>
        },
        {
            path : '/form',
            element : <Form/>
        },
        {
            path : '/bar',
            element : <Bar/>
        },
        {
            path : '/pie',
            element : <Pie/>
        },
        {
            path : '/line',
            element : <Line/>
        },
        {
            path : '/faq',
            element : <FAQ/>
        },
        {
            path : '/geography',
            element : <Geography/>,
            
        },
        {
            path : '/calendar',
            element : <Calendar/>
        },
        {
            path : '/cars',
            element : <Cars/>
        },
    ]
}
  ]);



  