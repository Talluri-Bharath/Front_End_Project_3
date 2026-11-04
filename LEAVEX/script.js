

function applyLeave() {

  

    let employeeName = prompt("Enter Employee Name:");

    if (employeeName === null || employeeName=== "") {

        alert("Employee name is required!");

        return;
    }

    let employeeId = prompt("Enter Employee ID:");

    if (employeeId === null || employeeId=== "") {

        alert("Employee ID is required!");

        return;
    }

    let department = prompt("Enter Department:");

    if (department === null || department === "") {

        alert("Department is required!");

        return;
    }


    let leaveType = prompt(
        "Select Leave Type:\n" +
        "1. Casual Leave\n" +
        "2. Sick Leave\n" +
        "3. Personal Leave"
    );

    if (leaveType === null) {

        alert("Leave request cancelled!");

        return;
    }

    if (leaveType === "1") {

        leaveType = "Casual Leave";

    } else if (leaveType === "2") {

        leaveType = "Sick Leave";

    } else if (leaveType === "3") {

        leaveType = "Personal Leave";

    } else {

        alert("Invalid Leave Type!");

        return;
    }


    let leaveDays = prompt("Enter Number of Leave Days:");

    if (leaveDays === null) {

        alert("Leave request cancelled!");

        return;
    }

    leaveDays = Number(leaveDays);

    if (isNaN(leaveDays) || leaveDays <= 0) {

        console.warn("Invalid Leave Days");

        alert("Please enter valid leave days!");

        return;
    }


    alert(
        "Employee Name: " + employeeName +
        "\nEmployee ID: " + employeeId +
        "\nDepartment: " + department +
        "\nLeave Type: " + leaveType +
        "\nLeave Days: " + leaveDays
    );


    let submitRequest = confirm(
        "Do you want to submit your leave request?"
    );

    if (submitRequest === true) {

        // Manager Approval

        let managerApproval = confirm(
            "Manager: Do you want to approve this leave?"
        );

        if (managerApproval === true) {

            document.getElementById("result").innerHTML =

                "<h3>Leave Request Details</h3>" +

                "<p>Employee Name: " +
                employeeName + "</p>" +

                "<p>Employee ID: " +
                employeeId + "</p>" +

                "<p>Department: " +
                department + "</p>" +

                "<p>Leave Type: " +
                leaveType + "</p>" +

                "<p>Leave Days: " +
                leaveDays + "</p>";

            document.getElementById("result").innerHTML +=

                "<h3>Leave Approved Successfully!</h3>";

            console.log("Employee Name:", employeeName);

            console.log("Employee ID:", employeeId);

            console.log("Department:", department);

            console.log("Leave Type:", leaveType);

            console.log("Leave Days:", leaveDays);

            alert("Leave Approved Successfully!");

        } else {

            document.getElementById("result").textContent =
                "Leave Request Rejected!";

            alert("Leave Request Rejected!");

        }

    } else {

        document.getElementById("result").textContent =
            "Leave Request Cancelled!";

        alert("Leave Request Cancelled!");

    }

}
