console.log("Begin");
//
//
// $()
//
// replaces h1 content with 'Hello Friends'
//$('h1').html('Hello Friends')
//
// document ready function (old, script at bottom of page takes care of this)
// $(document).ready(function(){
// })
//
// append
var foods = ['apple', 'orange', 'peach']
for (var i=0; i < foods.length; i++) {
  $('ul').append(`<li>${foods[i]}</li>`)
}

//
// <div class="foods"><ul>...</ul></div>
$('ul').wrap('<div class="foods">')
//
//
$('input').first().val('Hello Friends') // listener
$('input').last().click(function() {
    console.log($('input').first().val());
});


$.getJSON("https://seasonal-sales-categories.firebaseio.com/.json", function(data){
  console.log(data);
  $('input').first().val(data.categories[0].name);
  console.log(data.categories[0].name);
})
