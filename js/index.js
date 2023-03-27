let inpunum1 = document.querySelector("[data-id=inpunum1]");
let inpunum2 = document.querySelector("[data-id=inpunum2]");
let inpunum3 = document.querySelector("[data-id=inpunum3]");

function myFunction(e) {
  if (inpunum1.dataset.id === e) {
    inpunum2.value = (+inpunum1.value * 1.8 + 32).toFixed(2);
    inpunum3.value = (+inpunum1.value + 273.32).toFixed(2);
  } else if (inpunum2.dataset.id === e) {
    inpunum1.value = ((+inpunum2.value - 32) / 1.8).toFixed(2);
    inpunum3.value = (+inpunum2.value - 32) / 1.8 + 273.32;
  } else {
    inpunum1.value = (+inpunum3.value - 273.32).toFixed(2);
    inpunum2.value = ((+inpunum3.value - 273.32) * 1.8 + 32).toFixed(2);
  }
}

inpunum1.addEventListener("change", (e) => {
  console.log();
  myFunction(e.target.dataset.id);
});
inpunum2.addEventListener("change", (e) => {
  console.log();
  myFunction(e.target.dataset.id);
});
inpunum3.addEventListener("change", (e) => {
  console.log();
  myFunction(e.target.dataset.id);
});
