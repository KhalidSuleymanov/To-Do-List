let btn = document.querySelector('.btn');
let alert1 = document.querySelector('.alert');
let count = document.getElementById('tasksCount')
let count1 = 0;
var h3 = document.querySelector('.des1')
h3.innerHTML = 'There is no movement'
btn.onclick = function () {
    let value = document.querySelector('#input-des input').value;
    if (value != "") {
        h3.innerHTML = ''
        count1++;
        count.innerHTML = count1;
        let h4 = document.createElement('h4');
        let div = document.createElement('div');
        let button = document.createElement('button');
        h4.innerHTML = value
        button.innerHTML = 'Delete'
        button.className = 'btn1 btn-danger';
        div.className = "boxes col-lg-5 mx-auto"
        div.appendChild(h4)
        div.appendChild(button);
        document.querySelector('#list-for-tasks').appendChild(div);
        alert1.classList.remove('d-none');
        setTimeout(() => {
            alert1.classList.add('d-none');
        }, 3000);
        button.onclick = function () {
            div.remove();
            count1--;
            count.innerHTML = count1;
        }
    }
    else {
        alert("Please add task");
    }
}



