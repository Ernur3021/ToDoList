
{
 
// const arr = []
// let id = 0;
// function addUser(str){
//     let obj = {}
//     obj.name = {}
//     obj.address = {}
//     obj.id = id;
//     id++;
//     let ar = str.split(',')
//     if(ar.length)

//     // let ar = str.split(',')
//     console.log(ar);
//     let name = ar[0].split(' ')
//     console.log(name);
//     obj.name.firstName = name.shift()
//     console.log(name);
//     obj.name.lastName = name.join('')
    
//     obj.age = parseInt(ar[1]);
//     obj.address.address1 = ar[2].trim().split(' ')[0]
//     obj.address.address2 = ar[2].trim().split(' ')[1]

//     let num = ar[3].toString().trim();
    
//     obj.number = num.startsWith('+') || num.startsWith('8') ? num : '+7' +num
//     console.log(obj);
//     arr.push(obj)
// }
// addUser("Ernur A Omar, 31yo, Auezov 212/10, 7751080212")
// // addUser("Yulduz, 24, 7758521425")
}

function addTodo() {
    const li = document.createElement("h3")
    const inputValue = document.getElementById("todo").value
    if(!inputValue.length) return;
    li.innerText  = inputValue;

    const list = document.getElementById("lists");
    list.appendChild(li)
    document.getElementById("todo").value = ""

    const span = document.createElement("SPAN")
    const txt = document.createTextNode(" X")
    span.className = "close"
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function() {
        const div = this.parentElement;
        div.remove();
    }

    const check = document.createElement("SPAN");
     
      

}
addTodo()