function stringToArray(s) {
	return s.match(/[\s\S]/ug) || [];
	// return s.match(/[\s\S]/ug);

}
console.log(stringToArray("📖 모던 자바스크립트 입문"));  // → ["📖", " ", "모", "던", " ", "자", "바", "스", "크", "립", "트"," ", "입", "문"]



