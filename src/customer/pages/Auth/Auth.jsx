import React, { useState } from 'react'
import RegisterForm from './RegisterForm';
import { Button } from '@mui/material';
import LoginForm from './LoginForm';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='flex justify-center min-h-[90vh] items-center'>
            <div className='flex flex-col justify-center max-w-md sm:w-[60vw] md:w-[50vw] lg:w-[50vw] min-h-[85vh] my-10 rounded-md shadow-lg'>
                <video width="300"
                    height="100"
                    autoPlay
                    muted
                    loop
                    src='src\assets\logo\Banner.mp4' 
                    className='self-center'
                >
                    {/* <source src=''/> */}
                </video>

                <div className='mt-4 px-10'>
                    {isLogin ? <LoginForm/> : <RegisterForm/>}
                    <div className='flex items-center gap-1 justify-center my-5'>
                        <p>{isLogin && "Don't"} have a account</p>
                        <Button onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? "Create Account" : "Login"}
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Auth;
