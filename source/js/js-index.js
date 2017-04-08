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


$.getJSON('https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=4dec6eb3fd4d40ef97f71cb2ba9c0f49', function(data) {
    var items = [];
    $.each(data, function (key, val) {
        items.push(data.articles[0].title);
        items.push(data.articles[0].description);
        items.push('<a href="' + data.articles[0].url + '"><img width="250" src="' + data.articles[0].urlToImage + '">');
        items.push(data.articles[0].publishedAt);
    });

    $('<h3>', {
        html: items[0]
    }).appendTo('.cnn1');

    $('<p>', {
        html: items[1]
    }).appendTo('.cnn2');

    $('<p>', {
        html: items[2]
    }).appendTo('.cnn3');

    $('<p>', {
        html: items[3]
    }).appendTo('.cnn4');

});

$.getJSON('https://newsapi.org/v1/articles?source=focus&sortBy=top&apiKey=4dec6eb3fd4d40ef97f71cb2ba9c0f49', function(data) {
    var items = [];
    $.each(data, function (key, val) {
        items.push(data.articles[0].title);
        items.push(data.articles[0].description);
        items.push('<a href="' + data.articles[0].url + '"><img width="250" src="' + data.articles[0].urlToImage + '">');
        items.push(data.articles[0].publishedAt);
    });

    $('<h3>', {
        html: items[0]
    }).appendTo('.focus1');

    $('<p>', {
        html: items[1]
    }).appendTo('.focus2');

    $('<p>', {
        html: items[2]
    }).appendTo('.focus3');

    $('<p>', {
        html: items[3]
    }).appendTo('.focus4');

});
$.getJSON('https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=4dec6eb3fd4d40ef97f71cb2ba9c0f49', function(data) {
    var items = [];
    $.each(data, function (key, val) {
        items.push(data.articles[0].title);
        items.push(data.articles[0].description);
        items.push('<a href="' + data.articles[0].url + '"><img width="250" src="' + data.articles[0].urlToImage + '">');
        items.push(data.articles[0].publishedAt);
    });

    $('<h3>', {
        html: items[0]
    }).appendTo('.nationalGeographic1');

    $('<p>', {
        html: items[1]
    }).appendTo('.nationalGeographic2');

    $('<p>', {
        html: items[2]
    }).appendTo('.nationalGeographic3');

    $('<p>', {
        html: items[3]
    }).appendTo('.nationalGeographic4');

});

$.getJSON('https://newsapi.org/v1/articles?source=mtv-news-uk&sortBy=top&apiKey=4dec6eb3fd4d40ef97f71cb2ba9c0f49', function(data) {
    var items = [];
    $.each(data, function (key, val) {
        items.push(data.articles[0].title);
        items.push(data.articles[0].description);
        items.push('<a href="' + data.articles[0].url + '"><img width="250" src="' + data.articles[0].urlToImage + '">');
        items.push(data.articles[0].publishedAt);
    });

    $('<h3>', {
        html: items[0]
    }).appendTo('.mtvNewsUk1');

    $('<p>', {
        html: items[1]
    }).appendTo('.mtvNewsUk2');

    $('<p>', {
        html: items[2]
    }).appendTo('.mtvNewsUk3');

    $('<p>', {
        html: items[3]
    }).appendTo('.mtvNewsUk4');

});

$.getJSON('https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=4dec6eb3fd4d40ef97f71cb2ba9c0f49', function(data) {
    var items = [];
    $.each(data, function (key, val) {
        items.push(data.articles[0].title);
        items.push(data.articles[0].description);
        items.push('<a href="' + data.articles[0].url + '"><img width="250" src="' + data.articles[0].urlToImage + '">');
        items.push(data.articles[0].publishedAt);
    });

    $('<h3>', {
        html: items[0]
    }).appendTo('.theHindu1');

    $('<p>', {
        html: items[1]
    }).appendTo('.theHindu2');

    $('<p>', {
        html: items[2]
    }).appendTo('.theHindu3');

    $('<p>', {
        html: items[3]
    }).appendTo('.theHindu4');

});

