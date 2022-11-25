const btnEdit = document.getElementById('btnEdit')
const btnSubmit = document.getElementById('btnSubmit')

let formData = document.getElementById('formData')
let inputNama = document.querySelector('#inputNama')
let inputAvailabillity = document.querySelector('#inputAvailabillity')
let inputAge = document.querySelector('#inputAge')
let inputLokasi = document.querySelector('#inputLokasi')
let inputPengalaman = document.querySelector('#inputPengalaman')
let inputEmail = document.querySelector('#inputEmail')
let textNama = document.querySelector('#textNama')
let textAvailabillity = document.querySelector('#textAvailabillity')
let textAge = document.querySelector('#textAge')
let textLokasi = document.querySelector('#textLokasi')
let textPengalaman = document.querySelector('#textPengalaman')
let textEmail = document.querySelector('#textEmail')


btnSubmit.addEventListener('click', function (event){
    event.preventDefault()
    var konfirmasi = confirm('Apakah anda sudah yakin?');
    if(konfirmasi === true){
        textNama.innerText = inputNama.value
        textAvailabillity.innerText = inputAvailabillity.value
        textAge.innerText = inputAge.value
        textLokasi.innerText = inputLokasi.value
        textPengalaman.innerText = inputPengalaman.value
        textEmail.innerText = inputEmail.value
        formData.style.display = 'none'
    } else{
        formData.style.display = 'none'
    }
})  

btnEdit.addEventListener('click', function (event){
    event.preventDefault()
    if (formData.style.display == 'none'){
        formData.style.display = 'block'
        inputNama.value = textNama.innerText
        inputAvailabillity.value = textAvailabillity.innerText
        inputAge.value = textAge.innerText
        inputLokasi.value = textLokasi.innerText
        inputPengalaman.value = textPengalaman.innerText
        inputEmail.value = textEmail.innerText
    } else{
        formData.style.display = 'none'
    }
})
