import loginImg from "../assets/Images/login.webp";
import Template from "../components/core/Auth/Template";

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Ready to level up your skills?"
      description2="Keep learning, keep growing."
      image={loginImg}
      formType="login"
    />
  );
}

export default Login;
