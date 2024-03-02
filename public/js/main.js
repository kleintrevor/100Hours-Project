const cells = document.querySelectorAll('.cell');
const weightItem = document.querySelectorAll('span.not');
const weightComplete = document.querySelectorAll('span.completed');

Array.from(cells).forEach((el) => {
  el.addEventListener('click', deletePulseCheck);
});

// handle creation of both pulsecheck data and feeditem data with one button press
const form = document.querySelector('.staffing');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  try {
    const response = await fetch('/pulseCheck/createPulseCheck', {
      method: 'POST',
      body: new FormData(form), // Serialize form data and send as POST body
    });

    if (response.ok) {
      // Handle successful creation of pulseCheck and feedItem
      const data = await response.json();
      console.log('Success:', data);
      // Update UI or display success message accordingly
    } else {
      console.error('Error:', response.statusText);
      // Handle potential errors during data saving
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle general errors in the process
  }
});

// Array.from(weightItem).forEach((el) => {
//   el.addEventListener('click', markComplete);
// });

// Array.from(weightComplete).forEach((el) => {
//   el.addEventListener('click', markIncomplete);
// });

async function deletePulseCheck() {
  const pulseCheck = this.dataset.id;
  try {
    const response = await fetch('pulseCheck/deletePulseCheck', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        pulseCheckFromJSFile: pulseCheck,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const pulseCheck = this.parentNode.dataset.id;
  try {
    const response = await fetch('pulseCheck/markComplete', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        pulseCheckFromJSFile: pulseCheck,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markIncomplete() {
  const pulseCheck = this.parentNode.dataset.id;
  try {
    const response = await fetch('pulseCheck/markIncomplete', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        pulseCheckIdFromJSFile: pulseCheckId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}



// For the log in form to toggle between login and register
$('.message a').click(function () {
  $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
});
