// 采取单例模式
let instance = null

// 全局数据存储
export class DataBus {
	constructor() {
		if (instance) {
			return instance
		}
		instance = this

		// 1.canvas及其2d上下文对象
		this.canvas = wx.createCanvas();
		this.ctx = this.canvas.getContext('2d');
		this.ctx.fillStyle="#1f52b7";
		// 2.游戏是否开启
		this.gameStart = true
	}
}