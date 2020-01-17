/*
 * @Author: Dell_Di
 * @Date: 2020-01-17 15:11:11
 * @LastEditors  : Dell_Di
 * @LastEditTime : 2020-01-17 17:24:38
 * @FilePath: \myReact\src\pages\home\Home.js
 */
import React, { useReducer } from "react";
import "./index.css";

function init() {
  return {
    currentIndex: 0,
    autoPlay: true,
    forward: true,
    interval: 5000
  };
}
function reducer(state, action) {
  switch (action.type) {
    case "next":
      return {
        ...state,
        currentIndex: state.currentIndex + 1
      };
    case "prev":
      return {
        ...state,
        currentIndex: state.currentIndex - 1
      };
    default:
      throw new Error('这里出错了哦')
  }
}
const mockJson = [
  {
    id: 0,
    title: '北京',
    img: 'https://images.pexels.com/photos/1434580/pexels-photo-1434580.jpeg?cs=srgb&dl=high-rise-buildings-1434580.jpg&fm=jpg',
    description: '北京市，简称“京”，是中华人民共和国首都、也是中国4个直辖市之一；北京是国家中心城市、超大城市，全国政治中心、文化中心、国际交往中心、科技创新中心，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。'
  },
  {
    id: 1,
    title: '东京',
    img: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?cs=srgb&dl=illuminated-tower-2614818.jpg&fm=jpg',
    description: '北京市，简称“京”，是中华人民共和国首都、也是中国4个直辖市之一；北京是国家中心城市、超大城市，全国政治中心、文化中心、国际交往中心、科技创新中心，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。'
  },
  {
    id: 2,
    title: '纽约',
    img: 'https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?cs=srgb&dl=buildings-city-city-view-cityscape-597909.jpg&fm=jpg',
    description: '北京市，简称“京”，是中华人民共和国首都、也是中国4个直辖市之一；北京是国家中心城市、超大城市，全国政治中心、文化中心、国际交往中心、科技创新中心，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。'
  }
]

const Home = ({ initialState }) => {
  const prevRef = React.createRef();
  const nextRef = React.createRef();
  const slides = React.createRef();
  const [state, dispatch] = useReducer(reducer, initialState, init);
  // const [currentIndex, setCurrentIndex] = useState(true)
  // const [autoPlay, setAutoPlay] = useState(0)
  // const [forward, setForward] = useState(0)
  // const [interval, setInterval] = useState(0)
  // next.addEventListener("click", handleNextClicked);
  // prev.addEventListener("click", handlePrevClicked);
  return (
    <div>
      <header>
        <div className="image-slider">
          <div className="slide" ref={slides}>
            <img
              src="https://images.pexels.com/photos/1434580/pexels-photo-1434580.jpeg?cs=srgb&dl=high-rise-buildings-1434580.jpg&fm=jpg"
              alt=""
              className="image"
            />
            <div className="content">
              <h1 className="title">北京</h1>
              <p className="description">
                北京市，简称“京”，是中华人民共和国首都、也是中国4个直辖市之一；北京是国家中心城市、超大城市，全国政治中心、文化中心、国际交往中心、科技创新中心，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。
              </p>
            </div>
          </div>
          <div id="prev" ref={prevRef} onClick={}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div id="next" ref={nextRef} onClick={}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </header>
    </div>
  );

  function handleNextClicked() {
    let current = slides[currentIndex];
    current.classList.remove("current");
  
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
  
    slides[currentIndex].classList.add("current");
  }

  function handlePrevClicked() {
    let current = slides[currentIndex];
    current.classList.remove("current");
  
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
  
    slides[currentIndex].classList.add("current");
  }
  
};

export default Home;
