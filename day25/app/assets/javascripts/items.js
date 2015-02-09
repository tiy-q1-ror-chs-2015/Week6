// Add a new item!
$(document).on("click", "#add_item_button", function() {
  // Post the new item to the controller
  $.post("/items", $("#new_item_form").serialize(), function() {
    // Clear out the item name field on ajax success
    $("#item_name").val('');  
  })
  .fail(function(data) {
    alert(data.responseText)
  })
});

// Edit an existing item!
$(document).on("click", ".edit_item", function() {
  $.get('/items/' + $(this).data('item_id') + '/edit')
})

// Update an existing item!
$(document).on("click", "#update_item", function() {
  // Make sure the item name field isnt blank
  if ( $("#item_name").val() != '' ) {
    $.ajax({
      url: '/items/' + $(this).data('item_id'),
      type: "PATCH", 
      data: $("#edit_item_form").serialize(),
    });
  }
});

// Cancel editing an existing item!
$(document).on("click", "#cancel_edit", function() {
  $.get('items/new_form');
})

// Delete an item!
$(document).on("click", '.remove_item', function() {
  // Grab the parent <li> element so we can delete it later
  var item = $(this).parent();
  $.ajax({
    url: '/items/' + $(this).data('item_id'),
    type: "DELETE",
    dataType: 'script'
  })
  .done(function() {
    // Once the ajax completes successfully, remove the <li>
    item.remove();
  })
});

// Search for an item!
$(document).on("click", "#search_item_button", function() {
  $.get("/items/search", {'search_item_name': $("#search_item_name").val()})
});

$(document).on("click", ".show_item", function() {
  $.ajax({
    url: "/items/" + $(this).data('item_id'),
    type: "GET",
    dataType: 'json'
  })
  .done(function(data) {
    $("#search_item_name").val(data.name)
  })
})








