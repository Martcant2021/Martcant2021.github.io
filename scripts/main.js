function myFunction() {

  var x = document.getElementById("myTopnav");
  if (x.className === "navbar-menu navbar-end") {
    x.className += " is-active";
  } else {
    x.className = "navbar-menu navbar-end";
  }

  var y = document.getElementById("nav_burger");
  if (y.className === "navbar-burger") {
    y.className += " is-active";
  } else {
    y.className = "navbar-burger";
  }x


}

function moreMenu() {
  var z = document.getElementById("more_menu");
  if (z.className === "navbar-item has-dropdown") {
    z.className += " is-active";
  } else {
    z.className = "navbar-item has-dropdown";
  }
}


