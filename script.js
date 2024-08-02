$(document).ready(function() {
    $("#stdform").validate({
        rules: {
            mark: {
                required: true,
                number: true,
                min: 0,
                max: 100
            }
        },
        messages: {
            mark: {
                required: "Please enter your marks.",
                number: "Please enter a valid number.",
                min: "Marks cannot be less than 0.",
                max: "Marks cannot be more than 100."
            }
        },
        submitHandler: function(form) {
            // Get mark value
            const marks = parseInt($("#mark").val(), 10);

            let grade, result;

            if (marks >= 90 && marks <= 100) {
                grade = 'A+';
            } else if (marks >= 80 && marks <= 89) {
                grade = 'A';
            } else if (marks >= 70 && marks <= 79) {
                grade = 'B+';
            } else if (marks >= 60 && marks <= 69) {
                grade = 'B';
            } else if (marks >= 50 && marks <= 59) {
                grade = 'C+';
            } else if (marks >= 40 && marks <= 49) {
                grade = 'C';
            } else if (marks >= 30 && marks <= 39) {
                grade = 'D+';
            } else if (marks >= 20 && marks <= 29) {
                grade = 'D';
            } else {
                grade = 'E';
            }

            // Check pass or fail
            var value = (marks >= 30);
            var status = value ? "Passed" : "Failed";
            var color = value ? "green" : "red";
            result = 'Grade: <span style="color: ' + color + ';">' + grade + '</span><br> You have <span style="color: ' + color + ';">' + status + '</span>.';

            $("#result").html(result);

            // Prevent default form submission
            return false;
        }
    });
});
