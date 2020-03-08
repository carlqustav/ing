const birim = "MİMARİ";

let jobs = [
    // Durum:false devam eden, true biten
    {"Ad":"Osman","İş Adımı":"Hamza","İş Kodu":12,"Birim":"MİMARİ","Prerequisite":0,"Başlangıç":"01/01/2020","Tahmini Bitiş":"04/03/2020","Durum":false},
    {"Ad":"A","İş Adımı":"Hamza","İş Kodu":1,"Birim":"MİMARİ","Prerequisite":0,"Başlangıç":"01/01/2020","Tahmini Bitiş":"04/03/2020","Durum":true},
    {"Ad":"B","İş Adımı":"Hamza","İş Kodu":2,"Birim":"MİMARİ","Prerequisite":1,"Başlangıç":"01/01/2020","Tahmini Bitiş":"04/03/2020","Durum":true},
    {"Ad":"C","İş Adımı":"Hamza","İş Kodu":3,"Birim":"MİMARİ","Prerequisite":1,"Başlangıç":"01/01/2020","Tahmini Bitiş":"04/03/2020","Durum":false},
    {"Ad":"D","İş Adımı":"Hamza","İş Kodu":4,"Birim":"MİMARİ","Prerequisite":1,"Başlangıç":"01/01/2020","Tahmini Bitiş":"04/03/2020","Durum":false},
    {"Ad":"E","İş Adımı":"Hamza","İş Kodu":5,"Birim":"MİMARİ","Prerequisite":4,"Başlangıç":"01/01/2020","Tahmini Bitiş":"04/03/2020","Durum":false},
    {"Ad":"F","İş Adımı":"Hamza","İş Kodu":6,"Birim":"MİMARİ","Prerequisite":5,"Başlangıç":"01/01/2020","Tahmini Bitiş":"02/01/2020","Durum":true},
    {"Ad":"G","İş Adımı":"Hamza","İş Kodu":7,"Birim":"MİMARİ","Prerequisite":5,"Başlangıç":"01/01/2020","Tahmini Bitiş":"04/03/2020","Durum":false},
    {"Ad":"H","İş Adımı":"Hamza","İş Kodu":8,"Birim":"MİMARİ","Prerequisite":6,"Başlangıç":"01/01/2020","Tahmini Bitiş":"04/03/2020","Durum":false},
    {"Ad":"I","İş Adımı":"Hamza","İş Kodu":9,"Birim":"MİMARİ","Prerequisite":7,"Başlangıç":"01/01/2020","Tahmini Bitiş":"02/01/2020","Durum":true},
    {"Ad":"AA","İş Adımı":"Hamza","İş Kodu":4,"Birim":"YÖNETİM","Prerequisite":1,"Başlangıç":"01/01/2020","Tahmini Bitiş":"04/03/2020","Durum":false},
    {"Ad":"BB","İş Adımı":"Hamza","İş Kodu":5,"Birim":"YÖNETİM","Prerequisite":4,"Başlangıç":"01/01/2020","Tahmini Bitiş":"04/03/2020","Durum":false},
    {"Ad":"CC","İş Adımı":"Hamza","İş Kodu":6,"Birim":"YÖNETİM","Prerequisite":5,"Başlangıç":"01/01/2020","Tahmini Bitiş":"02/01/2020","Durum":true},
    {"Ad":"DD","İş Adımı":"Hamza","İş Kodu":7,"Birim":"YÖNETİM","Prerequisite":5,"Başlangıç":"01/01/2020","Tahmini Bitiş":"04/03/2020","Durum":false},
    {"Ad":"EE","İş Adımı":"Hamza","İş Kodu":8,"Birim":"YÖNETİM","Prerequisite":6,"Başlangıç":"01/01/2020","Tahmini Bitiş":"04/03/2020","Durum":false},
    {"Ad":"FF","İş Adımı":"Hamza","İş Kodu":9,"Birim":"YÖNETİM","Prerequisite":7,"Başlangıç":"01/01/2020","Tahmini Bitiş":"02/01/2020","Durum":true},
]

function getCurentFileName(name){
    var pagePathName= window.location.pathname;
    return name === pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
}

$(function(){
    if(getCurentFileName("index.html")){
        jobs.forEach(function(job){
            if(!job["Durum"] && job["Birim"] === birim){
                let row = "";
                row += `
                <tr>
                    <td>
                        <button type="button" class="btn btn-dark update">Bitir</button>
                    </td>
                    <th>${job["Ad"]}</th>
                    <td>${job["İş Adımı"]}</td>
                    <td>${job["İş Kodu"]}</td>
                    <td>${job["Birim"]}</td>
                    <td>${job["Başlangıç"]}</td>
                    <td>${job["Tahmini Bitiş"]}</td>
                    <td>Ongoing</td>
                </tr>`;
                
                $("tbody").append(row);
            }     
        });
    }
    else if(getCurentFileName("completed.html")){
        jobs.forEach(function(job){
            if(job["Durum"]){
                let row = "";
                row += `
                <tr>
                    <th>${job["Ad"]}</th>
                    <td>${job["İş Adımı"]}</td>
                    <td>${job["İş Kodu"]}</td>
                    <td class="jobCode">${job["Birim"]}</td>
                    <td>${job["Başlangıç"]}</td>
                    <td>${job["Tahmini Bitiş"]}</td>
                </tr>`;
                
                $("tbody").append(row);
            }     
        });
    }

    else if(getCurentFileName("pending.html")){
        let temp = [];
        jobs.forEach(function(job){
            if(job["Birim"] === birim && !job["Durum"]){
                temp.push(job);
            }     
        });

        jobs.forEach(function(job){
            //console.log(elem["İş Kodu"] + " - " + job["Prerequisite"]);
            temp.forEach(function(elem){
                if(elem["İş Kodu"] == job["Prerequisite"]){    
                    let row = "";
                    row += `
                    <tr>
                        <th>${job["Ad"]}</th>
                        <td>${job["İş Adımı"]}</td>
                        <td>${job["İş Kodu"]}</td>
                        <td class="jobCode">${job["Birim"]}</td>
                        <td>${job["Başlangıç"]}</td>
                        <td>${job["Tahmini Bitiş"]}</td>
                        <td>${job["Durum"]}</td>
                    </tr>`;
                    
                    $("tbody").append(row);

                } 
            });
                  
        });

        
    }

});
