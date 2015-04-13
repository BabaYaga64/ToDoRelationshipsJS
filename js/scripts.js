$(document).ready(function() {
    $("form#tasks").submit(function(event) {
        event.preventDefault();

        var description = $("input#description").val();

        var newTask = { newDescription: description };

        $("ul#all-tasks").append("<li><span class='task'>" + newTask.newDescription + "</span></li>");

         $(".task").last().click(function() {
            $(".description").text(newTask.newDescription);
            $(this).hide("<li><span class='task'>" + newTask.newDescription + "</span></li>");
            $("#completed-tasks").append("<li>" + newTask.newDescription + "</li>");
        });

    });
});
