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
        <div className='flex flex-wrap'>{
          chartsData.map((chartConfig, i) => {
            const { series, chart, ...options } = chartConfig;
            return (
              <div
                key={`grafico_${i}`}
                className='bg-white p-1 rounded-lg shadow-md flex-2 m-[1px]'
              >
                <Chart
                  options={options}
                  series={series}
                  type={chart.type}
                  height={chart.height || 300}
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
