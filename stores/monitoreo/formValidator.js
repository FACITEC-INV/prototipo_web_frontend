const {
  $currentYearStatus, $errorsDateInputStatus,
  $currentMonthStatus, $yearsStatus,
  $currentDayStatus, $monthStatus,
} = require("./dateInputStatus");

export const yearIsValid = year => {
  if (!year) {
    $errorsDateInputStatus.setKey('year', 'Obligatorio');
    return false;
  }
  if (!Number.isInteger(year)) {
    $errorsDateInputStatus.setKey('year', 'Año=número');
    return false
  };
  if (year < 2024) {
    $errorsDateInputStatus.setKey('year', 'Año>=2024');
    return false;
  }
  if (year > $currentYearStatus.get()) {
    $errorsDateInputStatus.setKey('year', 'Año<=' + $currentYearStatus.get());
    return false;
  }
  $errorsDateInputStatus.setKey('year', null);
  return true;
};

export const monthIsValid = month => {
  if (!Number.isInteger(month) && month !== '') {
    $errorsDateInputStatus.setKey('month', 'Mes=número');
    return false
  };
  if (month < 0) {
    $errorsDateInputStatus.setKey('month', 'Mes>=0');
    return false;
  }
  if (month > $currentMonthStatus.get() && $yearsStatus.get() === $currentYearStatus.get()) {
    $errorsDateInputStatus.setKey('month', 'Mes<=' + $currentMonthStatus.get() + '/' + $currentYearStatus.get());
    return false;
  }
  if (month > 12) {
    $errorsDateInputStatus.setKey('month', 'Mes<=12');
    return false;
  }
  $errorsDateInputStatus.setKey('month', null);
  return true;
};

export const dayIsValid = day => {
  if (!Number.isInteger(day) && day !== '') {
    $errorsDateInputStatus.setKey('day', 'Día=número');
    return false
  };
  if (day < 0) {
    $errorsDateInputStatus.setKey('day', 'Día>=0');
    return false;
  }
  if (day > $currentDayStatus.get()
    && $yearsStatus.get() === $currentYearStatus.get()
    && $monthStatus.get() === $currentMonthStatus.get()
  ) {
    $errorsDateInputStatus.setKey('day', 'Día<=' + $currentDayStatus.get()
      + '/' + $currentMonthStatus.get()
      + '/' + $currentYearStatus.get());
    return false;
  }
  if (day > 31) {
    $errorsDateInputStatus.setKey('day', 'Día<=31');
    return false;
  }
  $errorsDateInputStatus.setKey('day', null);
  return true;
};
