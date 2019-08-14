// ---------------選取元素---------------

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// ---------------建立功能---------------

// 播放功能，注意video僅有paused屬性而沒有play屬性，所以用paused來操作按鈕
function toggle_play() {
  return video.paused ? video.play() : video.pause()
}

// 更新按鈕，撥放時將按鈕變更為暫停鍵，反之則恢復為撥放紐
function update_button() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// skip按鈕，利用data-attribute去操作元素 比用value來得優秀一些
function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

// 音量、播放速度控制
function handleRangeBar() {
  video[this.name] = this.value;
}

// 進度條控制-隨時間更新
function handleProgressBar() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

// 進度條控制-滑鼠拖曳
function scrub(e) {
  console.log(e.offsetX);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime
}

// ---------------設定監聽器---------------

//播放
toggle.addEventListener('click', toggle_play)
video.addEventListener('play', update_button)
video.addEventListener('pause', update_button)
video.addEventListener('timeupdate', handleProgressBar)

//快進、快退
skipButtons.forEach(buttons => {
  buttons.addEventListener('click', skip)
})

//音量、播放速度控制
ranges.forEach(ranges => {
  ranges.addEventListener('change', handleRangeBar)
  ranges.addEventListener('mousemove', handleRangeBar)
})

//進度條控制
let mouseDown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e))