document.addEventListener("DOMContentLoaded", function () {
    const door = document.getElementById("door");

    door.addEventListener("click", function () {
        // Check the current state and toggle the image
        if (door.src.includes("assets/freeRoomsLogo.png")) {
            door.src = "assets/freeroomsDoorClosed.png"; // Change to the open chest
        } else {
            door.src = "assets/freeRoomsLogo.png"; // Change back to the closed chest
        }
    });
});