// 参考 https://github.com/ustbhuangyi/lyric-parser/blob/master/src/index.js
const getTime = (timeStr) => {
  // console.log(timeStr)
  const [minutes, seconds] = timeStr.split(':');
  // console.log(typeof minutes, typeof seconds, minutes, seconds)
  // console.log(minutes * 60000 + seconds * 1000);
  return minutes * 60000 + seconds * 1000;
};

export default class LyricParser {
  constructor(lrc) {
    this.lrc = lrc;
    this.lines = []; 
    // 当前索引
    this.curLine = 0;
    // 执行逻辑
    this._init();
  }

  _init() {
    this._initLines();
  }

  _initLines() {
    const rows = this.lrc.split('\n');
    // console.log(rows)
    for (let row of rows) {
      const rowLrcArray = row.split(']');
      for(let i = 0; i < rowLrcArray.length -1; i++) {
        this.lines.push({
          time: getTime(rowLrcArray[i].replace('[', '')),
          txt: rowLrcArray[rowLrcArray.length - 1]
        });
      }
    }

    this.lines.sort((a, b) => {
      return a.time - b.time;
    });

  }

  _findCurLine(time) {
    for(let i = 0; i < this.lines.length; i++) {
      if(time <= this.lines[i].time) {
        return i
      }
    }
  }

  getIndex(time) {
    return this._findCurLine(time);
  }
}
