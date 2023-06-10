import { UserOutlined } from '@ant-design/icons';
import { Col, Row, Avatar, Button, Input, Rate} from "antd";
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
                    User name
            </Col>
            <Col span={20}/>
            <Col span={4}>
                <img className='mainscore' width={24} height={24} src={[require("../../assets/score_icon.png")]}></img>
                    <img className='mainstar' width={24} height={24} src={[require("../../assets/collect_icon.png")]}></img>
                    <img className='mainsettings' width={24} height={24} src={[require("../../assets/settings_icon.png")]}></img>
            </Col>
        </Row>
        <div className="searchbar">
            <Button className='largebtn' type="text" style={{backgroundColor:'darkred'}}>
                <p>主页</p>
            </Button>
            <Button className='largebtn' type="text" onClick={goToScore}>
                <p>评分</p>
            </Button>
            <Input className='Input' placeholder="搜索游戏" ></Input>
            <img className='searchicon' width={30} height={30} src={[require("../../assets/search_icon.png")]}></img>
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
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
                            </div>
                        </div>
                        <div className='game'>
                            <div className='ranklabel'>
                            <p>2</p>
                            </div>
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
                            </div>
                        </div>
                        <div className='game'>
                            <div className='ranklabel'>
                            <p>3</p>
                            </div>
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
                            </div>
                        </div>
                        <div className='game'>
                            <div className='ranklabel'>
                            <p>4</p>
                            </div>
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
                            </div>
                        </div>
                        <div className='game'>
                            <div className='ranklabel'>
                            <p>5</p>
                            </div>
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
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
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
                            </div>
                        </div>
                        <div className='game'>
                            <div className='ranklabel'>
                            <p>2</p>
                            </div>
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
                            </div>
                        </div>
                        <div className='game'>
                            <div className='ranklabel'>
                            <p>3</p>
                            </div>
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
                            </div>
                        </div>
                        <div className='game'>
                            <div className='ranklabel'>
                            <p>4</p>
                            </div>
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
                            </div>
                        </div>
                        <div className='game'>
                            <div className='ranklabel'>
                            <p>5</p>
                            </div>
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
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
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
                            </div>
                        </div>
                        <div className='game'>
                            <div className='ranklabel'>
                            <p>2</p>
                            </div>
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
                            </div>
                        </div>
                        <div className='game'>
                            <div className='ranklabel'>
                            <p>3</p>
                            </div>
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
                            </div>
                        </div>
                        <div className='game'>
                            <div className='ranklabel'>
                            <p>4</p>
                            </div>
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
                            </div>
                        </div>
                        <div className='game'>
                            <div className='ranklabel'>
                            <p>5</p>
                            </div>
                            <img className='gamepicture' width={90} height={90} src={[require("../../assets/pz2.png")]}></img>
                            <div className='game-discription'>
                                <p style={{'font-size': 20,'lineHeight': 0}}>植物大战僵尸2</p>
                                <p style={{'font-size': 15,'color': 'darkgray'}}>休闲塔防</p>
                                <Rate className='rate' allowHalf defaultValue={4.5}></Rate>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
     </div>
     </div>
)
}
export default Layout