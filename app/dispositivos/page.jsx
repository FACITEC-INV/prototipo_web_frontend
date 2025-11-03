"use client";

import AuthGuard from "@/commonComponents/AuthGuard";
import Form from "./components/Form";
import Table from "./components/Table";
import { useEffect } from "react";
import { $isAuthenticated } from "@/stores/auth/status";
import { useStore } from "@nanostores/react";
import { $reloadTableData } from "@/stores/dispositivos/tableStatus";

const Dispositivos = () => {
  const isAuthenticated = useStore($isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) return;
    if (isAuthenticated) $reloadTableData.set(true);
  }, [isAuthenticated]);

  return (
    <AuthGuard>
      <div className="max-w-7xl mx-auto px-3 py-4 text-gray-800">
        <div className="flex flex-row sm:flex-nowrap flex-wrap gap-2">
          <div className="sm:basis-3/10 w-100">
            <Form />
          </div>
          <div className="sm:basis-3/4">
            <Table />
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
export default Dispositivos;

