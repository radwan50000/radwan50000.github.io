//Start of the sections elevator
let sectionElevator = document.getElementById("sectionsElevator"),
    arrowDivElevator = document.getElementById("arrowDiv"),
    arrowElevator = document.querySelector("#arrowDiv i"),
    sectionsSelectText = document.querySelectorAll("#sectionsElevator .selectSection p"),
    sections = document.querySelectorAll("section"),
    elevatorOpen = false;

arrowDivElevator.addEventListener("click",function(){
    if(!elevatorOpen){
        sectionElevator.style.cssText = "transform: translateX(0%)";
        arrowElevator.style.cssText = "transform: rotate(180deg)"
        elevatorOpen = true;
    }else{
        sectionElevator.style.cssText = "transform: translateX(-100%)";
        arrowElevator.style.cssText = "transform: rotate(0deg)"
        elevatorOpen = false;
    }
});

for(let i of sectionsSelectText){
    let text = i.textContent.toLocaleLowerCase();
    if(text === "top"){
        i.addEventListener('click',function(){
            window.scroll(0,0);
        })
    }
    for(let j=0;j<sections.length;j++){
        if(text === sections[j].id){
            i.addEventListener("click",function(){
                sections[j].scrollIntoView({behavior: 'smooth',block: 'start', inline: 'start'});
            })
        }
    }
}

//End of the sections elevator


// Start of the tasks settings*******************************************************************
//making the the list of the tasks setting
//calling variables
let nav_bar_list = document.querySelectorAll("#options-list ul li"),
    navBar = document.getElementById("nav-bar"),
    listContainer = document.getElementById("lists-container"),
    listsRemove = document.querySelectorAll("#lists-container .list i"),
    listsText = document.querySelectorAll("#lists-container .list p"),
    addTaskButton = document.getElementById("submit-task-button"),
    inputTask = document.getElementById("input-new-task");

let tasksArray;
//check if the local storage is empty to don't delete the data in it
localStorage.length === 0 ? tasksArray = [] : tasksArray = JSON.parse(localStorage.tasks);
//adding the tasks to the local storage function
function addTaskToLocalStorage(taskText) {
    tasksArray.push({ 'text': taskText, 'done': false, });
    window.localStorage.removeItem('tasks');
    window.localStorage.setItem("tasks", JSON.stringify(tasksArray));
}
//making the list
function makeList(taskText) {
    let div = document.createElement("div");
    div.classList.add("list");
    let p = document.createElement("p");
    p.textContent = taskText;
    div.appendChild(p);
    let symbol = document.createElement("i");
    symbol.classList = "fa-solid fa-xmark";
    div.appendChild(symbol);
    listContainer.appendChild(div);
}
//making the list from the local storage
function addTasksToList() {
    for (let i = 0; i < tasksArray.length; i++) {
        let text = tasksArray[i].text;
        let div = document.createElement("div");
        div.classList.add("list");
        let p = document.createElement("p");
        p.textContent = text;
        if (tasksArray[i].done) {
            p.style.cssText = 'text-decoration: line-through;'
        } else {
            p.style.cssText = 'text-decoration: none;'
        }
        div.appendChild(p);
        //The (x) => symbol in the tasks
        let symbol = document.createElement("i");
        symbol.classList = "fa-solid fa-xmark";
        div.appendChild(symbol);
        listContainer.appendChild(div);
    }
}

