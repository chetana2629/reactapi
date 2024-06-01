import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from "react-router-dom"
import Home from "./Home"
import mystore from "../redux/mystore"
import { Provider } from 'react-redux' //this will provide entire store in application

function App(){
    return (
        <>
        <Provider store={mystore}>
       <Header></Header>
       <Outlet></Outlet>
       <Footer></Footer>
       </Provider>
        </>
    )
}

export default App