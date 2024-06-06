window.addEventListener("load", function() {
    var hal1 = document.querySelector(".hal-1");
    if (hal1) {
        hal1.scrollIntoView();
    }
});

document.getElementById('btn-scroll').addEventListener('click', function(){
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'scroll';
    document.getElementById('hal-2').scrollIntoView({behavior: 'smooth'});
})

// ini untuk hitung mundur hari ke d-day

var D_day = new Date("June 30, 2098 10:00:00").getTime();

var countdown = setInterval(function() {
    var now = new Date().getTime();

    var selisihwaktu = D_day - now;

    var hari = Math.floor(selisihwaktu / (1000 * 60 * 60 *24));
    var jam = Math.floor((selisihwaktu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var menit = Math.floor((selisihwaktu % (1000 * 60 * 60)) / (1000 * 60));
    var detik = Math.floor((selisihwaktu % (1000 * 60)) / 1000);

    document.getElementById("hari").innerHTML = hari + "<br> hari";
    document.getElementById("jam").innerHTML = jam + "<br> jam";
    document.getElementById("menit").innerHTML = menit + "<br> menit";
    document.getElementById("detik").innerHTML = detik + "<br> detik";

    if(selisihwaktu < 0){
        clearInterval(countdown);
        document.getElementById("hari").innerHTML = "EXPIRED";
        document.getElementById("jam").innerHTML = "";
        document.getElementById("menit").innerHTML = "";
        document.getElementById("detik").innerHTML = "";
    }
}, 1000);
