export default {
  getToday() {
    let today = new Date()
		let year = `${today.getFullYear()}`
		let month = `${today.getMonth() + 1}` // 0 基，但是显示时不可能也 0 基
		let day = `${today.getDate()}`
		month = month.length < 2 ? `0${month}` : month
		day = day.length < 2 ? `0${day}` : day
		today = `${year}-${month}-${day}`
		return today
  }
}
