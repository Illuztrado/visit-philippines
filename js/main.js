document.getElementById('el-nido').onclick = showElNido;
document.getElementById('port-barton').addEventListener('click', showPortBarton);
document.getElementById('banaue').onclick = showBanaue;
document.getElementById('bohol').onclick = showBohol;
document.getElementById('vigan').addEventListener('click', showVigan);

function showElNido() {
    document.querySelector('body').style.background = 'url("images/el-nido.jpg") no-repeat';
    document.querySelector('body').style.backgroundSize = '100%';
    document.querySelector('body').style.transition = '2s';
}

function showPortBarton() {
    document.querySelector('body').style.background = 'url("images/port-barton.jpg") no-repeat';
    document.querySelector('body').style.backgroundSize = '100%';
    document.querySelector('body').style.transition = '2s';
}

function showBanaue() {
    document.querySelector('body').style.background = 'url("images/banaue.jpg") no-repeat';
    document.querySelector('body').style.backgroundSize = '100%';
    document.querySelector('body').style.transition = '2s';
}

function showBohol() {
    document.querySelector('body').style.background = 'url("images/bohol.jpg") no-repeat';
    document.querySelector('body').style.backgroundSize = '100%';
    document.querySelector('body').style.transition = '2s';
}

function showVigan() {
    document.querySelector('body').style.background = 'url("images/vigan.jpg") 0 8% no-repeat';
    document.querySelector('body').style.backgroundSize = '100%';
    document.querySelector('body').style.transition = '2s';
}