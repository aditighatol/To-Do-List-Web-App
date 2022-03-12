let addBtn = document.querySelector('.addItem');

function addItem() {
    let input = document.querySelector('.userInput');
    let taskHolder = document.querySelector('.container');
    if (input.value != '') {

        var myData =
            '<div class="myTask">' +
            '<p class="taskName">' + input.value + '</p>' +
            '<button class="completed">&#10003;</button>' +
            '<button class="removeItem">&cross;</button>' +
            '</div>';

        taskHolder.innerHTML = taskHolder.innerHTML + myData;
        input.value = '';

    } else {
        alert("Enter your task to be added");
    }
}

addBtn.addEventListener('click', addItem);

function completed(accomplished) {
    accomplished.parentElement.firstChild.classList.add('finish');
    accomplished.parentElement.classList.add('done');
    accomplished.classList.add('accomp');
}

function removeItem(removeElement) {
    removeElement.parentElement.remove();
}

let taskHolder = document.querySelector('.container');

taskHolder.addEventListener('click', (event) => {
    if (event.target.className == 'completed') {
        completed(event.target);
    } else if (event.target.className == 'removeItem') {
        removeItem(event.target);
    }
}); 

// console.log('Aditi');