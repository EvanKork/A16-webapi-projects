
  /* $.get( "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=46b" +
        "7ef31f1994ffd9734eea45c8a9b2c", function( data ) {

        var ob_json = JSON.stringify(data)
        ob_json = JSON.parse( ob_json );
        //console.log(ob_json);

        ob_json.articles.forEach(function(item) {

            $('body').append('<p><p>');

            for( key in item ) {
                var str_id = "#" + key;
                $('body').append('<div id="'+ str_id + '">' + key + ':  ' + item[key] + '</div>');
            }
        });
    });
*/

  $.get( "https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=46b" +
      "7ef31f1994ffd9734eea45c8a9b2c", function( data ) {

      var ob_json = JSON.stringify(data)
      ob_json = JSON.parse( ob_json );

      var count_articles = 1;
      ob_json.articles.forEach(function(item) {

          for( key in item ) {
              var str_id = "#" + key;
              $("#" + count_articles).append('<div id="'+ str_id + '">' +
                  key + ':  ' + item[key] + '</div>');
          }
          count_articles++;
      });
  });




