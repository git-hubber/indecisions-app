const isAdult = (age) => {
  if (age >= 18) return true;

  return false;
}

const canDrink = (age) => {
  if (age >= 18) return true;

  return false;
}

const isSenior = (age) => age >= 70;

export { isAdult, canDrink, isSenior as default }