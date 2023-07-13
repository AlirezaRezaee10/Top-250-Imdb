import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {Home} from "../../Pages/Home";
import {Movie} from "../../Pages/Movie";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {LoginRegister} from "../../components/LoginRegister";
import Authenticate from "../../Context/Authenticate";

export const AppRoutes = () => {
    return (

        <Router>
            <Authenticate>
                <Header/>
                <Routes>
                    <Route path="/:pageNO" element={<Home genre={false}/>}/>
                    <Route path="/" element={<Navigate to="/1"/>}/>
                    <Route path="/movie/:movieId" element={<Movie/>}/>
                    <Route path="/login" element={<LoginRegister/>}/>
                    <Route path="/genres/:genreId/:pageNO" element={<Home genre={true}/>}/>
                </Routes>
                <Footer/>
            </Authenticate>
        </Router>
    )
}
