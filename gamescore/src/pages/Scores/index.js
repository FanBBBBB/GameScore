import { Card, Avatar, Menu, Select, Space, Input } from "antd";
import "./index.scss";
const { Search } = Input;
const { Meta } = Card;

// let gamelist = [
//   {Input
//     name: "Game1",
//     score: 9.5,
//     gameimg:
//       "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
//     platformimg: "https://xsgames.co/randomusers/avatar.php?g=pixel",
//     date: "xxxx-xx-xx",
//   },
// ];

// ↑真正的gamelist，等爬取的数据
// ↓虚假的gamelist
let gamelist = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
];

const items = [
  {
    label: "首页",
    key: "index",
  },
  {
    label: "评分",
    key: "score",
  },
];

function Gamescorelist(games) {
  const count = games.length;
  const divs = Array.from({ length: count }, (_, index) => (
    <div className="gamecard" key={index}>
      <div className="score">
        <p className="scorevalue">4.5</p>
      </div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta
          avatar={
            <Avatar src="https://www.pinclipart.com/picdir/middle/100-1003109_steam-clip-art.png" />
          }
          title={"GAME " + games[index]}
          description="xxxx-xx-xx发售"
        />
      </Card>
    </div>
  ));
  return <div className="games">{divs}</div>;
}

const Scores = () => {
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
          // onSearch={onSearch}
        />
      </div>
      {Gamescorelist(gamelist)}
    </div>
  );
};

export default Scores;
