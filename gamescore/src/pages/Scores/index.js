import { Card, Avatar, Menu, Select, Space, Input } from "antd";
import axios from "axios";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const { Search } = Input;
const { Meta } = Card;

// let [gamelist, setGames] = useState([]);

// gamelist = [
//   {
//     name: "Game1",
//     info: "这是静态数据中的第一款游戏，这是静态数据中的第一款游戏这是静态数据中的第一款游戏这是静态数据中的第一款游戏，这是静态数据中的第一款游戏。这是静态数据中的第一款游戏这是静态数据中的第一款游戏，这是静态数据中的第一款游戏，这是静态数据中的第一款游戏这是静。这是静态数据中的第一款游戏。",
//     score: 9.5,
//     gameimg:
//       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     platformimg: "https://xsgames.co/randomusers/avatar.php?g=pixel",
//     date: "xxxx-xx-xx",
//     gameurl: "https://www.baidu.com",
//   },
//   {
//     name: "Game2",
//     info: "这是静态数据中的第二款游戏，这是静态数据中的第一款游戏这是静态数据中的第一款游戏这是静态数据中的第一款游戏，这是静态数据中的第一款游戏。这是静态数据中的第一款游戏这是静态数据中的第一款游戏，这是静态数据中的第一款游戏，这是静态数据中的第一款游戏这是静。这是静态数据中的第一款游戏。",
//     score: 9.7,
//     gameimg:
//       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     platformimg: "https://xsgames.co/randomusers/avatar.php?g=pixel",
//     date: "xxxx-xx-xx",
//     gameurl: "https://www.baidu.com",
//   }
// ];

// ↑真正的gamelist，等爬取的数据
// ↓虚假的gamelist
// let gamelist = [
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "11",
//   "12",
//   "13",
//   "14",
//   "15",
// ];

function Gamescorelist(games, type, score) {
  const navigate = useNavigate();

  const count = games.length;
  const divs = Array.from({ length: count }, (_, index) => {
    if (
      ((type === "a" && games[index].type[0] === "策") ||
        (type === "b" && games[index].type[0] === "动") ||
        type === "c") &&
      ((score === "d" && games[index].score >= 8) ||
        (score === "e" && games[index].score >= 5) ||
        score === "f")
    )
      return (
        <div className="gamecard" key={index}>
          <div className="score">
            <p className="scorevalue">
              {games[index].score ? games[index].score : "0.0"}
            </p>
          </div>
          <Card
            onClick={() => navigate("/game", { state: games[index] })}
            style={{ width: 300 }}
            cover={<img alt="无图片" src={games[index].image_url ? games[index].image_url : "../assets/noimg.png"} />}
          >
            <Meta
              avatar={
                <Avatar src="https://www.pinclipart.com/picdir/middle/100-1003109_steam-clip-art.png" />
              }
              title={games[index].name}
              description={
                "发售时间：" +
                (games[index].release_date ? games[index].release_date : "未知")
              }
            />
          </Card>
        </div>
      );
  });
  return <div className="games">{divs}</div>;
}

const Scores = () => {
  const [gamelist, setGames] = useState([]);
  useEffect(() => {
    setGames([]);
  }, []);
  const navigate = useNavigate();
  const [gameName, setGameName] = useState("");

  const goTolayout = () => {
    navigate("/");
  };

  const onSearch = () => {
    // console.log(gameName)
    axios
      .post("http://127.0.0.1:8080/games/name", {
        name: gameName,
      })
      .then((response) => {
        console.log(response.data.data);
        setGames(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const items = [
    {
      label: (
        <span onClick={goTolayout} target="_blank" rel="noopener noreferrer">
          首页
        </span>
      ),
      key: "index",
    },
    {
      label: "评分",
      key: "score",
    },
  ];

  const [gametype, setType] = useState("c");
  const [gamescore, setGamescore] = useState("f");

  function typeChange(e) {
    console.log(e);
    setType(e);
  }
  function scoreChange(e) {
    console.log(e);
    setGamescore(e);
  }

  return (
    <div>
      <Menu selectedKeys="score" mode="horizontal" items={items} theme="dark" />
      <div className="selecter">
        <div className="selectbox">
          <label>游戏类型：</label>
          <Select
            size="large"
            defaultValue="c"
            style={{
              width: 120,
            }}
            onChange={typeChange}
            options={[
              {
                value: "a",
                label: "策略",
              },
              {
                value: "b",
                label: "动作",
              },
              {
                value: "c",
                label: "全部",
              },
            ]}
          />
          <Space />
          <label>评分范围：</label>
          <Select
            size="large"
            defaultValue="f"
            style={{
              width: 120,
            }}
            onChange={scoreChange}
            options={[
              {
                value: "d",
                label: "8分以上",
              },
              {
                value: "e",
                label: "5分以上",
              },
              {
                value: "f",
                label: "全部",
              },
            ]}
          />
        </div>
        <Search
          className="search"
          placeholder="请输入游戏名称"
          allowClear
          enterButton
          size="large"
          onSearch={onSearch}
          onChange={(e) => setGameName(e.target.value)}
        />
      </div>
      {Gamescorelist(gamelist, gametype, gamescore)}
    </div>
  );
};

export default Scores;
