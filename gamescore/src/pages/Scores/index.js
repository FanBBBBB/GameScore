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

function Gamescorelist(games) {
  const navigate = useNavigate();

  const count = games.length;
  const divs = Array.from({ length: count }, (_, index) => (
    <div className="gamecard" key={index}>
      <div className="score">
        <p className="scorevalue">{games[index].score}</p>
      </div>
      <Card
        onClick={() => navigate("/game", { state: games[index] })}
        style={{ width: 300 }}
        cover={<img alt="example" src={games[index].gameimg} />}
      >
        <Meta
          avatar={<Avatar src={games[index].platformimg} />}
          title={games[index].name}
          description={games[index].date + "发售"}
        />
      </Card>
    </div>
  ));
  return <div className="games">{divs}</div>;
}

const Scores = () => {
  const [gamelist, setGames] = useState([]);
  useEffect(() => {
    setGames([
      {
        name: "Game1",
        info: "这是静态数据中的第一款游戏，这是静态数据中的第一款游戏这是静态数据中的第一款游戏这是静态数据中的第一款游戏，这是静态数据中的第一款游戏。这是静态数据中的第一款游戏这是静态数据中的第一款游戏，这是静态数据中的第一款游戏，这是静态数据中的第一款游戏这是静。这是静态数据中的第一款游戏。",
        score: 9.5,
        gameimg:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        platformimg: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        date: "xxxx-xx-xx",
        gameurl: "https://www.baidu.com",
      },
      {
        name: "Game2",
        info: "这是静态数据中的第二款游戏，这是静态数据中的第一款游戏这是静态数据中的第一款游戏这是静态数据中的第一款游戏，这是静态数据中的第一款游戏。这是静态数据中的第一款游戏这是静态数据中的第一款游戏，这是静态数据中的第一款游戏，这是静态数据中的第一款游戏这是静。这是静态数据中的第一款游戏。",
        score: 9.7,
        gameimg:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        platformimg: "https://xsgames.co/randomusers/avatar.php?g=pixel",
        date: "xxxx-xx-xx",
        gameurl: "https://www.baidu.com",
      },
    ]);
  }, []);
  const navigate = useNavigate();
  const [gameName, setGameName] = useState("");

  const goTolayout = () => {
    navigate("/");
  };

  const onSearch = () => {
    axios
      .post("url", {
        gameName: gameName,
      })
      .then((response) => {
        console.log(response.data);
        setGames(response.data);
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

  return (
    <div>
      <Menu selectedKeys="score" mode="horizontal" items={items} theme="dark" />
      <div className="selecter">
        <div className="selectbox">
          <label>游戏类型：</label>
          <Select
            size="large"
            defaultValue="a"
            style={{
              width: 120,
            }}
            // onChange={handleChange}
            options={[
              {
                value: "a",
                label: "动作",
              },
              {
                value: "b",
                label: "解谜",
              },
              {
                value: "c",
                label: "全部",
              },
            ]}
          />
          <Space />
          <label>发售时间：</label>
          <Select
            size="large"
            defaultValue="d"
            style={{
              width: 120,
            }}
            // onChange={handleChange}
            options={[
              {
                value: "d",
                label: "一年内",
              },
              {
                value: "e",
                label: "三年内",
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
      {Gamescorelist(gamelist)}
    </div>
  );
};

export default Scores;
