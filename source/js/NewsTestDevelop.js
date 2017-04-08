/**
 * Created by Gorom on 08.04.2017.
 */

var news;
news.name="https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=4dec6eb3fd4d40ef97f71cb2ba9c0f49";

$.getJSON('https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=4dec6eb3fd4d40ef97f71cb2ba9c0f49', function(data) {
    var items = [];
    $.each(data, function (key, val) {
        items.push(data.articles[0].title);
        items.push(data.articles[0].description);
        items.push('<a href="' + data.articles[0].url + '"><img width="250" src="' + data.articles[0].urlToImage + '">');
        items.push(data.articles[0].publishedAt);
    });

    $('<h3>', {
        html: items[0]
    }).appendTo('.google1');

    $('<p>', {
        html: items[1]
    }).appendTo('.google2');

    $('<p>', {
        html: items[2]
    }).appendTo('.google3');

    $('<p>', {
        html: items[3]
    }).appendTo('.google4');

});