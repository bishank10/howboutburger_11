$("#placeOrder").on("submit", function (event) {
    event.preventDefault();
    var newOrder = {
      order: $("#placeOrder [name=burger_name]").val().trim()
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newOrder
    }).then(function () {

      location.reload();
      console.log("added a new order");
    })
  });


  $(".devourBurger").on("click", function () {

    var id = $(this).data("burgerid");
    
    $.ajax("/api/" + id, {
      type: "PUT"
    }).then(function () {
      location.reload();
      console.log("value changed to true")
    })
  });
