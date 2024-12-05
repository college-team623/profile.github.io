var darkmode = document.getElementById("unique");
var counterSunMoon = 0;

function appearSunMoon()
{
  ++counterSunMoon;
  if(counterSunMoon % 2 == 0) {
    document.getElementById('sunMoon').innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
    darkmode.removeAttribute("class");
  }
  else {
    document.getElementById('sunMoon').innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    darkmode.setAttribute("class","darkmode");
  }
}
