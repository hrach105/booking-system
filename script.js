// Auto set min date to today for date input
const dateInput = document.getElementById("date");
const today = new Date();
// Format YYYY-MM-DD
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1;
let dd = today.getDate();
if (mm < 10) mm = "0" + mm;
if (dd < 10) dd = "0" + dd;
const minDateStr = `${yyyy}-${mm}-${dd}`;
dateInput.min = minDateStr;
