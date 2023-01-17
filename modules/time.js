const dateAndTime = document.getElementById('dateDisplay');
const timeSet = function () {
  dateAndTime.innerHTML = window.luxon.DateTime.local().toFormat('dd LLL, yyyy | t');
};

timeSet();

setInterval(() => { timeSet(); }, 1000);

export default dateAndTime;