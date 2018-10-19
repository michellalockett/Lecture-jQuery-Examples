/*$('.button-class').click(function() {
    console.log('A button with class "button-class" was clicked.');
});*/


function addListItem() {
    let list = document.getElementById('grocery-list');
    let item = document.createElement('li');
    item.innerText = 'Milk and Bread';
    list.appendChild(item);
}

$('#button-id').click(function(){
    $('#grocery-list').append('<li> Apples and Oranges</li>');
});


//Don't understand, color isn't working
$('#style-me').click(function() {
    $('.red').css('color', 'red');
});



