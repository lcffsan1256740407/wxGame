import {
	DataBus
} from '../dataBus'
const dataBus = new DataBus()

export class Score {
	constructor() {
		this.scoreNumber = 0
	}
	render() {
		dataBus.ctx.font='22px 华文彩云'
		dataBus.ctx.fillStyle='#fff'
		dataBus.ctx.fillText(`Count:${this.scoreNumber}`,20,50)
	}
}