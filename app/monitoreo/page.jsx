'use client';
import QueryDataForm from "./components/QueryDataForm";
import SeriesChart from "./components/SeriesChart";

const Monitoreo = () => {
  return (
    <div className="max-w-[98%] mx-auto py-2 flex justify-center gap-2 flex-col sm:flex-row">
      <QueryDataForm />
      <div className="w-full flex-col sm:flex-row">
        <SeriesChart className="" />
      </div>
    </div>
  )
}

export default Monitoreo;
