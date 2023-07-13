import '../../Styles/style.css'
import {useContext} from "react";
import {Authentication} from "../../Context/Authenticate";
import {useNavigate} from "react-router";
import {PostData} from "../../Services/Http";
export const LoginRegister = () => {

    let userData = {}
    const prev = useNavigate()
    const {isLogin, setIsLogin} = useContext(Authentication)



    const handleLogin = (e) => {
        e.preventDefault()
        userData.grant_type = "password"
        PostData(userData, 'oauth/token')
            .then(res => {
                if (res) {
                    setIsLogin(true)
                    prev(-3)
                    console.log(res)
                    userData = {}
                }
            })
            .catch(err => console.log(err))
    }
    const handleRegister = (e) => {
        e.preventDefault()
        console.log(userData)
        PostData(userData, "api/v1/register")
            .then(res => {
                console.log(res)
                userData = {}
            })
            .catch(err => console.log(err))
    //     console.log("before", userData)
    //     userData = {}
    //     console.log("after", userData)
    }
    return (

        <div className="section">
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                            <label htmlFor="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Log In</h4>
                                                <div className="form-group">
                                                    <input type="email"
                                                           name="logemail"
                                                           className="form-style"
                                                           placeholder="Your Email"
                                                           id="logemail"
                                                           autoComplete="off"
                                                           onChange={(e) => userData.email=e.target.value}
                                                           required
                                                    />
                                                        <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="password"
                                                           name="logpass"
                                                           className="form-style"
                                                           placeholder="Your Password"
                                                           id="logpass"
                                                           autoComplete="off"
                                                           onChange={(e) => userData.password=e.target.value}
                                                           required
                                                    />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <a href="#" className="btn mt-4" onClick={handleLogin}>Log in</a>
                                                <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot
                                                    your password?</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Sign Up</h4>
                                                <div className="form-group">
                                                    <input type="text"
                                                           name="logname"
                                                           className="form-style"
                                                           placeholder="Your Full Name"
                                                           id="logname"
                                                           autoComplete="off"
                                                           onChange={(e) => userData.name=e.target.value}
                                                           required
                                                    />
                                                        <i className="input-icon uil uil-user"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="email"
                                                           name="logemail"
                                                           className="form-style"
                                                           placeholder="Your Email"
                                                           id="logemail"
                                                           autoComplete="off"
                                                           onChange={(e) => userData.email=e.target.value}
                                                           required
                                                    />
                                                        <i className="input-icon uil uil-at"></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="password"
                                                           name="logpass"
                                                           className="form-style"
                                                           placeholder="Your Password"
                                                           id="logpass"
                                                           autoComplete="off"
                                                           onChange={(e) => userData.password=e.target.value}
                                                           required
                                                    />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <a href="#" className="btn mt-4" onClick={handleRegister}>submit</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
