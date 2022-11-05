const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


export const getFormattedDate = (dateText) => {
  const date = new Date(dateText);
  return months[date.getMonth()] + " " + date.getDate();
};

