'use client';
import dynamic from "next/dynamic";
import QueryDataForm from "./components/QueryDataForm";
import SeriesChart from "./components/SeriesChart";
import Spinner from "../../commonComponents/Spinner";

import "leaflet/dist/leaflet.css";
import SubscribeForm from "./components/SubscribeForm";

const LazyDevicesMap = dynamic(() => import("./components/DevicesMap"), {
  ssr: false,
  loading: () => <Spinner size={'xl'} tipe={'ring'} />,
});

const Monitoreo = () => {
  return (
    <div className="max-w-[98%] mx-auto py-2">
      <div className="flex justify-center gap-2 flex-col sm:flex-row">
        <QueryDataForm />
        <div className="w-full flex-col sm:flex-row">
          <SeriesChart className="" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-4">
        <div className="w-full md:w-1/3">
          <SubscribeForm />
        </div>
        <div className="w-full md:w-2/3">
          <LazyDevicesMap />
        </div>
      </div>
    </div>
  )
}

export default Monitoreo;
