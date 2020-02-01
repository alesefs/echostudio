//slider
$('.bxslider').bxSlider({
    auto: true,
    captions: true,
    autoControls: false
});

//translate
i18n.init({fallbackLng: false, debug: true, fixLng: true, load: 'current'},
function(translation) {
    $('[data-i18n]').i18n();
    var appName = translation('app.name');
});
$('#btn-en').on('click', function() {
    i18n.setLng('en-US', {
        fixLng: true
    }, 
    function(translation){
        $('[data-i18n]').i18n();
    });
});
$('#btn-pt').on('click', function() {
    i18n.setLng('pt-BR', {
        fixLng: true
    },
    function(translation){
        $('[data-i18n]').i18n();
    });
});

//close dropdown
$('.menu-bar').click(function(){
    $(".pag-down").fadeToggle();
});
$('.pag-down').click(function(){
    $(".pag-down").fadeToggle();
});

//hide tabs
function aoCarregar() {
    document.getElementById('home').style.display = "none";
    document.getElementById('app-natal').style.display = "none";
    document.getElementById('zombie-monsters').style.display = "none";
    document.getElementById('air-guitar').style.display = "none";
}
function escondeTudo() {
    document.getElementById('home').style.display = "none";
    document.getElementById('app-natal').style.display = "none";
    document.getElementById('zombie-monsters').style.display = "none";
    document.getElementById('air-guitar').style.display = "none";
}
function abrirPag(nome) {
    escondeTudo();
    document.getElementById(nome).style.display = "block";
}