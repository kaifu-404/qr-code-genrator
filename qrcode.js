const qrinput = document.getElementById("text");
const qrimg = document.getElementById("img");
const qrbutton = document.getElementById("genrate");

qrbutton.addEventListener('click', () => {
  const inputvalue = qrinput.value.trim();
  console.log(inputvalue);

  if (!inputvalue) {
    alert("Please enter a valid text or URL");
    return;
  } else {
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputvalue)}`;
    qrimg.alt = `QR code for ${inputvalue}`;
  }
});
