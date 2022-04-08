$(".Click-here").on('click', function() {
    $(".custom-model-main").addClass('model-open');
  }); 
  $(".close-btn, .bg-overlay, .btn-danger").click(function(){
    $(".custom-model-main").removeClass('model-open');
  });
  $('.btn-success').on('click', function(event) {
      event.preventDefault(); // To prevent following the link (optional)
      location.href="https://api.whatsapp.com/send?phone=201289022985&text=welcome";
    });

    var verses = ["به ينتهي إلى النجاح، وبكلمته يقوم الجميع",
    "رُبَّ نجاح يكون لأذى صاحبه",
    "أَمَّا الْحِكْمَةُ فَنَافِعَةٌ لِلإِنْجَاحِ","إِلهَ السَّمَاءِ يُعْطِينَا النَّجَاحَ، وَنَحْنُ عَبِيدُهُ نَقُومُ وَنَبْنِي"
    ,"كَانَ الرَّبُّ مَعَ يُوسُفَ فَكَانَ رَجُلًا نَاجِحًا",
"أَرُومُ أَنْ تَكُونَ نَاجِحًا وَصَحِيحًا، كَمَا أَنَّ نَفْسَكَ نَاجِحَةٌ"];
    const data = [
{name : '6' , marks1 : 73,marks2 :"0" ,marks3 : 74}
,{name : '16' , marks1 : 90,marks2 : 75,marks3 : 72}
,{name : '5' , marks1 : 71,marks2 : 65,marks3 : 77}
,{name : '1' , marks1 : 81,marks2 : 61,marks3 : 68}
,{name : '11' , marks1 : 78,marks2 : 67,marks3 : 70}
,{name : '10' , marks1 : 73,marks2 : 61,marks3 : 81}
,{name : '9' , marks1 : 85,marks2 : 75,marks3 : 79}
,{name : '8' , marks1 : 55,marks2 : 61,marks3 : 86}
,{name : '2' , marks1 : 91,marks2 : 69,marks3 : 94}
,{name : '17' , marks1 : 93,marks2 : 73,marks3 : 72}
,{name : '7' , marks1 : 70,marks2 : 71,marks3 : 90}
,{name : '4' , marks1 : 85,marks2 : 90,marks3 : 86}
,{name : '32' , marks1 : 50,marks2 : 84,marks3 : 72}
,{name : '19' , marks1 : 96,marks2 : 86,marks3 : 79}
,{name : '15' , marks1 : 93,marks2 : 78,marks3 : 84}
,{name : '24' , marks1 : 78,marks2 :"" ,marks3 : 66}
,{name : '31' , marks1 : 93,marks2 : 84,marks3 : 90}
,{name : '43' , marks1 : 76,marks2 : 63,marks3 : 78}
,{name : '18' , marks1 : 93,marks2 : 75,marks3 : 86}
,{name : '29' , marks1 : 73,marks2 : 67,marks3 : 59}
,{name : '14' , marks1 : 51,marks2 : 53,marks3 : 43}
,{name : '33' , marks1 : 65,marks2 : 65,marks3 : 56}
,{name : '20' , marks1 : 100,marks2 : 75,marks3 : 63}
,{name : '22' , marks1 : 76,marks2 : 76,marks3 : 71}
,{name : '23' , marks1 : 33,marks2 : 45,marks3 : 64}
,{name : '12' , marks1 : 81,marks2 : 41,marks3 : 86}
,{name : '13' , marks1 : 60,marks2 : 53,marks3 : 48}
,{name : '28' , marks1 : 95,marks2 : 94,marks3 : 84}
,{name : '25' , marks1 : 95,marks2 : 82,marks3 : 94}
,{name : '21' , marks1 : 48,marks2 : 55,marks3 : 63}
,{name : '30' , marks1 : 71,marks2 : 73,marks3 : 43}
,{name : '3' , marks1 : 71,marks2 :"" ,marks3 : 93}
,{name : '26' , marks1 :"0" ,marks2 :"0" ,marks3 : 44}
,{name : '27' , marks1 :"0" ,marks2 :"0" ,marks3 : 46}     
    
];
const verse = document.getElementById('verse')
const results = document.getElementById('res')
const results2 = document.getElementById('res2')
const results3 = document.getElementById('res3')
const thxmassage = document.getElementById('thx')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    
    const name = document.getElementById('code').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            verse.innerHTML = "''"+verses[Math.floor(Math.random()*verses.length)]+"''";
            console.log(data[i].marks1)
            results.innerHTML =data[i].marks1 + "%"
            results2.innerHTML =data[i].marks2 + "%" 
            results3.innerHTML =data[i].marks3 + "%" 

            const [first, last] = document.getElementById('name').value.split(' ');
            thxmassage.innerHTML = " شكرا ليك يا" +" "+ first
            return;
        }
    }    
    results.innerHTML =  "<h4 style='color:#d43f3a'>"+" تاكد من معلوماتك مرة اخرى و اعد المحاولة"+"<br>" + "اذا كنت تواجه مشكلة اضغط بالاسفل على هل يوجد مشكلة ؟"+"</h4>"
})
