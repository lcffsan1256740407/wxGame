let instance = null
// 音乐管理
export class Music{
	constructor(){
		if(instance){
			return instance
		}
		instance = this

		// 1.背景音乐
		this.bgmAudio = wx.createInnerAudioContext()
		this.bgmAudio.src = 'audios/bgMusic.mp3'
		this.bgmAudio.loop = true

	}
	// 播放背景音乐
	playBgm(){
		this.bgmAudio.play()
	}

}