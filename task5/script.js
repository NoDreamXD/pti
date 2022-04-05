const ids = [
	"city",
	"tour",
	"inet",
	"real",
	"edu",
	"bus",
]

ids.forEach((id, index, arr) => {
	const el = document.getElementById(id);

	el.onmouseover = () => {
		el.src = `panel/${id}1.gif`;
	}
	el.onmouseout = () => {
		el.src = `panel/${id}.gif`;
	}
})

puppies.onchange = () => {
	const puppy = puppies.options[puppies.selectedIndex].value;
	puppyImage.src = `assets/images/img${puppy}.jpg`
}
