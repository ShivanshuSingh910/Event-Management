// Simple role-based login simulation
function login() {
    const role = document.getElementById('role').value;
    document.getElementById('loginModal').style.display = 'none';

    // Hide all dashboards initially
    document.getElementById('adminDashboard').classList.add('d-none');
    document.getElementById('eventProviderDashboard').classList.add('d-none');
    document.getElementById('customerDashboard').classList.add('d-none');

    // Display the dashboard based on the selected role
    if (role === 'admin') {
        document.getElementById('adminDashboard').classList.remove('d-none');
    } else if (role === 'eventProvider') {
        document.getElementById('eventProviderDashboard').classList.remove('d-none');
    } else if (role === 'customer') {
        document.getElementById('customerDashboard').classList.remove('d-none');
    }
}

// Create Event Function (Event Provider)
function createEvent() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;

    // In a real app, data would be sent to the server here
    console.log("Event Created:", { title, description, date, category });
    alert("Event Created Successfully!");
}