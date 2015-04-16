$(document).ready(function() {
    event.preventDefault();

    $("form#create-lists").submit(function(event) {

        var inputtedList = $("input.create").val("");
        console.log(inputtedList);
        $("ul#lists").append("<li><span class='listitem'>" + inputtedList + "</span></li>");
    });

    $("form#tasks").submit(function(event) {

        var newList = { list: inputtedList, tasks: [] };

        $("#all-tasks").each(function() {
            var inputtedTask = $(this).find("input.new-task").val();

            var newTask = { description: inputtedTask };
            newList.tasks.push(newTask);

        });

        $("ul#all-tasks").append("<li><span class='task'>" + newTask.newDescription + "</span></li>");

         $(".task").last().click(function() {
            $(".description").text(newTask.newDescription);
            $(this).hide("<li><span class='task'>" + newTask.newDescription + "</span></li>");
            $("#completed-tasks").append("<li>" + newTask.newDescription + "</li>");
        });

    });
});
