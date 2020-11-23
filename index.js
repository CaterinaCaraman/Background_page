  let colors = ["#f5e90c", "#17961b", "#111211", "#1310de", "#ed6f07", "#ed07e2"];
  
  //myDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    function changeColor() {
      var randomColor = Math.floor(Math.random()*(colors.length));
          document.getElementById("randomColor").innerHTML = colors[randomNumber];
      document.body.style.backgroundColor = changeColor;
      document.getElementById("randomColor").style.backgroundColor = "yellow";
      }

