let list = []


const submit = () => {
    let newItem = document.querySelector('#newTask').value
    if (newItem != "" && list.indexOf(newItem) == -1){
        list.push(newItem)
        newList = refreshList()
        document.querySelector('#listDisplay').value = newList
    }
    document.querySelector('#newTask').value = ''
}

/*
const remove = () => {

}*/

const refreshList = () => {
    document.querySelector('#listDisplay').innerText = ''
    let buildList = document.querySelector("#listDisplay");
    for (i = 0; i < list.length; ++i) {
        let li = document.createElement('li');
        /*li.innerHTML = <input type="checkbox"><span>your thing went here</span></input>*/
        li.innerText = list[i];
        buildList.appendChild(li);
    }
    console.log(list)
    console.log(buildList)
    return buildList
}

document.querySelector('#newTaskButton').addEventListener("click", submit)
