// main.js

// Define an array to hold the bio information for each team member
const teamMembers = [
  {
    name: 'Kirk Caspe',
    image: 'images/kirk.jpg',
    bio: 'Kirk is a talented developer with a passion for creating beautiful and intuitive user experiences. When he\'s not coding, he can be found hiking in the mountains or playing board games with his family.',
  },
  {
    name: 'Nikolai Meijer',
    image: 'images/nik.jpg',
    bio: 'Nikolai is a skilled designer who loves to create stunning visuals that bring brands to life. He spends his free time traveling and taking photos of the world around him.',
  },
];

// Get references to the name, bio, and image elements
const nameElement = document.querySelector('.team-member-name');
const bioElement = document.querySelector('.team-member-bio');
const imageElement = document.querySelector('.team-member-image');

// Get references to the buttons and add click event listeners to each one
const buttons = document.querySelectorAll('.team-member-button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Get the index of the clicked button from its data-member attribute
    const index = button.dataset.member;
    
    // Update the name, bio, and image elements with the data for the clicked team member
    nameElement.textContent = teamMembers[index].name;
    bioElement.textContent = teamMembers[index].bio;
    imageElement.src = teamMembers[index].image;
  });
});
