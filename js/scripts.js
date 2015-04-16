$(document).ready(function() {

    $("form#create-list").submit(function(event) {
        event.preventDefault();

        var inputtedList = $("input#create").val();

        var newList = {
            list: inputtedList,
            tasks: []
        };

        $("ol#lists").append("<li><span class='listitem'>" + inputtedList + "</span></li>");

        // $(".listitem").off("submit");
        $(".listitem").last().click(function() {

            $(".createtasks").show();
            $("#taskform").show();
            $(".list-name").text(newList.list);

            newList.tasks.forEach(function(task) {
                $(".show-tasks").append("<li>" + task.description + "</li>");

            });

            $("form#tasks").off("submit");

            $("form#tasks").submit(function(event) {
                var inputtedTask = $("input#description").val();
                var newTask = {
                    description: inputtedTask
                };
                newList.tasks.push(newTask);
                $(".show-tasks").empty();
                newList.tasks.forEach(function(task) {
                    $(".show-tasks").append("<li>" + task.description + "</li>");
                });
                event.preventDefault();

            });

        });

    });

});
