const checkBtn = document.querySelector("#checkBtn");
checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputVal = document.querySelector("#totalPeople").value;
    const killPeople = document.querySelector("#killPeople").value;
    josephus(inputVal, killPeople);
});

function josephus(n = 11, k = 3) {
    let count = 1;
    let newArray = new Array();
    for (let i = 0; i < n; i++) {
        newArray.push(count++);
    }


    function loopArr() {
        if (newArray.length === 1) {
            console.log(newArray[0]);
        } else {
           newArray =  newArray.filter((value,index)=>{
                return (index + 1 ) % k!= 0;
            })
        }
    }

    loopArr()
    console.log(newArray);
}