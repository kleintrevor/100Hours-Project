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
  const weightId = this.dataset.id;
  try {
    const response = await fetch('pulseCheck/deletePulseCheck', {
      method: 'delete',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        weightIdFromJSFile: weightId,
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
  const weightId = this.parentNode.dataset.id;
  try {
    const response = await fetch('pulseCheck/markComplete', {
      method: 'put',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        weightIdFromJSFile: weightId,
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
  const weightId = this.parentNode.dataset.id;
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


// accordian JS
// function initAcc(elem, option){
//   document.addEventListener('click', function (e) {
//       if (!e.target.matches(elem+' .a-btn')) return;
//       else{
//           if(!e.target.parentElement.classList.contains('active')){
//               if(option==true){
//                   var elementList = document.querySelectorAll(elem+' .a-container');
//                   Array.prototype.forEach.call(elementList, function (e) {
//                       e.classList.remove('active');
//                   });
//               }            
//               e.target.parentElement.classList.add('active');
//           }else{
//               e.target.parentElement.classList.remove('active');
//           }
//       }
//   });
// }

// initAcc('.accordion', false);