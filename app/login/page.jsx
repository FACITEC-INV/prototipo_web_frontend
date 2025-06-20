"use client";
import { login } from "@/stores/auth/actions";
import { notify } from "@/stores/notification/notify";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const route = useRouter();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      await login(username, password);
      route.replace('/dispositivos');
    } catch (error) {
      notify(`${error.message}`, "error");
    } finally {
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="h-[75vh] xs:h-[65vh] sm:h-[65vh] pt-2">
      <div className="max-w-[50vw] xs:max-w-[47vw] sm:max-w-[37vw] lg:max-w-[27vw] m-auto card bg-neutral-200 shadow-sm">
        <div className="card-body">
          <h2 className="text-2xl flex justify-center items-center gap-2">
            Login
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-big-right-lines"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 9v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-3v-6h3z" /><path d="M3 9v6" /><path d="M6 9v6" /></svg>
          </h2>
          <form className="form-control gap-2" onSubmit={handleSubmit}>
            <div className="mb-3">
              <div className="floating-label">
                <span>Username</span>
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className="input"
                  required
                  minLength={4}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="mb-3">
              <div className="floating-label">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="input"
                  value={password}
                  autoComplete="off"
                  required
                  minLength={4}
                />
              </div>
            </div>
            <div className="flex flex-row justify-center gap-2 mt-5">
              <button type="submit" className="btn btn-soft btn-primary flex-auto">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default Login;
