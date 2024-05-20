import MusicMHTML from './MusicMHTML';
import './style.css';

const MusicMHTML = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const src = [
    // your source array
    // ...
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

  const displayTrack = (index) => {
    setActiveIndex(index);
  };

  return (
    <div id="card">
      <div id="display">
        <div id="header">
          <h1 id="title">{src[activeIndex][0]}</h1>
          <p>
            <span id="song_title">{src[activeIndex][1]}</span>
          </p>
        </div>
        <div id="image">
          <img src={src[activeIndex][3]} alt="" id="art" />
        </div>
        <audio controls src={src[activeIndex][2]} id="audio"></audio>
      </div>
      <div id="list">
        {src.map((s, index) => (
          <div
            key={index}
            className={`item ${index === activeIndex ? 'is-active' : ''}`}
            onClick={() => displayTrack(index)}
          >
            <h3>{index + 1}: {s[0]}</h3>
            <p>{s[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicMHTML;
