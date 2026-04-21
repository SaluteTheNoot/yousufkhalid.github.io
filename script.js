// Sleep debt — starts at a comically high number and slowly gets worse
let sleepDebt = 340;
function updateSleepDebt() {
  document.getElementById('sleep-debt').textContent = sleepDebt;
  sleepDebt += 1;
}
updateSleepDebt();
setInterval(updateSleepDebt, 3000);

// Age in seconds — set YOUR_BIRTHDAY to your actual birth date
const YOUR_BIRTHDAY = new Date('2005-08-20T00:00:00'); // <-- change this

function tickFlip(id, newText) {
  const el = document.getElementById(id);
  el.animate(
    [{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(-120%)', opacity: 0 }],
    { duration: 160, easing: 'ease-in', fill: 'forwards' }
  ).onfinish = () => {
    el.textContent = newText;
    el.animate(
      [{ transform: 'translateY(120%)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }],
      { duration: 160, easing: 'ease-out', fill: 'forwards' }
    );
  };
}

function updateAge() {
  const now = new Date();
  const seconds = Math.floor((now - YOUR_BIRTHDAY) / 1000);
  tickFlip('age-seconds', seconds.toLocaleString());

  // Days to next birthday
  const nextBirthday = new Date(now.getFullYear(), YOUR_BIRTHDAY.getMonth(), YOUR_BIRTHDAY.getDate());
  if (nextBirthday <= now) nextBirthday.setFullYear(now.getFullYear() + 1);
  const daysLeft = Math.ceil((nextBirthday - now) / (1000 * 60 * 60 * 24));
  document.getElementById('days-to-birthday').textContent = daysLeft;
}

updateAge();
setInterval(updateAge, 1000);
