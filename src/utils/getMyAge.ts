const MY_BIRTH_DAY = new Date("2004-09-04");

export default function getMyAge(): number {
  const currentDate = new Date();
  const myAgeInYear: number = currentDate.getFullYear() - MY_BIRTH_DAY.getFullYear();
  return myAgeInYear;
}
