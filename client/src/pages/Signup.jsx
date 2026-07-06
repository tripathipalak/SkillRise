import signupImg from "../assets/Images/signup.webp";
import Template from "../components/core/Auth/Template";

function Signup() {
  return (
    <Template
      title="Start your learning journey with SkillRise today."
      description1="Ready to level up your skills?"
      description2="Keep learning, keep growing."
      image={signupImg}
      formType="signup"
    />
  );
}

export default Signup;