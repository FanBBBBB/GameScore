import React from 'react';
import { Rate, List, Avatar, Button } from 'antd';
import './index.scss';

function GameDetailPage() {
  const gameTitle = '生化危机4: 重制版';
  const coverImageUrl = require("../../assets/202302241620479544_small.png");
  const score = 4;
  const comments = [
    {
      id: 1,
      avatarUrl: 'https://example.com/user-avatar.png',
      content: '这个游戏很好玩！推荐给大家！',
      time: '2022-01-01 12:00:00',
    },
    // 其他评论...
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <div className="header">
          <h1>{gameTitle}</h1>
        </div>
        <div className="body">
          <div className="cover-container">
            <img src={coverImageUrl} alt="游戏封面" className="cover-image" />
            <div className='desc'>
              <div className='desc-text'>
                前所未有的生化灾难“浣熊市事件”六年后......
                自事件中生还的里昂·斯科特·肯尼迪因其能力获得认可，成为直属于总统的特工。

                凭着多次执行任务累积了经验的里昂被派去营救被绑架的总统千金。
                里昂根据目击情报前往欧洲一条贫寒村庄，在那里看到的是疯狂的村民们。
                一场严酷的营救剧（生存恐怖）即将揭开帷幕。
              </div>
              <div><span>官网：</span><a href='https://www.residentevil.com/re4/zh-hans/'>https://www.residentevil.com/re4/zh-hans/</a></div>
              <div className='desc-time'>上市时间：2023-03-24</div>
              <div className="score-container">
                <div>评分： <Rate allowHalf defaultValue={score} /></div>  
                <span className="score-text">{score.toFixed(1)}</span>
                <span className="score-text">{`(5640人参与)`}</span>
              </div>
              <div className='btn-box'>
                <Button>发表评分</Button>
              </div>
              
            </div>
            
          </div>
          <List
            header={`${comments.length} 条评论`}
            itemLayout="horizontal"
            dataSource={comments}
            className="comment-list"
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                  title={item.content}
                  description={item.time}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default GameDetailPage;