
const heroName = document.querySelector('.hero__name');
function changeName(event) {
	if (event.target.textContent == 'Slaaaaaaaabkin') {
		event.target.textContent = 'Никита Тарасенко';
		heroName.removeEventListener('dblclick', changeName);
	}
	else{event.target.textContent = 'Slaaaaaaaabkin';}
}
heroName.addEventListener('dblclick', changeName);