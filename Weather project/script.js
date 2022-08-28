const input = document.getElementById("inputText");
const submit = document.getElementById("btn");
const cityName=document.getElementById('cityName')
const temp=document.getElementById('temp')
const winfo=document.getElementById('winfo')
       
  submit.addEventListener('click',()=>{

    let inputvalue=input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=bbad96692f44b75a1b2c767964ebc340`;

    fetch(url)
    .then(response =>response.json())
    .then ((data)=>{
        
      console.log(data)
        var setTemp=data['main']['temp'];
        var setCity=data.name
        var setDescri=data['weather'][0]['description']


        temp.innerHTML=setTemp;
        cityName.innerHTML=setCity;
        winfo.innerHTML=setDescri
    })
    .catch((error)=>{
        alert('something went wrong')
    })
    
    inputvalue=input.value=""
  })

   

    

     
      
  




