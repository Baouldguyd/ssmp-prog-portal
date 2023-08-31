
import { useEffect, useLayoutEffect, useState } from "react";
import SailLogo from "../../assets/SailInnovationLogo.png";
import { Button, Col, Form, Input, Row } from "antd";
import useGatherInputFields from "../../Hooks/useGatheInputFields";
import { useNavigate,Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from 'axios'


const Signin = () => {


  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState();
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

useLayoutEffect(()=>{
  document.title = "Login | Sail Admin Portal"
  if(sessionStorage.getItem("user")){
    window.location.href= "/dashboard"
  }
})

  const [signInInfo, setsignInInfo] = useState({
    email: '',
    password: '',
  });
 
  //This state holds the error messages and allows the display of it when there issues with the form inputs
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setsignInInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (!signInInfo.email) {
      newErrors.email = 'Email is required';
    }
    if (!signInInfo.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const loginHandler = async () => {
    setLoading(true);
    try {
      if (validateForm()) {
        const { email, password } = signInInfo;
    console.log(email , password);
    const response = await axios.post(
        process.env.REACT_APP_SSMP_BACKEND_API + "user/login", { email, password }
    )
    console.log(response.data);
    setMessage(response.data.responseMessage?.toUpperCase());
    if (response.data.responseCode === "00")
     {const userRole = response.data.data.role;
      if (userRole === "ADMIN") {
      toast.success(response.data.responseMessage, {
        duration: 4000,
        position: "top-center",
      });
      
      
        
          // Check if the user is an admin
          sessionStorage.setItem("token", response.data.data.token);
          sessionStorage.setItem("role", response.data.data.role);
          setMessage('Login successful');
          console.log('before nav');
          navigate('/dashboard');
          console.log('after nav');
        } 
      } else {
        // User's credentials are not valid
        setMessage('Invalid credentials');
        toast.error(response.data.responseMessage, {
          duration: 4000,
          position: "top-center",
        });
        
      setLoading(false);
      console.log(response);
    }}} catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

 
  

  return (
    <div className=" grid-cols-2  h-[100svh]">
      <div className="w-[10rem] mx-[2rem]">
        <img src={SailLogo} alt="SailLogo" />
      </div>

      <div className="  justify-center m-auto my-[4rem] items-center bg-white w-[25rem]">
        <div className="text-center mt-[10rem]  text-2xl font-bold">
          <h1>Sign In</h1>
        </div>
        <div className="block justify-center items-center flex-col  h-80 mt-10 ">
          <div className="ml-[1.4rem]">
            <Form
              layout="vertical"
              onFinish={loginHandler}
              fields={[
                {
                  name: "email",
                  value: loginData?.email,
                },
                {
                  name: "password",
                  value: loginData?.password,
                },
              ]}
            >
              <Row>
                <Col span={24}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your EmailAddress!",
                      },
                    ]}
                  >
                    <Input
                      onChange={handleInputChange}
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      className="py-3"
                      
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      onChange={handleInputChange}
                      name="password"
                      placeholder="Password"
                      type="password"
                      id="password"
                      className="py-3"
                    />
                  </Form.Item>
                </Col>
                <div className="text-sm font-normal mb-2 pl-[1rem] text-[#75C2F6]">
                  <h6>Forgot password?</h6>
                </div>
                <Col span={24}>
                  <Button
                    loading={loading}
                    type="primary"
                    htmlType="submit"
                    className="bg-[#134c98] flex items-center justify-center py-5"
                    block
                  >
                    Sign In
                  </Button>
                </Col>
                
              </Row>
              <Col className=" m-auto" span={20}>
                <Link to={"/signup"}>
                  <Button
                    
                    type="primary"
                    htmlType="button"
                    className=" greenHover bg-green-600 hover:!bg-green-500 !important mt-10 flex items-center  text-[1.3rem] justify-center py-5 "
                    block
                  >
                    Create new account
                  </Button>
                  </Link>
                </Col>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

