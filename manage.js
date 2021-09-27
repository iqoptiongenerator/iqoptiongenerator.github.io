function start(qualifiedName) {
    smooth();

    var hr_load = document.getElementById('hr_load');
    var hr_current = document.getElementById('hr_current');
    var n_buy = document.getElementById('n_buy');

    var data = new Date();
    data.setMinutes(data.getMinutes()+13);
    var horas = data.getHours();
    var minutos = data.getMinutes();

    hr_load.innerHTML = horas + 'h ' + minutos + 'min ';
    var inc = 102859;

    compras(n_buy, inc);

    setInterval(function () {
        c_data = new Date();
        c_data.setMinutes(minutos-c_data.getMinutes());
        c_minutos = c_data.getMinutes()
        segundos = 59-c_data.getSeconds();
        hr_current.innerHTML = '(00h ' + c_minutos + 'min ' + segundos + ' seg)';

        if (c_minutos <= 0) {
            alert('Pela alta taxa de vendas, decidimos prorrogar o desconto!');
            location.reload();
            n_buy.innerHTML = inc + ' compras';
        }

    }, 1000);
}

function smooth() {
    $('body a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 100
        }, 1000);
    });
}

function compras(n_buy, inc) {
    setInterval(function () {
        let min = Math.ceil(0);
        let max = Math.floor(3);
        inc += Math.floor(Math.random() * (max - min)) + min;

        setTimeout(function (){
            n_buy.style.fontWeight = 'normal';
        }, 2700);

        n_buy.innerHTML = inc.toLocaleString('pt-BR') + ' compras';
        n_buy.style.fontWeight = 'bold';
    }, 3000);
}