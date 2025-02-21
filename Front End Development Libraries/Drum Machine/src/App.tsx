import './App.css'

function App() {

  const displaytext = (name: string) => {
    const display = document.getElementById("display")
    if (display) {
      display.innerText = name;
    }
  }

  const playAudio = (id: string, name: string) => {
    const audio = document.getElementById(id) as HTMLAudioElement;
    audio.currentTime = 0;
    displaytext(name);
    audio.play();
  }



  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    const soundMap: { [key: string]: string } = {
      Q: 'Heater-1',
      W: 'Heater-2',
      E: 'Heater-3',
      A: 'Heater-4',
      S: 'Clap',
      D: 'Open-HH',
      Z: "Kick-n'-Hat",
      X: 'Kick',
      C: 'Closed-HH',
    };
    if (soundMap[key]) {
      playAudio(key, soundMap[key]);
    }
  }

  window.addEventListener('keydown', handleKeyPress);

  return (
    <div id="drum-machine">
      <div id="display"></div>
      <button className='drum-pad' id="Heater-1" onClick={() => playAudio("Q", "Heater-1")}><audio className="clip" id="Q" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>Q</button>
      <button className='drum-pad' id="Heater-2" onClick={() => playAudio("W", "Heater-2")}><audio className="clip" id="W" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>W</button>
      <button className='drum-pad' id="Heater-3" onClick={() => playAudio("E", "Heater-3")}><audio className="clip" id="E" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>E</button>
      <button className='drum-pad' id="Heater-4" onClick={() => playAudio("A", "Heater-4")}><audio className="clip" id="A" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>A</button>
      <button className='drum-pad' id="Clap" onClick={() => playAudio("S", "Clap")}><audio className="clip" id="S" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>S</button>
      <button className='drum-pad' id="Open-HH" onClick={() => playAudio("D", "Open-HH")}><audio className="clip" id="D" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>D</button>
      <button className='drum-pad' id="Kick-n'-Hat" onClick={() => playAudio("Z", "Kick-n'-Hat")}><audio className="clip" id="Z" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>Z</button>
      <button className='drum-pad' id="Kick" onClick={() => playAudio("X", "Kick")}><audio className="clip" id="X" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>X</button>
      <button className='drum-pad' id="Closed-HH" onClick={() => playAudio("C", "Closed-HH")}><audio className="clip" id="C" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>C</button>
    </div>
  )
}

export default App
