import React, { useState } from 'react';
import { Card, Input, Button } from '@material-tailwind/react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Logging in with username:', username, 'and password:', password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>
        <Card>
          <div className="mt-8 space-y-6">
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              size="lg"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              size="lg"
            />
            <div>
              <Button
                color="indigo"
                buttonType="filled"
                size="lg"
                block
                onClick={handleLogin}
              >
                Sign in
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Login;
