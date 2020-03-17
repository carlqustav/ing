Bütün sayfaların static görünümünü şöyledir:

****************************************************

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" href="">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <script src="resources/jquery-3.4.1.min.js"></script>
    <script src="js/main.js"></script>
    <title>/* Sayfa Adı Buraya */</title>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light white">
        <a class="navbar-brand" href="anasayfa.html">
            <img id="main-title" src="img/logo.hd.png"  class="d-inline-block align-top" alt="">        
            <span>Proje İzlenim</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto ">
                <div class="dropdown-divider"></div>
                <li class="nav-item active">
                    <a class="nav-link" href="anasayfa.html">Anasayfa</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="devam_eden.html">Devam Eden Projeler</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="tamamlanmis.html">Tamamlanmış Projeler</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="butun.html">Bütün Projeler</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="kullanicilar.html">Kullanıcılar</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="notlar.html">Notlar</a>
                </li>
            </ul>
        </div>
    </nav>
    <div id="mobile-title" class="container">
        <h4>/*Sayfa Adı Buraya*/</h4>
    </div>

    <div class="container">
        <div class="table-responsive">
            <br>
            <table class="table table-hover">
                <thead class="thead-dark">
                </thead>
                <tbody>        
                </tbody>
            </table>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>


****************************************************

Her sayfanın kendisiyle ilgili database'ine göre table thead'i vardır.

Örnek : Anasayfa İçin: 

****************************************************
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Proje Adı</th>
                        <th scope="col">Adım Adı</th>
                        <th scope="col">Adım Numarası</th>
                        <th scope="col">Birim</th>
                        <th scope="col">Başlangıç Tarihi</th>
                        <th scope="col">Tahmini Bitiş Tarihi</th>
                        <th scope="col">Sorumlusu</th>
                        <th scope="col">Birimi</th>
                        <th scope="col">Durumu</th>
                    </tr>
                </thead>
****************************************************

Her sayfa yüklendiğinde bilgileri <tbody></tbody> yerine konulmalıdır.
Her bir row, <tr></tr> tagleri arasına aşağıdaki gibi konulmalıdır.
Her bir column, <td></td> tagleri arasına aşağıdaki gibi konulmalıdır.
Proje Adı, Çalışan Adı gibi bilgiler kalın olması için <td></td> yerine <th></th> arasına konulabilir.

Örnek : Anasayfa İçin
****************************************************
                // Bütün bilgilerin olduğu tbody
                <tbody>
                    // Tek bir bilginin olduğu tr
                    <tr>
                        <th>Proje Adı</th>
                        <td>Adım Adı</td>
                        <th>Adım Numarası</td>
                        <td>Birim</td>
                        <td>Başlangıç Tarihi</td>
                        <td>Tahmini Bitiş Tarihi</td>
                        <td>Sorumlusu</td>
                        <td>Birimi</td>
                        <td>Durumu</td>
                    </tr>        
                </tbody>
****************************************************

Devam eden projelerde ayrıca işi bitirme amacıyla konulmuş "Bitir" tuşu vardır. Tuş en baştaki <td></td> taglerinde duruyor.
Bitir tuşu submit butonu olmakla beraber bu fron-end kullanılırsa <form method="post"></form> içine konulmalıdır (post metodu).
Tuşa basılınca back-end'e proje numarası bilgisi atılarak databasede bitirilmiş olarak işaretlenerek sayfa yenilenebilinir.
Proje numarası bilgisini yollamak için bütün <tr></tr> (Yani bütün row) form içine konulabilir.
Tuşa bastıktan sonra "Emin misiniz?" kısmı eklenecek, front-end işi. 

*

Şu an site asgari bir şekilde responsive, yani mobilde rahat kullanılabilir ve her browserde çalışır.

*

Bootstrap, CSS, JavaScript kullanılmıştır.