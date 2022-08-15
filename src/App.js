import "./app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faXmark,
  faDivide,
  faMinus,
  faEquals,
  faCircle,
  faDeleteLeft,
  faCalculator
} from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <div>
      <h1>
        Quick  - Calc <FontAwesomeIcon icon={faCalculator} color="blue"></FontAwesomeIcon>
      </h1>
      <div className="grid">
        <div className="output">
          <div className="previous">1,400</div>
          <div className="current">1,400</div>
        </div>
        <button className="two">A/C</button>
        <button>
          <FontAwesomeIcon icon={faDivide}></FontAwesomeIcon>
        </button>
        <button>
          <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
        </button>
        <button>9</button>
        <button>8</button>
        <button>7</button>
        <button>
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </button>
        <button>6</button>
        <button>5</button>
        <button>4</button>
        <button>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
        <button>3</button>
        <button>2</button>
        <button>1</button>
        <button>
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </button>
        <button className="two">0</button>
        <button>
          <FontAwesomeIcon icon={faCircle} size="2xs"></FontAwesomeIcon>
        </button>
        <button>
          <FontAwesomeIcon icon={faEquals} color="blue"></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}

export default App;
