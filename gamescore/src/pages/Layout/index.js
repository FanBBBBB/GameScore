import { UserOutlined } from '@ant-design/icons'
import { Col, Row, Avatar, Button, Input, Rate } from "antd"
import { useNavigate } from 'react-router-dom'
import './index.scss'
const Layout = () => {
    const navigate = useNavigate()
    const goToScore = () => {
        navigate('/score')
    }
    return (
        <div className='layout'>
            <div className="mainpage">
                <Row>
                    <Col span={20}>
                        <img className='logo' width={225} height={117} src={[require("../../assets/logo1.png")]}></img>
                    </Col>
                    <Col span={4}>
                        <Avatar className='avater' shape="square" size={48} icon={<UserOutlined />} />
                        张三
                    </Col>
                    <Col span={20} />
                    <Col span={4}>
                        <img className='mainscore' width={24} height={24} src={[require("../../assets/score_icon.png")]}></img>
                        <img className='mainstar' width={24} height={24} src={[require("../../assets/collect_icon.png")]}></img>
                        <img className='mainsettings' width={24} height={24} src={[require("../../assets/settings_icon.png")]}></img>
                    </Col>
                </Row>
                <div className="searchbar">
                    <Button className='largebtn' type="text" style={{ backgroundColor: 'darkred' }}>
                        <p>主页</p>
                    </Button>
                    {/* <Button className='largebtn' type="text" onClick={goToScore}>
                        <p>评分</p>
                    </Button> */}
                    <Input className='Input' placeholder="搜索游戏" ></Input>
                    <img className='searchicon' width={30} height={30} src={[require("../../assets/search_icon.png")]} onClick={goToScore}></img>
                </div>
                <div className='gamecontent'>
                    <Row>
                        <Col span={8}>
                            <div className='col1'>
                                <div className='subtitle'>
                                    <p>高分榜</p>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>1</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/img/d5aceaaba170f149ae13baa4ba88ddb2/d5aceaaba170f149ae13baa4ba88ddb2.jpg"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>古剑奇谭</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>角色扮演传统RPG</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={5}></Rate>
                                    </div>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>2</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/img/ba176ee5ea05babb2f6d8b23c5c191d4/ba176ee5ea05babb2f6d8b23c5c191d4.png"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>使命召唤</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>射击枪械</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={4.5}></Rate>
                                    </div>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>3</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gp-dev.cdn.bcebos.com/gp-dev/upload/file/source/082847128013a67c8bc4eb6e4ec6b31d.jpeg"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>泰坦陨落2</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>角色扮演ARPG</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={4.5}></Rate>
                                    </div>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>4</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/img/0eb2054350424473cb62225543471e6b/0eb2054350424473cb62225543471e6b.jpg"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>看门狗2</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>看门狗2</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={4}></Rate>
                                    </div>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>5</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/source/f4d96d8d88ace7e97c8f7002bdd21250.jpeg"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>反恐精英</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>射击枪械</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={4}></Rate>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className='col2'>
                                <div className='subtitle'>
                                    <p>热门榜</p>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>1</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gp-dev.cdn.bcebos.com/gp-dev/upload/file/source/7169b9f01db515c80d8401a7604b70c5.png"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>原神</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>角色扮演ARPG</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={4}></Rate>
                                    </div>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>2</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/img/d6dbddb2884f5ed2b002efb057f408d1/d6dbddb2884f5ed2b002efb057f408d1.png"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>我的世界</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>策略经营开放世界</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={4.5}></Rate>
                                    </div>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>3</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/source/d1da23d7f76691c2734b4ba4432c0999.jpeg"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>NBA 2K22</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>体育篮球</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={3.5}></Rate>
                                    </div>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>4</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/source/f4d96d8d88ace7e97c8f7002bdd21250.jpeg"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>反恐精英</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>射击枪械</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={4}></Rate>
                                    </div>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>5</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/source/96f4721566b75f355cff144a086127a5.jpeg"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>最终幻想7</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>角色扮演ARPG</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={4.5}></Rate>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className='col3'>
                                <div className='subtitle'>
                                    <p>最新游戏</p>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>1</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/source/ec295c1d427e9bf483d30dcd82040067.jpeg"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>艾尔登法环</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>角色扮演ARPG</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={4.5}></Rate>
                                    </div>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>2</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/source/39e6c800f1004662d0580f4101044505.jpeg"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>暖雪</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>动作</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={4.5}></Rate>
                                    </div>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>3</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/source/5582234e1f0307961075d96ab99f44a4.jpeg"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>拳皇15</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>动作格斗</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={4.5}></Rate>
                                    </div>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>4</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/source/9defa2beede63f672c2d7e58831f0ccc.jpeg"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>Dread Hunger</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>动作冒险</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={4}></Rate>
                                    </div>
                                </div>
                                <div className='game'>
                                    <div className='ranklabel'>
                                        <p>5</p>
                                    </div>
                                    <img className='gamepicture' width={90} height={90} src="https://gameplus-platform.cdn.bcebos.com/gameplus-platform/upload/file/source/a08ca4e5e5c3ececd45204d0da7e35f9.jpeg"></img>
                                    <div className='game-discription'>
                                        <p style={{ 'font-size': 20, 'lineHeight': 0 }}>消逝的光芒2</p>
                                        <p style={{ 'font-size': 15, 'color': 'darkgray' }}>策略经营开放世界</p>
                                        <Rate className='rate' disabled allowHalf defaultValue={4}></Rate>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div >
    )
}
export default Layout