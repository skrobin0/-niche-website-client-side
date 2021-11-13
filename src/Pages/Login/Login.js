import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import MenuBar from '../Shared/MenuBar/MenuBar';
import "./Login.css"

const Login = () => {

    const { singInWithGoogle, handleRegistration,  handleEmailChange, handlePasswordChange, error,toggleLogin, isLogin, handleNameChange} = useAuth();

	const location = useLocation();
	const history = useHistory();
	const redirect_url = location.state?.from || "/dashboard" ;

	const handleGoogleLogin = () => {
		singInWithGoogle()
		.then (result => {
			history.push(redirect_url)
		})
	}

    return (
        <div>
            <div>
                <MenuBar></MenuBar>
            </div>


			<div className="container bootstrap snippets bootdey">
    

	<div className="omb_login">
		<h3 className="omb_authTitle text-success">Please {isLogin ? "Login" : "Register" }  </h3>
		<h3 className="text-danger"> {error} </h3>
		<div className="row omb_row-sm-offset-3 omb_socialButtons">
		   
			<div className="col-md-6 col-xs-4 col-sm-2">
				<button onClick ={handleGoogleLogin} className="btn btn-lg btn-block omb_btn-twitter">
				
					<i className="fa fa-twitter visible-xs"></i>
					<span className="hidden-xs">Google Sign In </span>
				
				</button>
			</div>	
				
		</div>
	
		<div className="row omb_row-sm-offset-3 omb_loginOr">
			<div className="col-xs-12 col-sm-6">
				<br className="omb_hrOr" />
				<span className="omb_spanOr">or</span>
			</div>
		</div>
	
		<div className="row omb_row-sm-offset-3">
			<div className="col-xs-12 col-sm-6">	
				<form >
				{ !isLogin &&	<div className="input-group">
						
						<input onBlur ={handleNameChange} type="text" className="form-control" name="username" placeholder="User Name" required/>
					</div> }

					<br/>

					<div className="input-group">
						
						<input onBlur ={handleEmailChange} type="text" className="form-control" name="username" placeholder="email address" required/>
					</div>
					<span className="help-block"></span>
							<br/>			
					<div className="input-group">
						
						<input onBlur = {handlePasswordChange} type="password" className="form-control" name="password" placeholder="Password" required/>
					</div>
				  <br/>
	
				  <button onClick = {handleRegistration} className="btn btn-lg btn-primary btn-block" type="submit">{isLogin ? "Login" : "Register"}</button>
	
				  {/* <input  className="btn btn-lg btn-primary btn-block" type="submit" value ="submit"></input> */}
				</form>
			</div>
		</div>
		<div className="row omb_row-sm-offset-3">
			<div className="col-xs-12 col-sm-3">
				<label className="checkbox">
					<input onChange = {toggleLogin} type="checkbox" value="remember-me"/>Already Registered
				</label>
			</div>
			
		</div>	    	
		</div>
	
		</div>

    </div>
    );
 };

export default Login;