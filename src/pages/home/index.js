/*
 * @Author: Dell_Di
 * @Date: 2020-01-17 15:11:11
 * @LastEditors  : Dell_Di
 * @LastEditTime : 2020-01-17 17:24:38
 * @FilePath: \myReact\src\pages\home\Home.js
 */
import React, { useReducer, useRef } from "react";
import "./index.css";

const mockJson = [
  {
    id: 0,
    title: "北京",
    img:
      "https://images.pexels.com/photos/1434580/pexels-photo-1434580.jpeg?cs=srgb&dl=high-rise-buildings-1434580.jpg&fm=jpg",
    description:
      "北京市，简称“京”，是中华人民共和国首都、也是中国4个直辖市之一；北京是国家中心城市、超大城市，全国政治中心、文化中心、国际交往中心、科技创新中心，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。"
  },
  {
    id: 1,
    title: "东京",
    img:
      "https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?cs=srgb&dl=illuminated-tower-2614818.jpg&fm=jpg",
    description:
      "北京市，简称“京”，是中华人民共和国首都、也是中国4个直辖市之一；北京是国家中心城市、超大城市，全国政治中心、文化中心、国际交往中心、科技创新中心，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。"
  },
  {
    id: 2,
    title: "纽约",
    img:
      "https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg?cs=srgb&dl=buildings-city-city-view-cityscape-597909.jpg&fm=jpg",
    description:
      "北京市，简称“京”，是中华人民共和国首都、也是中国4个直辖市之一；北京是国家中心城市、超大城市，全国政治中心、文化中心、国际交往中心、科技创新中心，是世界著名古都和现代化国际城市，也是中国共产党中央委员会、中华人民共和国中央人民政府和全国人民代表大会常务委员会的办公所在地。"
  }
];

const initialState = {
  currentIndex: 0,
  autoPlay: true,
  forward: true,
  interval: 5000
};

function reducer(state, action) {
  switch (action.type) {
    case "next":
      return {
        ...state,
        currentIndex: action.payload
      };
    case "prev":
      return {
        ...state,
        currentIndex: action.payload
      };
    case "init":
      return {
        ...state,
        currentIndex: action.payload
      };
    default:
      throw new Error("这里出错了哦");
  }
}

const Home = () => {
  // const slidesList = useRef(null);
  // console.log("TCL: Home -> slidesList", slidesList)
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentIndex, autoPlay, forward, interval } = state;
  const handleNextClicked = () => {
    if (currentIndex >= mockJson.length - 1) {
      dispatch({ type: "init", payload: 0 });
    } else {
      dispatch({ type: "next", payload: currentIndex + 1 });
    }
  };

  const handlePrevClicked = () => {
    if (currentIndex <= 0) {
      dispatch({ type: "init", payload: mockJson.length - 1 });
    } else {
      dispatch({ type: "prev", payload: currentIndex - 1 });
    }
  };

  // if (autoPlay) {
  //   setInterval(forward ? handleNextClicked : handlePrevClicked, interval);
  // }

  return (
    <div>
      <header>
        <div className="image-slider">
          <ListBanner
            // ref={slidesList}
            currentIndex={currentIndex}
            listBanner={mockJson}
          />
          <div id="prev" onClick={handlePrevClicked}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div id="next" onClick={handleNextClicked}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </header>
    </div>
  );
};

function ListBanner(props) {
  const { currentIndex, listBanner } = props;
  return listBanner.map((item, index) => (
    <ListItem
      key={item.id}
      item={item}
      currentName={currentIndex === index ? "slide current" : "slide"}
    />
  ));
}

function ListItem(props) {
  const { item, currentName } = props;
  return (
    <div className={currentName}>
      <img src={item.img} alt="" className="image" />
      <div className="content">
        <h1 className="title">{item.title}</h1>
        <p className="description">{item.description}</p>
      </div>
    </div>
  );
}
export default Home;
