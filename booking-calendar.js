 document.addEventListener('DOMContentLoaded', function() {
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const form = document.querySelector('form');
  
    flatpickr(startDateInput, {
      mode: 'range',
      dateFormat: 'Y-m-d',
      onClose: function(selectedDates, dateStr, instance) {
        if (selectedDates.length === 2) {
          endDateInput._input.focus();
        }
      },
    });

  });
  