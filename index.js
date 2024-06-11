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

const rmv = () => {
    console.log('rmv was invoked!')
    let rmItem = document.querySelector('#rmTask').value
    let rmItemParsed = parseInt(rmItem)
    console.log(typeof rmItemParsed, rmItemParsed)
    if (isNaN(rmItemParsed)){
        console.log('rmv is string!')
        let rmLoc = list.indexOf(rmItem)
        list.splice(rmLoc, 1)
        newlist = refreshList()
        document.querySelector('#listDisplay').value = newList
    }
    else if (rmItemParsed <= list.length){
        console.log('rmv is number!')
        console.log(list)
        list.splice(rmItemParsed - 1, 1)
        console.log(list)
        console.log(newList)
        newlist = refreshList()
        console.log(newList)
        document.querySelector('#listDisplay').value = newList
    }
    document.querySelector('#rmTask').value = ''
}

const refreshList = () => {
    document.querySelector('#listDisplay').innerText = ''
    let buildList = document.querySelector("#listDisplay");
    for (i = 0; i < list.length; ++i) {
        let li = document.createElement('li');
        /*li.innerHTML = <input type="checkbox"><span>your thing went here</span></input>*/
        li.innerText = list[i];
        buildList.appendChild(li);
    }
    /*
    console.log(list)
    console.log(buildList)*/
    return buildList
}

document.querySelector('#newTaskButton').addEventListener("click", submit)
document.querySelector('#rmTaskButton').addEventListener("click", rmv)
