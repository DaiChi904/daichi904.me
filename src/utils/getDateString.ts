export default function getDateString(date: Date, roughly: boolean) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  let dateString = "";

  if (!roughly) {
    dateString = `${year}年 ${month + 1}月 ${day}日`;
  } else {
    dateString = `${year}年 ${month + 1}月 頃`;
  }

  return dateString;
}
