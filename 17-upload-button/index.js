var uploadButton = document.querySelector(".upload-button");

uploadButton.addEventListener("click", () => {
  uploadButton.classList.add("uploading");
  setTimeout(() => {
    uploadButton.classList.replace("uploading", "uploaded");
  }, 5000);
});
