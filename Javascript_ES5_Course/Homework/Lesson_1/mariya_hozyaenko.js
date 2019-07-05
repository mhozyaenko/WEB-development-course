function getCentury(year) {
  return (typeof year === 'number' && year >= 1 && year <= 2017 && Number.isInteger(year))
    ? Math.ceil(year / 100)
    : 'Год указан не правильно';
}
