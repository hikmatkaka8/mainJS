// console.log("Hello World")
// alert("ada notifikasi")
// prompt("Minjam seratus")

// var promnet = "Coding is easy"
// console.log(promnet)
// var promnet = "Coding not easy"
// console.log(promnet)

// console.log(promnet)
// var promnet = "nothing"
// console.log(promnet)

// let promnet = "Coding is fun"
// console.log(promnet)
// let promnet = "Coding not fun"
// console.log(promnet)

// const promnet = "Coding yes"
// console.log(promnet);
// const promnet = "Coding no"
// console.log(promnet);

// let totalpoin = prompt("Masukkan poin anda")
//     if (totalpoin > 100){
//         document.write("Selamat");
//     }
//     else{
//         document.write("coba lagi")
//     }

// x = 6
// y = 2
// console.log(x<10 && y > 1)
// console.log(x < 10 && y < 1)
// console.log(x==5 ||y==5)
// console.log(x==6 ||y==5)
// console.log(!(x==y))

// document.write(x<10 && y > 1)
// document.write("<br>")
// document.write(x < 10 && y < 1)
// document.write("<br>")
// document.write(x==5 ||y==5)
// document.write("<br>")
// document.write(x==6 ||y==5)
// document.write("<br>")
// document.write(!(x==y))

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")
// button.addEventListener('click', function()
// {
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

const inputList = document.getElementById("input-list");
const listInput = document.getElementById("list");

function tambah() {
    if (inputList.value === "") {
        alert("jangan biarkan kosong!!!");
    } else {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "daftar-list";
        li.appendChild(checkbox);
        let namaTugas = document.createTextNode(inputList.value);
        li.appendChild(namaTugas);

        let tombolHapus = document.createElement("button");
        tombolHapus.textContent = "x";
        tombolHapus.className = "tombol-hapus"
        li.appendChild(tombolHapus);

        inputList.value = "";
        li.style.listStyleType = "none";
        tombolHapus.style.listStyleType = "none";

        tombolHapus.addEventListener("click", function () {
            li.remove();
        });

        checkbox.addEventListener("change", function() {
            if (checkbox.checked) {
                li.style.textDecoration = "line-through";
            } else {
                li.style.textDecoration = "none";
            }
        });

        listInput.appendChild(li);
    }
}