localStorage.setItem("sifre",1234)
// localStorage.setItem("bakiye",1000)




//!bakiye çektim
let bakiye = localStorage.getItem("bakiye")
document.querySelector(".bakiye").innerHTML=`Toplam Bakiyeniz : ${bakiye}`

function girisYap(){
  let sifre = localStorage.getItem("sifre");
  let girilenSifre = document.querySelector(".sifre").value;
  if(sifre==girilenSifre){
    // document.querySelector(".loading").style.display="inline-block"
    document.querySelector(".yonlendir").innerHTML="3 Saniye İçinide Sayfaya Yönlendiriliyorsunuz!"
    setTimeout(() => {
      window.location.href="anasayfa.html"
    }, 3000);
   
  }
  else{
    document.querySelector(".alert").style.display="block"
  }
}

function islemyap(){
  let islemler = document.querySelector(".islemler").value;
  let girilentutar = document.querySelector(".girilentutar").value;
 

  if (islemler=="Para Çek"){
    let cekilenbakiye = bakiye-girilentutar;
    localStorage.setItem("bakiye",cekilenbakiye);
    document.querySelector(".bakiye").innerHTML=`güncel bakiyeniz ${cekilenbakiye}`
  }

  else if (islemler=="Para Yatır"){
    yatırlantutar = Number(girilentutar)+Number(bakiye);
    localStorage.setItem("bakiye",yatırlantutar);
    document.querySelector(".bakiye").innerHTML=`güncel bakiyeniz ${yatırlantutar}`
  }


  else{
    alert("lütfen işlem seç")
  }
  
}

