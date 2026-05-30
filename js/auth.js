
function login(){
 localStorage.setItem('lg_user',document.getElementById('u').value||'demo');
 location.href='dashboard.html';
}
