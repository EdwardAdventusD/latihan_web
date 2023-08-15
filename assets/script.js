document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.getElementById("downloadButton");

  downloadButton.addEventListener("click", function () {
    const cvPath = "assets/img/freya.jpg";

    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Freya Jayawardana.jpg";

    link.target = "_blank";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
