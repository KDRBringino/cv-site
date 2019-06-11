function navtop(){
  document.getElementById('top').scrollIntoView({behavior:'smooth'});
}

function navmiddle(){
  document.getElementById('middle').scrollIntoView({behavior:'smooth'});
}

function navbot(){
  document.getElementById('bot').scrollIntoView({behavior:'smooth'});
}

$(document).ready = function () {
window.scrollTop(0);
};
