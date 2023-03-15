// localStorage.setItem("sifre","1234")

function girisYap(){
    let sifre = localStorage.getItem("sifre");
    let girilenSifre = document.querySelector(".sifre");
    if(sifre==girilenSifre){

        window.location.href = "anasayfa.html"
    }
    else{
        document.querySelector(".alert").style.display="block"
    }
}

















