function changeName() {
    const btn = document.getElementById('changeName');
    if (btn.innerText === 'Change name') {
        setNewName();
        btn.innerText = 'Original name';
    } 
    else {
        setOriginalName();
        btn.innerText = 'Change name';
    }
}
function setNewName() {
    document.getElementById('surname').innerText = 'Иванов';
    document.getElementById('name').innerText = 'Иван';
    document.getElementById('patronymic').innerText = 'Иванович';
    document.getElementById('gender').innerText = 'Муж.';
}

function setOriginalName() {
    document.getElementById('surname').innerText = 'Крылова';
    document.getElementById('name').innerText = 'Ксения';
    document.getElementById('patronymic').innerText = 'Дмитриевна';
    document.getElementById('gender').innerText = 'Жен.';
}