// the basics of the page setting
function buildBasics() {
    // declaring the variables again for changes the values of the variables
    listContainer = document.getElementById("lists-container"),
        listsRemove = document.querySelectorAll("#lists-container .list i"),
        listsText = document.querySelectorAll("#lists-container .list p"),
        addTaskButton = document.getElementById("submit-task-button"),
        inputTask = document.getElementById("input-new-task"),
        filterInput = document.getElementById("filter-tasks");

    // put the class to all the li => lists
    for (let i = 0; i < nav_bar_list.length; i++) {
        nav_bar_list[i].classList += "nav-bar-list";
    }
    // the remove button for the tasks
    for (let i = 0; i < listsRemove.length; i++) {
        listsRemove[i].addEventListener("click", function () {
            let taskText = this.parentElement.firstChild.textContent;
            for(let i=0;i<tasksArray.length;i++){
                if(tasksArray[i].text === taskText){
                    console.log("found");
                    tasksArray.splice(i,1);
                    window.localStorage.tasks = JSON.stringify(tasksArray);
                }
            }
            this.parentElement.remove();
        })
    }
    // check if the task is complete or not
    for (let i = 0; i < listsText.length; i++) {
        listsText[i].addEventListener('click', function () {
            let text = listsText[i].textContent;
            tasksArray = JSON.parse(localStorage.tasks);
            for (let j = 0; j < tasksArray.length; j++) {
                if (tasksArray[j].text === text) {
                    if (tasksArray[j].done) {
                        listsText[i].style.cssText = "text-decoration: none;";
                        tasksArray[j].done = false;
                    } else {
                        listsText[i].style.cssText = "text-decoration: line-through;";
                        tasksArray[j].done = true;
                    }
                }
            }
            // remove the last array and add the new one
            localStorage.removeItem('tasks');
            localStorage.setItem('tasks', JSON.stringify(tasksArray));
        })
    }
    filterInput.addEventListener("keydown",function(){
        if(filterInput.value.trim() === ""){
            for(let i=0;i<listsText.length;i++){
                listsText[i].style.cssText += "display: flex;";
            }
        }
        let text = filterInput.value;
        let regExp = new RegExp(text,"gi");
        for(let i=0;i<listsText.length;i++){
            let found = regExp.test(listsText[i].textContent);
            if(found){
                listsText[i].parentElement.style.cssText += "display: flex;"
            }else{
                listsText[i].parentElement.style.cssText += "display: none;"
            }
        }
    })
}
// The add button for the tasks
addTaskButton.addEventListener("click", function () {
    inputTask = document.getElementById("input-new-task").value;
    if (inputTask === "") {
        alert("Please, fill the input value to add the task.");
    } else {
        listsText = document.querySelectorAll("#lists-container .list p");
        let found = false;
        for (let i = 0; i < listsText.length; i++) {
            if (inputTask === listsText[i].textContent) {
                found = true;
            }
        }
        if (found) {
            alert("The tasks is already exist");
        } else {
            makeList(inputTask);
            addTaskToLocalStorage(inputTask);
            document.getElementById("input-new-task").value = "";
        }
    }
    buildBasics();
});
// The clear button for the tasks to clear all the tasks
document.getElementById("clear-tasks-button").addEventListener("click", function () {
    window.localStorage.tasks = '[]';
    let lists = document.querySelectorAll(".list");
    for (let i = 0; i < lists.length; i++) {
        lists[i].remove();
    }
})

addTasksToList();

buildBasics();

// End The tasks setting******************************************************

// Start of the Books list

let inputTitle = document.getElementById("input-book-title"),
    inputAuthor = document.getElementById("input-book-author"),
    inputIsbn = document.getElementById("input-book-isbn"),
    bookSubmitButton = document.getElementById("submit-book-data-button"),
    booksList = document.getElementById("books-list"),
    bookSymboles = document.querySelectorAll("span.book-detail i");

let bookStorage;

if(localStorage.books === undefined){
    bookStorage = [];
}else{
    bookStorage = JSON.parse(localStorage.books);
    for(let i=0;i<bookStorage.length;i++){
        makeBooksFromStorage(bookStorage[i].title,bookStorage[i].author,bookStorage[i].isbn);
    }
}

function removeBook(){
    bookSymboles = document.querySelectorAll(".book-detail i");
    for(let i=0;i<bookSymboles.length;i++){
        bookSymboles[i].addEventListener("click",function(){
            let text = this.parentElement.parentElement.firstChild.textContent;
            for(let i=0;i<bookStorage.length;i++){
                if(text.trim() === bookStorage[i].title){
                    bookStorage.splice(i,1);
                    localStorage.books = JSON.stringify(bookStorage);
                }
            }
            this.parentElement.parentElement.remove();
        })
    }
}

