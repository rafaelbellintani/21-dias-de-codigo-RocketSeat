window.onload = () => {
  var i = 0;
  var tag = document.getElementById('text')
  var html = tag.innerHTML;
  tag.setAttribute("data", html);
  var txt = tag.getAttribute("data");
  var speed = 400;

  function typeWriter() {
    if (i <= txt.length) {
      document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();

  document.getElementById('button-restart').addEventListener('click', () => {
    typeWriter();
  })
}

