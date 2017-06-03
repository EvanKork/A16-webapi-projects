function sending_request(ulr, callback) {
    $.get(ulr, function (data) {
        callback(JSON.parse(JSON.stringify(data)));
    });
}

sending_request("https://newsapi.org/v1/articles?source=the-next-web&sortBy=" +
    "latest&apiKey=46b7ef31f1994ffd9734eea45c8a9b2c", function (ob_json) {

    function createContent(count_articles) {

        this.photo = $('<img/>', {
            src: ob_json.articles[count_articles].urlToImage,
            class: 'row-bloks-img img-responsive'
        });

        this.title = $('<div/>', {
            text: ob_json.articles[count_articles].title,
            class: 'row-bloks-title'
        });

        this.autor = $('<div/>', {
            text: ob_json.articles[count_articles].author,
            class: 'row-bloks-author'
        });

        this.description = $('<div/>', {
            text: ob_json.articles[count_articles].description,
            class: 'row-bloks-description'
        });

        this.data = $('<div/>', {
            text: pars_data(ob_json.articles[count_articles].publishedAt),
            class: 'row-bloks-data'
        });

        this.link = $('<a/>', {
            text: "more...",
            class: 'row-bloks-link',
            href: ob_json.articles[count_articles].url
        });
    }

    var row_bloks = [];

    var media_min = $('<div/>', {
        class: 'media-min'
    });

    function createContents() {

        for (var i = 0; i < 10; i++) {

            row_bloks[i] = $('<div/>', {
               // class: 'row-bloks shadow'
                class: '.col-lg-3 col-md-4 col-sm-6 col-xs-12 api_wrap'
            });

            var api_art = $('<div/>', {
                class: 'api_art navbar-default'
            });

            var art = new createContent(i);
            $.each(art, function (key, i_ob) {
                $(api_art).append(i_ob);
            });

            $(row_bloks[i]).append(api_art);

            $(media_min).append(row_bloks[i]);

        }

        return media_min;
    }

    $('.api_object_html').append(createContents());

});


function pars_data(data_for_pars) {
    var data = new Date(Date.parse(data_for_pars));
    var str_data = "";
    var i, str;


    // for(var key in data){
    //     console.log(key);
    // }

    // for (var key in data){
    //     console.log(data[key]);
    // }
    // console.log(typeof new Date(Date.parse(data_for_pars)));


    str = data.getDate()+'';
    if(!str.match(/\d\d/)) str = '0'+str;
    str_data += str + '.';

    str = data.getMonth()+'';
    if(!str.match(/\d\d/)) str = '0'+str;
    str_data += str + '.';

    str_data += data.getFullYear() + ' ';

    str = data.getHours()+'';
    if(!str.match(/\d\d/)) str = '0'+str;
    str_data += str + ':';

    str = data.getMinutes()+'';
    if(!str.match(/\d\d/)) str = '0'+str;
    str_data += str + '';

    return str_data;
}
// ----------------< slider >----------------------------
var angle = 0;
function galleryspin(sign) {
    spinner = document.querySelector("#spinner");
    if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
    spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}
//-------------------------------------------------------
var timerId;

timerId = setInterval(function() {
    galleryspin();
}, 2000);

window.onblur = function(){
    console.log('закрыл');
    clearInterval(timerId);
}

window.onfocus = function(){
    console.log('на вкладке');
    timerId = setInterval(function() {
        galleryspin();
    }, 2000);
}




