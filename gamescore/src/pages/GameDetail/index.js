import React from 'react'
import { useState } from 'react'
import { Rate, List, Avatar, Button } from 'antd'
import { useLocation } from 'react-router-dom'
import './index.scss'

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful']

function GameDetail () {
  const location = useLocation()
  const thisgame = location.state
  const [value, setValue] = useState(3)
  const gameTitle = thisgame.name
  const score = 4
  // const comments = [
  //   {
  //     id: 1,
  //     avatarUrl: 'https://example.com/user-avatar.png',
  //     content: '这个游戏很好玩！推荐给大家！',
  //     time: '2022-01-01 12:00:00',
  //   },
  //   // 其他评论...
  // ]

  return (
    <div className="page-container">
      <div className="content-container">
        <div className="header">
          <br />
          <br />
          <br />
          <br />
          <h1>{gameTitle}</h1>
        </div>
        <div className="body">
          <div className="cover-container">
            <img src={thisgame.gameimg} alt="游戏封面" className="cover-image" />
            <div className='desc'>
              <div className='desc-text'>{thisgame.info}</div>
              <div><span>官网：</span><a href={thisgame.gameurl}>{thisgame.gameurl}</a></div>
              <div className='desc-time'>{"发售时间：" + thisgame.date}</div>
              <div className="score-container">
                {/* <div>评分： <Rate allowHalf defaultValue={score} /></div>
                <span className="score-text">{score.toFixed(1)}</span> */}
                <Rate tooltips={desc} onChange={setValue} value={value} />

                {value ? <span className="score-text">{desc[value - 1]}</span> : ''}

                <span className="score-text">{`(5640人参与)`}</span>
              </div>
              <br />
              <div className='btn-box'>
                <Button>发表评分</Button>
              </div>

            </div>

          </div>
          {/* <List
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
          /> */}
        </div>
      </div>
    </div>
  )
}

export default GameDetail