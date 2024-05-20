document.addEventListener('DOMContentLoaded', () => {
    /*
      All audio and images curtosey of archive.org. What a solid website!
    */
    const src = [
      [
        "John Coltrane", "My Favorite Things", "https://ia803202.us.archive.org/10/items/cd_john-coltrane-my-favorite-things_john-coltrane/disc1/01.%20John%20Coltrane%20-%20My%20Favorite%20Things_sample.mp3", "https://upload.wikimedia.org/wikipedia/en/9/9b/My_Favorite_Things.jpg"
      ],
      [
        "Stan Getz", "Winter Wonderland", "https://ia800100.us.archive.org/20/items/cd_west-coast-live_stan-getz-chet-baker/disc1/01.06.%20Stan%20Getz;%20Chet%20Baker%20-%20Winter%20Wonderland_sample.mp3",
        "https://ia800100.us.archive.org/20/items/cd_west-coast-live_stan-getz-chet-baker/cd_west-coast-live_stan-getz-chet-baker_itemimage.png"
      ],
      [
        "Monty Alexander", "Pure Imagination", "https://ia800107.us.archive.org/9/items/cd_steamin_monty-alexander/disc1/01.%20Monty%20Alexander%20-%20Pure%20Imagination_sample.mp3", "https://ia800107.us.archive.org/9/items/cd_steamin_monty-alexander/cd_steamin_monty-alexander_itemimage.png"
      ],
      [
        "Ella Fitzgerald", "Sleigh Ride", "https://ia800801.us.archive.org/27/items/cd_ella-wishes-you-a-swinging-christmas_ella-fitzgerald/disc1/05.%20Ella%20Fitzgerald%20-%20Sleigh%20Ride_sample.mp3", "https://ia800801.us.archive.org/27/items/cd_ella-wishes-you-a-swinging-christmas_ella-fitzgerald/cd_ella-wishes-you-a-swinging-christmas_ella-fitzgerald_itemimage.png"
      ],
      [
        "Dave Brubeck", "Greensleeves", "https://ia800705.us.archive.org/16/items/cd_a-dave-brubeck-christmas_dave-brubeck/disc1/07.%20Dave%20Brubeck%20-%20What%20Child%20Is%20This_%20%28Greensleeves%29_sample.mp3", "https://ia800705.us.archive.org/16/items/cd_a-dave-brubeck-christmas_dave-brubeck/cd_a-dave-brubeck-christmas_dave-brubeck_itemimage.png"
      ]
    ];
    
    for (x = 0; x < src.length; x++) {
      var s = src[x];
      var number = parseInt(x) + 1;
      var artist = document.createTextNode(number + ": " + s[0]);
      var track_name = document.createTextNode(s[1]);
      
      var listItem = document.createElement('div');
      var artist_text = document.createElement('h3');
      var track_text = document.createElement('p');
      
      artist_text.appendChild(artist);
      track_text.appendChild(track_name);
      
      listItem.appendChild(artist_text);
      listItem.appendChild(track_text);
      
      listItem.classList.add('item');
      listItem.dataset.index = x;
      
      document.getElementById('list').appendChild(listItem);
    }
    displayTrack(0);
    
    var listItems = document.querySelectorAll('.item');
    listItems.forEach(el => {
      el.onclick = () => {
        displayTrack(el.dataset.index);
      };
    });
    
    function displayTrack(x) {
      var active = document.querySelector('.is-active');
      if (active) {
        active.classList.remove('is-active'); 
      }
      var el = document.getElementById('list').children[x];
      el.classList.add('is-active');
      var s = src[x],
          artist = s[0],
          track = s[1],
          audio = s[2],
          img = s[3],
          number = parseInt(x) + 1;
      document.getElementById('title').innerText = number + ": " + artist;
      document.getElementById('song_title').innerText = track;
      var albumArt = document.getElementById('art');
      albumArt.src = img;
      albumArt.alt = artist + " " + track;
      document.getElementById('audio').src = audio;
    }
  })