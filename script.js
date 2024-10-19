// Mock data for mentors (replace with actual data from http://cs.sliet.ac.in/faculty-staff/)
const mentors = [
    {
        id: 1,
        name: "Dr. Manoj Kumar Sachan",
        expertise: "Computer Networks, Network Security",
        availableSlots: [
            { date: "2023-10-20", times: ["10:00", "14:00"] },
            { date: "2023-10-21", times: ["11:00", "15:00"] },
        ]
    },
    {
        id: 2,
        name: "Dr. Birmohan Singh",
        expertise: "Artificial Intelligence, Machine Learning",
        availableSlots: [
            { date: "2023-10-20", times: ["09:00", "13:00"] },
            { date: "2023-10-21", times: ["10:00", "14:00"] },
        ]
    },
    // Add more mentors here
];

// Function to display mentor list
function displayMentors() {
    const mentorList = document.getElementById('mentor-list');
    mentorList.innerHTML = '';
    mentors.forEach(mentor => {
        const mentorCard = document.createElement('div');
        mentorCard.className = 'mentor-card';
        mentorCard.innerHTML = `
            <h3>${mentor.name}</h3>
            <p><strong>Expertise:</strong> ${mentor.expertise}</p>
        `;
        mentorList.appendChild(mentorCard);
    });
}

// Function to populate mentor select
function populateMentorSelect() {
    const mentorSelect = document.getElementById('mentor-select');
    mentorSelect.innerHTML = '<option value="">Select a mentor</option>';
    mentors.forEach(mentor => {
        const option = document.createElement('option');
        option.value = mentor.id;
        option.textContent = mentor.name;
        mentorSelect.appendChild(option);
    });
}

// Function to update available time slots based on selected mentor and date
function updateTimeSlots() {
    const mentorId = document.getElementById('mentor-select').value;
    const selectedDate = document.getElementById('date-select').value;
    const timeSelect = document.getElementById('time-select');
    timeSelect.innerHTML = '<option value="">Select a time</option>';

    if (mentorId && selectedDate) {
        const mentor = mentors.find(m => m.id === parseInt(mentorId));
        const availableSlot = mentor.availableSlots.find(slot => slot.date === selectedDate);
        if (availableSlot) {
            availableSlot.times.forEach(time => {
                const option = document.createElement('option');
                option.value = time;
                option.textContent = time;
                timeSelect.appendChild(option);
            });
        }
    }
}

// Event listeners
document.getElementById('mentor-select').addEventListener('change', updateTimeSlots);
document.getElementById('date-select').addEventListener('change', updateTimeSlots);

document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const mentorId = document.getElementById('mentor-select').value;
    const date = document.getElementById('date-select').value;
    const time = document.getElementById('time-select').value;

    if (mentorId && date && time) {
        alert(`Session booked successfully with Mentor ID ${mentorId} on ${date} at ${time}`);
        // Here you would typically send this data to a server to save the booking
    } else {
        alert('Please fill in all fields');
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    displayMentors();
    populateMentorSelect();
});