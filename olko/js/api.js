var str = 'http://newsapi.org/v1/articles?source=ign&sortBy=latest&apiKey=4bff6b538cde4e5d8e6797f89015c017';

var ansver = function (data) {
    var items = [];
    $.each(data.articles, function (key, val) {
        items.push('' +
            '<div class="col-sm-6 col-md-4 col-lg-3 api">' +
            '<h3>'+val.title+'</h3>' +
            '<img src="'+val.urlToImage+'">' +
            '<p>'+val.description+'</p>' +
            '<a href="'+val.url+'">...read more.</a>' +
            '<p>'+val.author+'  '+val.publishedAt+'</p>'+
            '</div>');
        return items;
    });

    push(items);
};

function push(items) {
    $('<p/>', {
        'class': 'my-new-list',
        html: items.join('')
    }).appendTo('.min');
}