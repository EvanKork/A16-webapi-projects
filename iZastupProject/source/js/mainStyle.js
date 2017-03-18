function showMenu(){
$.getJSON( "http://data.gov.ua/view-dataset/dataset.json?dataset-id=d5fbaa7c-954d-4b06-9213-cf592c37ae4f&revison-id=94064", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

}