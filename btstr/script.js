$.get("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=46b" +
    "7ef31f1994ffd9734eea45c8a9b2c", function (data) {

    var ob_json = JSON.parse(JSON.stringify(data));

    function content(count_articles) {
        var print_str = "";
        var data_publication = new Date(Date.parse(ob_json.articles[count_articles].publishedAt));
        print_str += '<img class="row-bloks-img"' + 'src="' + ob_json.articles[count_articles].urlToImage + '">'; // photo
        print_str += '<div class="row-bloks-title"><strong>' + ob_json.articles[count_articles].title + '</strong></div>'; // title
        print_str += '<div class="row-bloks-author">' + ob_json.articles[count_articles].author + '</div>'; // autor
        print_str += '<div class="row-bloks-description">' + ob_json.articles[count_articles].description + '</div>'; //description
        print_str += '<div class="row-bloks-link-data-center"><div class="row-bloks-data">' + pars_data(ob_json.articles[count_articles].publishedAt) + '</div>'; // data
        print_str += '<a class="row-bloks-link" href="' + ob_json.articles[count_articles].url + '">more...</a></div>'; // link
        return print_str;
    }

    var str_html = "";
    str_html += '<div class="media-992">';
    var i;
    for (i = 0; i < 7; i++) {
        str_html += '<div class="content-bloks">';
        str_html += '<div class="row-bloks shadow">' + content(i) + '</div>';
        str_html += '<div class="row-bloks shadow">' + content(++i) + '</div>';
        str_html += '<div class="row-bloks shadow">' + content(++i) + '</div>';
        str_html += '<div class="row-bloks-last shadow">' + content(++i) + '</div>';
        str_html += '</div>';
    }
    str_html += '<div class="content-bloks">';
    str_html += '<div class="row-bloks shadow">' + content(8) + '</div>';
    str_html += '<div class="row-bloks shadow">' + content(9) + '</div>';
    str_html += '</div>';
    str_html += '</div>';

    str_html += '<div class="media-768">';
    for (i = 0; i < 10; i++) {
        str_html += '<div class="content-bloks">';
        str_html += '<div class="row-bloks shadow">' + content(i) + '</div>';
        str_html += '<div class="row-bloks-last shadow">' + content(++i) + '</div>';
        str_html += '</div>';
    }
    str_html += '</div>';

    str_html += '<div class="media-min">';
    for (i = 0; i < 10; i++) {
        str_html += '<div class="row-bloks shadow">' + content(i) + '</div>';
    }
    str_html += '</div>';

    $('.class_str_html').append(str_html);
});

function pars_data(data_for_pars) {
    var data = new Date(Date.parse(data_for_pars));
    var str_data = "";
    var i, str;

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



    // str_data += data.getMonth() + '.';
    // str_data += data.getFullYear() + ' ';
    //
    // str_data += data.getHours() + ':';
    // str_data += data.getMinutes() + '';
    // str_data += data.getSeconds() + '';

    // for(i=0; i<)

    return str_data;
}

//
// var str = "1";
//
// if(!str.match(/\d\d/))
//     console.log( "!" );
// else
//     console.log( "else" );
//
//
