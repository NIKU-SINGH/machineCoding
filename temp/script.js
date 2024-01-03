const datePickerInput = document.getElementById('datepicker-input');
const datePickerCalendar = document.getElementById('datepicker-calendar');

// Function to display the calendar
function showCalendar() {
  datePickerCalendar.classList.toggle('visible');
}

// Function to generate the calendar
function generateCalendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let calendarHTML = '<div class="calendar">';
  for (let day = 1; day <= daysInMonth; day++) {
    calendarHTML += `<div>${day}</div>`;
  }
  calendarHTML += '</div>';

  datePickerCalendar.innerHTML = calendarHTML;

  const calendarDays = datePickerCalendar.querySelectorAll('.calendar div');
  calendarDays.forEach(day => {
    day.addEventListener('click', () => {
      const selectedDate = new Date(year, month, parseInt(day.innerText));
      const formattedDate = selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      datePickerInput.value = formattedDate;
      datePickerCalendar.classList.remove('visible');
    });
  });
}

// Event listener for input click to show calendar
datePickerInput.addEventListener('click', showCalendar);

// Generate and display the calendar when the page loads
generateCalendar();
