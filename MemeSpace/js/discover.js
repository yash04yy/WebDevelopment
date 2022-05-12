var i = 1;

function changebackground() {

    if (i == 1) {
        document.body.style.backgroundImage = "url('file:///C:/Users/yashy/Desktop/Web%20Development/MemeSpace/IMG/bg7.jpg')";
        i++;
    } else if (i == 2) {
        document.body.style.backgroundImage = "url('file:///C:/Users/yashy/Desktop/Web%20Development/MemeSpace/IMG/bg3.jpg')";
        i++;
    } else if (i == 3) {
        document.body.style.backgroundImage = "url('file:///C:/Users/yashy/Desktop/Web%20Development/MemeSpace/IMG/bg6.jpg')";
        i++;
    } else if (i == 4) {
        document.body.style.backgroundImage = "url('file:///C:/Users/yashy/Desktop/Web%20Development/MemeSpace/IMG/bg4.jpg')";
        i = 1;
    }
}
let add_btn = document.getElementById("add_btn");
add_btn.addEventListener("click", addChapter);
let parentList = document.getElementById("parentList");

function addChapter(e) {
    if (parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove();
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    let currentChapterName = currentInput.value;

    let newLi = document.createElement('li');
    //newLi.classList.add('list-group-item');
    newLi.className = "list-group-item d-flex justify-content-between";
    newLi.innerHTML = `<h3 class="flex-grow-1">${currentChapterName}</h3>
                    <button class="btn btn-warning mx-3" onclick="editChapter(this)">Edit</button>
                    <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`

    parentList.appendChild(newLi);
    currentInput.value = "";
}

function removeChapter(currElement) {
    currElement.parentElement.remove();
    let parentList = document.getElementById("parentList");
    if (parentList.children.length <= 0) {
        let newEmptyMsg = document.createElement("h3");
        newEmptyMsg.classList.add("emptyMsg");
        newEmptyMsg.textContent = "Nothing is here. Please add a chapter!!!";
        parentList.appendChild(newEmptyMsg);
    }
}

function editChapter(currElement) {
    if (currElement.textContent == "Done") {
        currElement.textContent = "Edit";
        let currChapterName = currElement.previousElementSibling.value;
        let currHeading = document.createElement("h3");
        currHeading.className = "flex-grow-1";
        currHeading.textContent = currChapterName;
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling)

    } else {
        currElement.textContent = "Done";
        let currChapterName = currElement.previousElementSibling.textContent;
        let currInput = document.createElement("input");
        currInput.type = "text";
        currInput.placeholder = "Chapter Name";
        currInput.className = "form-control";
        currInput.value = currChapterName;
        currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)

    }
}