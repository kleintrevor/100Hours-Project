const cells = document.querySelectorAll('.cell');
const weightItem = document.querySelectorAll('span.not');
const weightComplete = document.querySelectorAll('span.completed');

Array.from(cells).forEach((el) => {
  el.addEventListener('click', deletePulseCheck);
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
