function newDate()
{
  return new Date().getFullYear();
}
document.onload=document.getElementById('autoDate').innerHTML='-'+newDate();
