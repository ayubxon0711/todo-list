const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const list_el = document.querySelector("#tasks");

const api_url = "http://localhost:4000/todos";
function get() {
	console.log("get");
	async function getapi(url) {
		const response = await fetch(url);
		var data = await response.json();
		show(data);
	}
	getapi(api_url);
	function show(data) {
		let tab = `<div></div>`;
		for (let r of data.data) {
			tab += `<div class="task" data-id="${r._id}">
        <div class="content">
          <input 
            type="text" 
            class="text" 
            value="${r.text}"
            readonly>
        </div>
        <div class="actions">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      </div>`;
		}

		document.getElementById("tasks").innerHTML = tab;

		let deleteButtons = document.querySelectorAll('.delete');
		for (let btn of deleteButtons) {
			btn.addEventListener('click', function (e) {
				let taskId = e.target.parentElement.parentElement.getAttribute('data-id');
				axios.delete(api_url + `/${taskId}`)
					.then((response) => {
						response
						get()
					})
					.catch((eror) => console.log(eror))
			})
		}
		let editButtons = document.querySelectorAll(".edit")
		for (const edit_btn of editButtons) {
			edit_btn.addEventListener('click', function (el) {
				let taskId = el.target.parentElement.parentElement.getAttribute('data-id');
				let parentDiv = el.target.parentElement.parentElement;
				let input_v = parentDiv.querySelector(".text");
				if (edit_btn.innerText.toLowerCase() == "edit") {
					edit_btn.innerText = "Save";
					input_v.removeAttribute("readonly");
					input_v.focus();

				}
				else {
					edit_btn.innerText = "Edit";
					axios.put(api_url + `/${taskId}`, {
						text: input_v.value
					})
						.then((response) => {
							console.log(response.data);
							get()
						}).catch((eror) => console.log(eror))
					input_v.setAttribute("readonly", "readonly");
					console.log("li");
				}
			})
		}
	}
}
get()
form.addEventListener('submit', function (e) {
	e.preventDefault();
	const text = input.value;
	axios.post(api_url, {
		text
	})
		.then((response) => {
			console.log(response.data)
			input.value = ''
			get()
		})
		.catch((eror) => console.log(eror))
});