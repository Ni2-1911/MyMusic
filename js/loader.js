fetch('https://api.kanye.rest/')
.then(data => data.json())
.then(Data => {
    const Text = Data.quote;
    const quote_load = document.getElementById('quote_load');

    quote_load.innerHTML = Text;
})

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
});