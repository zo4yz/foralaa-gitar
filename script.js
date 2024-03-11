getBirthdayMessage();

function getBirthdayMessage() {
    let url = window.location.href;
    let regexName = new RegExp("name" + "(=([^&#]*))");
    let resultsName = regexName.exec(url);
    let regexSeg = new RegExp("seg" + "(=([^&#]*))");
    let resultsSeg = regexSeg.exec(url);

    if (resultsName == null) {
        birthdayName = "Nata";
    } else {
        birthdayName = decodeURIComponent(resultsName[2]);
    }

    if (resultsSeg == null) {
        birthdaySeg = "general";
    } else {
        birthdaySeg = decodeURIComponent(resultsSeg[2]);
    }

    if (birthdaySeg == "fundraisers") {
        document.getElementById('letter').innerHTML = "<div class='center-letter animate-reveal animate-first'> <h1>Can i Be Your Boyfriend? :3 </h1><br><p style='margin: 0 5px; line-height:300%;'>This year, thank you for coming to be the color in my life. Disini gua mau jujur tentang perasaan gua, gua sayang sama lu dan apakah gua bisa ikut campur dalam kehidupan lu?, gua akan menjadi seseorang yg mendukung lu dalam kehidupan ini. gua akan cerita banyak tentang banyak hal, lu bisa juga cerita banyak hal ke guaa, gua tau gua ga lebih baik dari orang lain, jadi apakah lu bisa tetap sama gua sampai gua jadi lebih baik dari mereka? dan disini gua akan bilang, apakah gua bisa jadi pacar lu?<br><br> gua ngga tau kata apa yg pas tentang itu, jadi maaf yaaa. mungkin lu lebih suka kayak gini aja yaa, lu mau ga jadi pacar gua?<br> <br>gua pikir pasti banyak hal yg akan terjadi nanti, ada senang sedihnya. jika lu cape, sedih,frustasi atau merasa lagi di bawah banget, gua akan denger semuanya. inget selalu ada gua,jangan merasa lu bisa nanganin semua hal, lu bisa ngandelin gua. gua akan berusaha semaksimal mungkin. makasihh untuk segalanyaa yaa, love you :3</p> </p>
    } else {
        document.getElementById('letter').innerHTML = "<div><div id='center-letter' class='center-letter animate-reveal animate-first'> <h1> Can i Be Your Boyfriend? :3</h1><br><p style='margin: 0 5px;'>This year, thank you for coming to be the color in my life. Disini gua mau jujur tentang perasaan gua, gua sayang sama lu dan apakah gua bisa ikut campur dalam kehidupan lu?, gua akan menjadi seseorang yg mendukung lu dalam kehidupan ini. gua akan cerita banyak tentang banyak hal, lu bisa juga cerita banyak hal ke guaa, gua tau gua ga lebih baik dari orang lain, jadi apakah lu bisa tetap sama gua sampai gua jadi lebih baik dari mereka? dan disini gua akan bilang, apakah gua bisa jadi pacar lu?<br><br>gua ngga tau kata apa yg pas tentang itu, jadi maaf yaaa. mungkin lu lebih suka kayak gini aja yaa, lu mau ga jadi pacar gua?<br><br> gua pikir pasti banyak hal yg akan terjadi nanti, ada senang sedihnya. jika lu cape, sedih,frustasi atau merasa lagi di bawah banget, gua akan denger semuanya. inget selalu ada gua, jangan merasa lu bisa nanganin semua hal, lu bisa ngandelin gua. gua akan berusaha semaksimal mungkin. makasihh untuk segalanyaa yaa, love you :3</p> </p>
    }
}