"use client"
import { $isAuthenticated } from "@/stores/auth/status"
import { useStore } from "@nanostores/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Spinner from "./Spinner"

const AuthGuard = ({ children }) => {
  const isAuthenticated = useStore($isAuthenticated);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }
    setMounted(true);
  }, [isAuthenticated]);

  if (!mounted) return null;

  return (
    <>
      {
        isAuthenticated ? children : (
          <div className="flex justify-center items-center h-[66vh]">
            <Spinner size="exLarge"></Spinner>
          </div>
        )
      }
    </>
  );
}

export default AuthGuard;
