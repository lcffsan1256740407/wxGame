import {
	DataBus
} from '../dataBus'
let dataBus = new DataBus()

// 游戏地图背景
export class GameMap {
	constructor() {
		// 图片对象
		this.img = wx.createImage();
		this.img.src = "images/map/background.png";
		this.imgWidth = null; // 图片宽度
		this.imgHeight = null; // 图片高度
		this.x = 0;
		this.y = 0;
		// 图片加载完毕回调
		this.img.onload = () => {
			this.imgWidth = this.img.width;
			this.imgHeight = this.img.height;
			this.init()
		}
		// 移动的速度(每次移动的像素)
		this.speadX = 2
	}
	// 绘制游戏地图背景(向左无限滚动)
	render() {
		// 横向移动背景图片
		this.moveX()
	}
	// 初始化图片
	init() {
		// 初始化图片
		// this.drawImage(this.img, 0, 0, this.imgWidth, this.imgHeight, -this.img.width, this.y, dataBus.canvas.width, dataBus.canvas.height)
	}
	// 画图
	drawImage(img, imgX, imgY, imgW, imgH, dx, dy, dw, dh) {
		dataBus.ctx.drawImage(img, imgX, imgY, imgW, imgH, dx, dy, dw, dh)
	}
	// 横坐标滚动
	moveX() {
		// 1.清除之前的画布遗留影响
		dataBus.ctx.clearRect(0, 0, dataBus.canvas.width, dataBus.canvas.height)
		// 2.更新偏移横坐标 = 水平坐标 + 速度
		this.x += this.speadX
		// 判断图片是否要播放完毕
		if (this.x >= this.img.width) {
			this.x = 0
		}
		// 3.绘制图片(主图和补全图)
		this.drawImage(this.img, 0, 0, this.imgWidth, this.imgHeight, -this.x, this.y, this.imgWidth, dataBus.canvas.height)
		this.drawImage(this.img, 0, 0, dataBus.canvas.width, this.imgHeight, this.img.width - this.x, this.y, dataBus.canvas.width, dataBus.canvas.height)
	}
}