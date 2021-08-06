console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert("Form has been submitted successfully.");
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


form.querySelector('img').addEventListener('mouseover', ()=> {
	alert('I like your style. ')
})