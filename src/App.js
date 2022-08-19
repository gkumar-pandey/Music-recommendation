import { useEffect, useState } from "react";
import "./App.css";
import musicData from "./Components/Data";
import Footer from "./Components/Footer";

function App() {
  const [selectedMusicList, setSelectedMusicList] = useState([]);
  const geners = Object.keys(musicData);
  const onClickSelectGeners = (item) => {
    const musicList = musicData[item];

    setSelectedMusicList(musicList);
  };
  useEffect(() => {
    // useEffect update state value imediately becoz state is asynchronus
  }, [selectedMusicList]);

  return (
    <div>
      <nav className="nav-bar">
        <h1>🎧 Music Recommendation 🎧</h1>
      </nav>
      <div className="container">
        <div className="container-wrapper">
          <div className="geners">
            <p>🎵</p>
            {geners.map((item) => {
              return (
                <button
                  className="geners-btn"
                  value={item}
                  onClick={() => onClickSelectGeners(item)}
                  key={item}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className="music-list">
            {selectedMusicList.map((item, idx) => {
              {
                /* console.log(item); */
              }
              return (
                <div className="list-item" key={idx}>
                  <img src={item.img} style={style.img} />
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
const style = {
  img: {
    height: "100px",
    width: "100px",
    padding: "0.5rem",
  },
};
export default App;
