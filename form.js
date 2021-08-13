const words = document.querySelector("#words");
const email = document.querySelector("#emailid");
const subjectCode = document.querySelector("#subjectcode");
const message = document.querySelector("#message");
const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  console.log("Sending data...");
  sendData();
});

function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  document.getElementById("number").value = value;
  words.textContent = `${value * 250} words`;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 1 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value;
  words.textContent = `${value * 250} words`;
}

const file = document.querySelector("#file");
file.addEventListener("change", (e) => {
  // Get the selected file
  const [file] = e.target.files;
  // Get the file name and size
  const { name: fileName, size } = file;
  // Convert size in bytes to kilo bytes
  const fileSize = (size / 1000).toFixed(2);
  // Set the text content
  const fileNameAndSize = `${fileName} - ${fileSize}KB`;
  document.querySelector(".file-name").textContent = fileNameAndSize;
});

function sendData() {
  let formData = {
    email: email.value,
    subjectCode: subjectCode.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  // xhr.open("POST", "https://asmt-server.herokuapp.com/mail");
  xhr.open("POST", "http://localhost:5000/mail");

  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("Email Sent Successfully");
      email.value = "";
      subjectCode.value = "";
      message.value = "";
    } else {
      alert("Something Went wrong");
    }
  };
  xhr.send(JSON.stringify(formData));
}
