// // Auto set min date to today for date input
// const dateInput = document.getElementById("date");
// const timeInput = document.getElementById("time");

// // Տ today's date - YYYY-MM-DD
// const today = new Date();
// const yyyy = today.getFullYear();
// let mm = today.getMonth() + 1;
// let dd = today.getDate();
// if (mm < 10) mm = "0" + mm;
// if (dd < 10) dd = "0" + dd;
// const minDateStr = `${yyyy}-${mm}-${dd}`;
// dateInput.min = minDateStr;

// // Երբ ընտրում ես օրը՝ սահմանափակում ենք ժամը, եթե այսօր է
// dateInput.addEventListener("change", () => {
//   const selectedDate = new Date(dateInput.value);
//   const now = new Date();

//   if (
//     selectedDate.getFullYear() === now.getFullYear() &&
//     selectedDate.getMonth() === now.getMonth() &&
//     selectedDate.getDate() === now.getDate()
//   ) {
//     // Այսօրվա համար սահմանում ենք ժամի նվազագույնը այժմյան ժամին
//     let hour = now.getHours();
//     let minutes = now.getMinutes();

//     if (hour < 10) hour = "0" + hour;
//     if (minutes < 10) minutes = "0" + minutes;

//     timeInput.min = `${hour}:${minutes}`;
//   } else {
//     // Այլ օրերի համար թույլատրում ենք ամբողջ օրը
//     timeInput.min = "00:00";
//   }
// });

// document.querySelectorAll(".accordion-header").forEach((button) => {
//   button.addEventListener("click", () => {
//     const body = button.nextElementSibling;
//     body.style.display = body.style.display === "block" ? "none" : "block";
//   });
// });
