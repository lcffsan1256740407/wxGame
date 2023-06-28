import {
	DataBus
} from '../dataBus'
const dataBus = new DataBus()

export class Player {
	constructor() {
		this.img = wx.createImage()
		this.img.src = 'images/player/player.png'
		this.imgWidth = 30
		this.imgHeight = 30
		this.x = 20
		this.y = dataBus.canvas.height/2
	}
	render() {
		// 调用canvas上下文对象中的drawImage画图方法
		dataBus.ctx.drawImage(this.img,this.x,this.y,this.imgWidth,this.imgHeight)
	}
}