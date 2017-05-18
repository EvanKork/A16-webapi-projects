var str = 'http://newsapi.org/v1/articles?source=ign&sortBy=latest&apiKey=4bff6b538cde4e5d8e6797f89015c017';

function createItem(data) {
    var blockItem = $('<div/>').addClass('col-sm-6 col-md-4 col-lg-3 api');
    var title = $('<h3/>').text(data.title);
    var img = $('<img src="'+data.urlToImage+'"/>');
    var pDescr = $('<p/>').text(data.description);
    var a = $('<a href="'+data.url+'"/>').text('read more...');
    var pAuthor = $('<p/>').text(data.author);
    var date = $('<p/>').text(data.publishedAt);
    blockItem.append(title).append(img).append(pDescr).append(a).append(pAuthor).append(date);
    return blockItem;
}


function createItems(data) {
    var items = [];
    $.each(data.articles, function (key, val) {
        items.push(createItem(val));
    });
    return items;
}

var answer = function (data) {
    $('.min').append(createItems(data))
};

$.getJSON(str,answer);