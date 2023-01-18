const dialog = document.getElementById("dialog");
const showDialogBtn = document.getElementById("showDialog");

showDialogBtn.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("close", () => {
  console.log(dialog.returnValue);
});
