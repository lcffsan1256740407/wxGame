import {
	DataBus
} from './dataBus'
import {
	GameMap
} from './runtime/gameMap'
import {
	Player
} from './player/player'
import {
	Score
} from './player/score'
import {
	Music
} from './runtime/music'
// 整合JS文件
export class Main {
	constructor() {
		this.init()
	}
	// 初始化
	init() {
		// 1.实例DataBus
		this.dataBus = new DataBus()
		// 2.实例地图
		this.gameMap = new GameMap()
		// 3.实例玩家
		this.player = new Player()
		// 4.实例音乐
		this.music = new Music()
		// 5.实例得分
		this.score = new Score()
		// 调用开始游戏函数
		this.startGame()
	}
	// 开始游戏
	startGame() {
		if (this.dataBus.gameStart) {
			// 1.绘制地图
			this.gameMap.render()
			// 2.绘制玩家
			this.player.render()
			// 3.播放背景音乐
			// this.music.playBgm()
			// 4.绘制得分
			this.score.render()
			// 重绘时执行回调函数
			requestAnimationFrame(() => this.startGame())
		}
	}
}