import { delay, makeCounter } from "./utils.js";

const status = document.querySelector("#status");
const tbody = document.querySelector("#schedule tbody");
const nextBooking = makeCounter();

// One delegated listener on the table body (event delegation)
tbody.addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-day]");
  if (!button) return;

  const day = button.dataset.day;
  const row = button.closest("tr");

  status.textContent = `Updating ${day}…`;
  await delay(1000); // pauses only this handler; the page stays responsive

  const booked = row.classList.toggle("selected");
  const count = document.querySelectorAll("#schedule tr.selected").length;

  status.textContent = booked
    ? `Booking #${nextBooking()} confirmed for ${day}. ${count} slot(s) booked.`
    : `${day} cancelled. ${count} slot(s) booked.`;
});

// Lab Part B, Step 1 (event loop): paste this in the DevTools Console.
// Write your predicted order in NOTES.md first.
// console.log("1 start");
// setTimeout(() => console.log("2 timeout"), 0);
// Promise.resolve().then(() => console.log("3 promise"));
// console.log("4 end");
