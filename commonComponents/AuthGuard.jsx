"use client"
import { $isAuthenticated } from "@/stores/auth/status"
import { useStore } from "@nanostores/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const AuthGuard = ({ children }) => {
  const isAuthenticated = useStore($isAuthenticated);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated]);

  if (!mounted) return null;

  return (<>{children}</>);
}

export default AuthGuard;
