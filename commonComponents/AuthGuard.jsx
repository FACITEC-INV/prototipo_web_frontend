"use client"
import { $isAuthenticated } from "@/stores/auth/status"
import { useStore } from "@nanostores/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const AuthGuard = ({ children }) => {
  const isAuthenticated = useStore($isAuthenticated);
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);
  if (!isAuthenticated) {
    return null;
  }
  return (<>{children}</>);
}

export default AuthGuard;
