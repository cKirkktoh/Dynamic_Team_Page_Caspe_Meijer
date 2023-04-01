// main.js

const teamMembers = [
    {
      name: 'Kirk Caspe',
      image: 'images/kirk.jpeg',
      bio: 'A Filipino born and raised at the Kingdom Of Saudi Arabia and has such great ambitions for designs'
    },
    {
      name: 'Jane Doe',
      image: 'images/jane.jpeg',
      bio: 'Brilliant designer with a great sense of style'
    },
    {
      name: 'John Smith',
      image: 'images/john.jpeg',
      bio: 'Expert coder and problem solver'
    }
  ];
  
  
  const memberButtons = document.querySelectorAll('.team-member-button');
  const memberName = document.querySelector('.team-member-name');
  const memberImage = document.querySelector('.team-member-image');
  const memberBio = document.querySelector('.team-member-bio');
  
  function showMember(index) {
    const member = teamMembers[index];
    memberName.textContent = member.name;
    memberImage.src = member.image;
    memberBio.textContent = member.bio;
  }
  
  memberButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const memberIndex = button.dataset.member;
      showMember(memberIndex);
    });
  });
  