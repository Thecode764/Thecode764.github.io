function showYesNoCancelAlert(message) {
    var result = confirm(message);
    if (result) {
      alert("Go To New Page");
      document.getElementById("demo").style.color = "green";
      document.getElementById("demo").innerHTML = "green";
    } else if (result === false) {
      alert("Changed To Thecode746 Home Page");
      window.location.href = "https://thecode764.github.io";
    } else {
      alert("Changed To Home Page");
    }
  }
  showYesNoCancelAlert("Go To New Page?")
