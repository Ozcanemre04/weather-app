//first
let firstweather = document.querySelector('.firstweather')
let section1 = document.querySelector('.section1')
let main1 = document.querySelector('.main1')
let footer = document.querySelector('.footer1')
let header = document.querySelector('.header')
let label = document.querySelector('.label1')




function weather() {
    
    let names = firstweather.value
    
    
    
 fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + names + '&lang=fr&units=metric&cnt=40&appid=319e9dba46be46664ace4a16c7d4f03c')
        .then(resp => resp.json())
        .then(data => {
            
            let datas = data.list
            let h2 = document.createElement('h2')
            header.appendChild(h2)
            h2.innerText = data.city.name
            
            
                let url="url('https://source.unsplash.com/1920x700/?" + firstweather.value + "')"
                section1.style.backgroundImage =url
              
            
                for (let i = 0; i < datas.length; i++) {
                let meteo = {
                    wind: datas[i].wind.speed,
                    icon: "http://openweathermap.org/img/w/" + datas[i].weather.map(icon => icon.icon).join(' ') + ".png",
                    weather: datas[i].weather.map(icon => icon.description).join(' '),
                    date: datas[i].dt_txt,
                    temp: datas[i].main.temp,
                    humidity: datas[i].main.humidity,

                }
                
                
                addHtml(meteo)
                
                
                 firstweather.value = ""
        

                

            }


        })

}

function addHtml(data) {



    let div = document.createElement('div')

    main1.appendChild(div)
    let img = document.createElement('img')
    div.appendChild(img)
    img.src = data.icon;
    let weather = document.createElement('caption')
    div.appendChild(weather)
    weather.innerText = data.weather;
    let temp = document.createElement('p')
    div.appendChild(temp)
    temp.innerText = data.temp + "°C";
    let humidity = document.createElement('p')
    div.appendChild(humidity)
    humidity.innerText = "humidité: " + data.humidity + "%";
    let wind = document.createElement('p')
    div.appendChild(wind)
    wind.innerText = "vent: " + data.wind;
    let date = document.createElement('p')
    div.appendChild(date)
    date.innerText = data.date
   
}

firstweather.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        if(firstweather.value===""){
            alert('empty')
        }
        else{
        weather()
        
         header.innerHTML = ""
          main1.innerHTML = ""
        }
    }
})

//remove
let remove = document.createElement('button')
remove.className="remove1"
footer.appendChild(remove)
remove.innerText = "remove"
remove.addEventListener('click', (e) => {
    let b = e.target.parentElement.parentElement.children[1].firstChild
    let c = e.target.parentElement.parentElement.children[2]
    if (b) {
        b.remove();
    }

    
    c.textContent = ""
  
})

//second
let section2 = document.querySelector('.section2')
let main2 = document.querySelector('.main2')
let header2 = document.querySelector('.header2')
let add = document.querySelector('.add')
let secondweather = document.querySelector('.secondweather')
let footer2 = document.querySelector('.footer2')


function weather2() {
    let names = secondweather.value



    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + names + '&lang=fr&units=metric&cnt=40&appid=319e9dba46be46664ace4a16c7d4f03c')
        .then(resp => resp.json())
        .then(data => {

            let datas = data.list

            section2.style.backgroundImage = "url('https://source.unsplash.com/500x500/?" + names + "')"
            let h2 = document.createElement('h2')
            header2.appendChild(h2)
            h2.innerText = data.city.name

            for (let i = 0; i < datas.length; i++) {
                let meteo2 = {
                    wind: datas[i].wind.speed,
                    icon: "http://openweathermap.org/img/w/" + datas[i].weather.map(icon => icon.icon).join(' ') + ".png",
                    weather: datas[i].weather.map(icon => icon.description).join(' '),
                    date: datas[i].dt_txt,
                    temp: datas[i].main.temp,
                    humidity: datas[i].main.humidity,

                }



                addHtml2(meteo2)
                console.log(meteo2);
                secondweather.value=""
            }


        })

}

function addHtml2(data) {



    let div = document.createElement('div')

    main2.appendChild(div)
    let img = document.createElement('img')
    div.appendChild(img)
    img.src = data.icon;
    let weather = document.createElement('p')
    div.appendChild(weather)
    weather.innerText = data.weather;
    let temp = document.createElement('p')
    div.appendChild(temp)
    temp.innerText = data.temp;
    let humidity = document.createElement('p')
    div.appendChild(humidity)
    humidity.innerText = data.humidity;
    let wind = document.createElement('p')
    div.appendChild(wind)
    wind.innerText = data.wind;
    let date = document.createElement('p')
    div.appendChild(date)
    date.innerText = data.date;



}
//compare

let body = document.querySelector('body')

let compare = document.querySelector('.compare')
compare.className="compare"
compare.addEventListener('click', () => {
    section2.classList.toggle('active')
    body.classList.toggle('flex')
    if (body.classList.contains('flex')) {
        section1.style.width = "50%"
        compare.style.width="5%"
        compare.style.margin="0"
        remove.style.left="20%"
        label.style.left="20%"
        
       
    } else {
        section1.style.width = "100%"
        compare.style.width="200px"
        compare.style.margin="20px 0 0 50%"
        remove.style.left="50%"
        label.style.left="50%"
        
    }

})

//add
add.addEventListener('click', ()=>{
    if(secondweather.value===""){
        alert('empty')
    }
    else{
    weather2()
     header2.innerHTML = ""
      main2.innerHTML = ""
    }
})

//remove2
let remove2 = document.createElement('button')
remove2.className="remove2"
footer2.appendChild(remove2)
remove2.innerText = "remove"
remove2.addEventListener('click', (e) => {
    let b = e.target.parentElement.parentElement.children[1].firstChild

    b.remove()
    let c = e.target.parentElement.parentElement.children[2]
    console.log(c);
    c.textContent = ""
})