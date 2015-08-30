/* @flow */
export default {
  getToday():string {
    var today:Date = new Date()
		var year:string = `${today.getFullYear()}`
		var month:string = `${today.getMonth() + 1}` // 0 基，但是显示时不可能也 0 基
		var day:string = `${today.getDate()}`
		month = month.length < 2 ? `0${month}` : month
		day = day.length < 2 ? `0${day}` : day
		return `${year}-${month}-${day}`
  }
}
