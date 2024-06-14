const teamMembers = [
  {
    Toy: 'Wooden Boat',
    img: 'images/boat.png',
    sport: 'Basketball',
    skills: ['Spped', 'Agility', 'Shooting'],
    strengths: 'Work Ethic',
    weaknesses: 'Shooting',
    biography:
      'Akron, Ohio, U.S. Individually, James is the all-time leading scorer in NBA history and ranks fourth in career assists, has won four Most Valuable Player (MVP) Awards, four Finals MVP Awards, three All-Star Game MVP Awards, and was named the inaugural NBA Cup MVP.'
  },
  {
      Toy: 'Wooden Car',
      img: 'images/car1.jpg',
      sport: 'Basketball',
      skills: ['Athleticism', 'Shooting', 'Dribbling'],
      strengths: 'Defensive Ability',
      weaknesses: 'Shooting Ability',
      biography:
        "Bronny James played college basketball for the USC Trojans. A consensus four-star recruit, James was named a McDonald's All-American as a senior in high school in 2023. He is the eldest child of professional basketball player LeBron James."
    },
    {
      Toy: 'Wooden Train',
      img: 'images/train7.jpg',
      sport: 'Basketball',
      skills: ['Shooting', 'Guarding', 'Dribbling'],
      strengths: 'Shooting Ability',
      weaknesses: 'Passing',
      biography:
        'Bryce James is the second child of National Basketball Association (NBA) player LeBron James and the younger brother of college basketball player Bronny James. James primarily plays the shooting guard position. As of March 2024 he is 6 feet 6 inches (1.98 m) tall and weighs 180 pounds (82 kg). Cleveland, Ohio, U.S.'
    },
    {
      Toy: 'Lionel Messi',
      img: 'images/plane2.jpg',
      sport: 'Soccer',
      skills: ['Dribbling', 'Shooting', 'Passing'],
      strengths: 'Ball control',
      weaknesses: 'Heading Ability',
      biography:
        "Born in Rosario, Argentina, in 1987, Lionel Messi is widely regarded as one of the greatest football players of all time, and his illustrious career proves why. The Argentinean footballer, who holds a record eight Ballon d'Or awards, has displayed his talent early on and has always been destined for greatness."
    },
    {
      Toy: 'Cristiano Ronaldo',
      img: 'images/puppy.jpg',
      sport: 'Soccer',
      skills: ['Dribbling', 'Spped', 'Shooting'],
      strengths: 'Chop',
      weaknesses: 'Defensive Ability',
      biography:
        "Cristiano Ronaldo (born February 5, 1985, Funchal, Madeira, Portugal) is a Portuguese football (soccer) forward who is one of the greatest players of his generation. The winner of five Ballon d'Or awards, he is among the sport's top goal scorers."
    },
    {
      Toy: 'Neymar',
      img: 'images/block2.jpg',
      sport: 'Soccer',
      skills: ['Dribbling', 'Passing', 'Shooting'],
      strengths: 'Ball control',
      weaknesses: 'Physical',
      biography:
        'Neymar, was born on February 5, 1992, in Mogi das Cruzes, a city near São Paulo. He grew up in a small house in a working-class neighborhood with his father, mother, and younger sister, Rafaella. Neymar started playing football after drawing inspiration from his father who was a professional footballer himself.'
    },
]

function generateTeamCards() {
  const teamCardsContainer = document.getElementById('teamCards')

  teamMembers.forEach(member => {
    const card = document.createElement('div')
    card.classList.add('col-md-4')

    //styling card based on sport:
    let backgroundColor

    
    card.style.backgroundColor = backgroundColor

    //Create a list of Skills with <li> tags
    const skillsList = member.skills
      .map(skill => `<li> ${skill} </li>`).join('')

     // Add padding
     card.style.padding = '15px 10px';

    card.innerHTML = `
          <div class = "card h-100">
              <div class = "card-header"> ${member.Toy}</div>
                <div class = "card-body">
                  <img style="width: 200px" src=${member.img}>
                  <p><strong>Sport:</strong> ${member.sport}</p>
                  <p><strong>Skills:</strong> 
                      <ul>
                          ${skillsList}
                      </ul>
                  </p>
                  <p><strong>Strengths:</strong> ${member.strengths}</p>
                  <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                  <p><strong>Biography:</strong> ${member.biography}</p>
              </div>
          </div>
        `

    teamCardsContainer.appendChild(card)
  })
}

window.onload = generateTeamCards()