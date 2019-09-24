function openMember(memberName) {
  var i;
  var x = document.getElementsByClassName("member");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(memberName).style.display = "block";
}
