"use client"
import { useState } from "react";
import { Input,
   
    InputAdornment,
    IconButton,
} from "@mui/material";

import { login } from "../../apis";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import OptimizedImage from "@/app/components/optimizedImage";



const AdminLogin = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [username, setuserName] = useState('')
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await login(username, password);

    if(response?.status === 200) {
      localStorage.setItem("token", response.data.token);

        dispatch({
            type: "USER_LOGIN_SUCCESS",
            payload: {
              token: response.data.token,
            },
          });
          router.push('/admin/events')
    }else {
        alert('Incorrect email or password')
    }
    setLoading(false);
  }
  return (
    <div className="login">
      <div className="login__card">
        <div className="login__card-background">
          <OptimizedImage src={"https://res.cloudinary.com/thewebplug/image/upload/v1735556202/1735556201783.jpg"} alt="" objectFit="cover" layout="fill" />
        </div>
        <div className="login__card-container">
          <form className="container-login" onSubmit={handleSubmit}>

            <Input
              id="standard-adornment-password"
              className="container-login__input"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setuserName(e.target.value)}
              required
            />
               <Input
              className="container-login__input"
              required
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#292D32"/>
                    </svg>
                    
                    : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.12 6.98L17.02 2.88C16.54 2.4 15.58 2 14.9 2H9.1C8.42 2 7.46 2.4 6.98 2.88L2.88 6.98C2.4 7.46 2 8.42 2 9.1V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42 22 9.1 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.1C22 8.42 21.6 7.46 21.12 6.98ZM16.03 14.97C16.32 15.26 16.32 15.74 16.03 16.03C15.88 16.18 15.69 16.25 15.5 16.25C15.31 16.25 15.12 16.18 14.97 16.03L12 13.06L9.03 16.03C8.88 16.18 8.69 16.25 8.5 16.25C8.31 16.25 8.12 16.18 7.97 16.03C7.68 15.74 7.68 15.26 7.97 14.97L10.94 12L7.97 9.03C7.68 8.74 7.68 8.26 7.97 7.97C8.26 7.68 8.74 7.68 9.03 7.97L12 10.94L14.97 7.97C15.26 7.68 15.74 7.68 16.03 7.97C16.32 8.26 16.32 8.74 16.03 9.03L13.06 12L16.03 14.97Z" fill="#292D32"/>
                    </svg>
                    }
                  </IconButton>
                </InputAdornment>
              }
            />

            <button className="container-login__filled" type="submit">{loading ? "Loading..." : "Login"}</button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
