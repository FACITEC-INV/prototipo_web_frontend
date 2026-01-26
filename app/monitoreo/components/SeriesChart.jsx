'use client';
import { $chartsData } from '@/stores/monitoreo/chartsDataStatus';
import { useStore } from '@nanostores/react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SeriesChart = ({ className }) => {
  const chartsData = useStore($chartsData)
  return (
    <div className={`${className}`}>
      {chartsData.length > 0 ? (
        <div className='flex flex-wrap justify-center'>{
          chartsData.map((chartConfig, i) => {
            const { series, ...options } = chartConfig;
            return (
              <div
                key={chartConfig.id}
                className='bg-neutral-200 p-1 rounded-lg shadow-md m-[3px] w-full lg:w-[49%] flex-shrink-0 flex-grow-0'
              >
                <Chart
                  options={options}
                  series={series}
                  type={options.chart.type}
                  height={options.chart.height || 300}
                />
              </div>
            )
          })
        }
        </div>
      ) : (
        <div className="flex justify-center items-center h-[350px]">
          <p className="text-center text-gray-500">Seleccione los filtros para visualizar los datos.</p>
        </div>
      )}
    </div>
  );
};

export default SeriesChart;