function makeBooksFromStorage(title,author,isbn){
    let booksList = document.getElementById("books-list");
    let inputs = [title, author, isbn];
    let booksContainer = document.createElement("div");
    booksContainer.classList += "books-details-container";
    for(let i=0;i<4;i++){
        if(i < 3){
            let div = document.createElement("span");
            div.classList += "book-detail";
            let p = document.createElement("p");
            p.innerHTML = inputs[i];
            div.appendChild(p);
            inputs[i].value = "";
            booksContainer.appendChild(div);
        }else{
            let div = document.createElement("span");
            div.classList.add("book-detail");
            div.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>';
            booksContainer.appendChild(div);
        }
    }
    booksList.appendChild(booksContainer);
    removeBook();
}



bookSubmitButton.addEventListener("click",function(){
    let inputs = [inputTitle, inputAuthor, inputIsbn];
    if(inputTitle.value.trim() !== "" && inputAuthor.value.trim() !== "" && inputIsbn.value !== ""){
        if(!isNaN(inputIsbn.value) && isNaN(inputAuthor.value) && isNaN(inputTitle.value)){
            bookStorage.push({
                'title': inputTitle.value,
                'author': inputAuthor.value,
                'isbn': inputIsbn.value,
            });
            localStorage.books = JSON.stringify(bookStorage);
            makeBooksFromStorage(inputTitle.value,inputAuthor.value,inputIsbn.value);
            for(let i of inputs){
                i.value = "";
            }
        }
    }
})


document.getElementById("remove-books-button").addEventListener("click",function(){
    let books = document.querySelectorAll(".books-details-container");
    for(let i=0;i<books.length;i++){
        if(i === 0){
            continue;
        }else{
            books[i].remove();
        }
    }
    bookStorage = [];
    window.localStorage.books = '[]';
})

removeBook();

// X icon => <i class="fa-sharp fa-solid fa-xmark"></i>;

// End of the Books list

//Start of the Weather part

function getApi (lon,lat){
    let apiPass = '42ae38a5b26f64c316f57a0ae10ce3ce';
    let apiKey = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiPass}`;
    return new Promise((res,rej) => {
        let api = new XMLHttpRequest();
        api.open("GET",apiKey,true);
        api.send();
        api.onload = function(){
            if(this.readyState === 4 && this.status === 200){
                res(JSON.parse(this.responseText));
            }else{
                rej(Error('ERROR In API'));
            }
        }
    }).then(
        (res) =>{
            console.log(res);
            let image = document.getElementById("weather-sky-image");
                skyCurrentDegree = document.getElementById("weatherDegree"),
                skyDescrip = document.getElementById("skyDescrip"),
                humidity = document.getElementById("humidity"),
                maxTemp = document.getElementById("maxTemp"),
                minTemp = document.getElementById("minTemp"),
                state = document.getElementById("state"),
                country = document.getElementById("country");
            let convertDegree =  (degree) => degree - 273.15;
            humidity.innerHTML = `Humidty: ${res.main.humidity}%`;
            skyDescrip.innerHTML = `Weather Condition: ${res.weather[0].description}`;
            maxTemp.innerHTML = `Max Tempreature: ${convertDegree(res.main.temp_max).toFixed(1)}`;
            minTemp.innerHTML = `Min Tempreature: ${convertDegree(res.main.temp_min).toFixed(1)}`;
            state.innerHTML = `State: ${res.name}`;
            country.innerHTML = `Country: ${res.sys.country}`;
            skyCurrentDegree.innerHTML = Math.floor(convertDegree(res.main.temp)) + `°`;
            image.src = `http://openweathermap.org/img/wn/${res.weather[0].icon}@4x.png`;
        },
        (rej) => console.log(rej)
    );
};




function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(pos){
            let lat = pos.coords.latitude;
            let lon = pos.coords.longitude;
            getApi(lon,lat);
        });
    }
}

getLocation();
//End of the Weather part
