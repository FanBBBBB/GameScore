import { Card, Avatar } from "antd";
import "./index.scss";

const { Meta } = Card;
const Scores = () => {
  return (
    <div className="games">
      <div className="gamecard">
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
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="《游戏名》"
            description="xxxx-xx-xx发售"
          />
        </Card>
      </div>
    </div>
  );
};

export default Scores;
