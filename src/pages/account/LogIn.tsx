// import { Box, TextField } from '@mui/material';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import React from 'react';

const LogIn: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl">Log in</h1>
        <Input 
            className='w-80 text-black placeholder:text-gray-500' 
            type="email" 
            placeholder="Email"
        />
        <Input 
            className='w-80 text-black placeholder:text-gray-500' 
            type="password" 
            placeholder="Password"
        />
        <Button>
            Log in
        </Button>
    </div>
  );
};

export default LogIn;