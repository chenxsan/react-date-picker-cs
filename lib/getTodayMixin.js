"use strict";

Object.defineProperty(exports, "__esModule", {
		value: true
});
exports["default"] = {
		getToday: function getToday() {
				var today = new Date();
				var year = "" + today.getFullYear();
				var month = "" + (today.getMonth() + 1); // 0 基，但是显示时不可能也 0 基
				var day = "" + today.getDate();
				month = month.length < 2 ? "0" + month : month;
				day = day.length < 2 ? "0" + day : day;
				return year + "-" + month + "-" + day;
		}
};
module.exports = exports["default"];