
document.getElementById('SubnitformData').addEventListener('click', (event) => {
    event.preventDefault();
    let Email = document.getElementById('inputEmail').value;
    let Password = document.getElementById('inputPassword').value;

    (!Email || !Password) ? alert("Please fillout all feield") : dataStorage(Email, Password)


})


function dataStorage(Email, Password) {

    new Promise((resolve, reject) => {
        let setData = localStorage.setItem("username", Email, "Password", Password)
        resolve("localStorage was set!");
    })
        .then((Success) => {
            console.log(Success)
        })
}


