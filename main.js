//lay ra phan tu can thao tac tu DOM
const progress = document.getElementById("progess");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const steps = document.querySelectorAll(".step");

let currentActive = 1; //khoi taoi gia tri ban dau cua buoc dang hoat dong

//lang nghe su kien cho nut NEXT
next.addEventListener("click", () => {
  changeStep(1); //tang buoc len 1
});
previous.addEventListener("click", () => {
  changeStep(-1); //giam buoc len 1
});

function changeStep(step) {
  currentActive += step;

  update(); //cap nhat lai giao dien
}

function update() {
  //duyet qua cac phan tu cua danh sach steps
  steps.forEach((step, index) => {
    if (index < currentActive) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  previous.disabled = currentActive === 1;
  next.disabled = currentActive === steps.length;

  //cap nhat chieu rong cua thanh tien trinh
  progress.style.width = ((currentActive - 1) / (steps.length - 1)) * 100 + "%";
}
