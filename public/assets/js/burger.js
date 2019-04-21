// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id);

    var updateDevoured = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: updateDevoured
    }).then(function() {
      console.log("Burger Devoured");
      location.reload();
    });
  });

  $(".burger-add").on("click", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burgerInput")
        .val()
        .trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("Created new burger");
      location.reload();
    });
  });
});
