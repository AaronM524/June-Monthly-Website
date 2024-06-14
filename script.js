const teamMembers = [
  {
    Toy: 'Wooden Boat',
    img: 'images/boat.png',
    sport: '$19.99',
    biography:
      'Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety.'
  },
  {
      Toy: 'Wooden Car',
      img: 'images/car1.jpg',
      sport: '$19.99',
      biography:
        "This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children."
    },
    {
      Toy: 'Wooden Train',
      img: 'images/train7.jpg',
      sport: '$19.99',
      biography:
        'Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design.'
    },
    {
      Toy: 'Toy Plane',
      img: 'images/plane2.jpg',
      sport: '$19.99',
      biography:
        "Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller."
    },
    {
      Toy: 'Toy Animal',
      img: 'images/puppy.jpg',
      sport: '$19.99',
      biography:
        "Cristiano Ronaldo (born February 5, 1985, Funchal, Madeira, Portugal) is a Portuguese football (soccer) forward who is one of the greatest players of his generation. The winner of five Ballon d'Or awards, he is among the sport's top goal scorers."
    },
    {
      Toy: 'Building Blocks',
      img: 'images/block2.jpg',
      sport: '$19.99',
      biography:
        'Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate'
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



     // Add padding
     card.style.padding = '15px 10px';

    card.innerHTML = `
          <div class = "card h-100">
              <div class = "card-header"> ${member.Toy}</div>
                <div class = "card-body card-styling">
                  <img class = "card-img style="width: 200px" src=${member.img}>
                  <p class="card-text"><strong class="card-text">Cost:</strong> ${member.sport}</p>
                  
                  <p class="card-text"><strong class="card-text">Description:</strong> ${member.biography}</p>
              </div>
          </div>
        `

    teamCardsContainer.appendChild(card)
  })
}

window.onload = generateTeamCards()