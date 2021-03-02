import { FacebookLogin } from 'react-facebook-login-component';
import { useHistory } from "react-router-dom";

function LoginComponent (){

  const history = useHistory();

  function handleClick() {
    history.push("/table-view");
  }
 function responseFacebook (response){
    console.log(response);
    if(response.accessToken){
      handleClick();
    }
  }

    return (
      <div>
        <FacebookLogin socialId="3426224027487464"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={responseFacebook}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.5"
                       className="facebook-login"
                       buttonText="Login With Facebook"/>
      </div>
    );

}

export default LoginComponent;