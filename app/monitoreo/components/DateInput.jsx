'use client'

import { handleDayInputChange, handleMonthInputChange, handleYearInputChange } from "@/stores/monitoreo/dateInputAction";
import {
  $currentYearStatus, $dayStatus,
  $errorsDateInputStatus, $monthStatus,
  $yearsStatus
} from "@/stores/monitoreo/dateInputStatus";
import { useStore } from "@nanostores/react";

const DateInput = () => {
  const year = useStore($yearsStatus);
  const month = useStore($monthStatus);
  const day = useStore($dayStatus);
  const currentYear = useStore($currentYearStatus);
  const errors = useStore($errorsDateInputStatus);

  return (
    <div className="flex flex-col lg:flex-row md:justify-center lg:items-center lg:mb-4 lg:gap-2">
      Año:
      <div>
        <div>
          <input
            type="number"
            placeholder="Año"
            className={`input input-sm ${errors.year ? 'input-error' : ''}`}
            value={year}
            onChange={e => handleYearInputChange(e)}
            min={2024}
            max={currentYear}
          />
        </div>
        {errors.year && <span className="text-xs text-error mt-1">{errors.year}</span>}
      </div>
      Mes:
      <div>
        <div>
          <input
            type="number"
            placeholder="Mes"
            className={`input input-sm ${errors.month ? 'input-error' : ''}`}
            value={month === 0 ? '' : month}
            onChange={e => handleMonthInputChange(e)}
            min={0}
            max={12}
          />
        </div>
        {errors.month && <span className="text-xs text-error mt-1">{errors.month}</span>}
      </div>
      Día:
      <div>
        <div>
          <input
            type="number"
            placeholder="Día"
            className={`input input-sm ${errors.day ? 'input-error' : ''}`}
            value={day === 0 ? '' : day}
            onChange={e => handleDayInputChange(e)}
            min={0}
            max={31}
          />
        </div>
        {errors.day && <span className="text-xs text-error mt-1">{errors.day}</span>}
      </div>
    </div>
  )
}

export default DateInput
