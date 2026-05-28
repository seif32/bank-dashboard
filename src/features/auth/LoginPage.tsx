import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Button, Card, Input } from "../../components/ui";
import { useNavigate } from "react-router-dom";

type CredentialsType = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [credentials, setCredentials] = useState<CredentialsType>({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleCredentialsInput(e: React.ChangeEvent<HTMLInputElement>) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const isLogged = login(credentials?.email, credentials?.password);
    if (isLogged) navigate("/dashboard");
  }

  return (
    <div className="bg-gray-50 min-h-screen grid place-items-center">
      <Card className="w-full max-w-md ">
        <h2 className="text-center font-bold text-2xl mb-8">Welcome Back</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Input
              label="Email"
              type="text"
              name="email"
              onChange={handleCredentialsInput}
              value={credentials?.email}
            />
          </div>
          <div>
            <Input
              label="Password"
              type="password"
              name="password"
              onChange={handleCredentialsInput}
              value={credentials?.password}
            />
          </div>
          <Button className="w-full">Log in</Button>
        </form>
      </Card>
    </div>
  );
}
