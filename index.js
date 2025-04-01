console.log('hello world')

const testEl = document.getElementById('test-el')

testEl.textContent = 'bye bye'

testEl.addEventListener('click', ()=>{
    console.log('clicked')
    testEl.innerHTML = "<b>clicked</b>"
})

testEl.addEventListener('mouseover', ()=>{
    console.log('on')
})

testEl.addEventListener('mouseout', ()=>{
    console.log('off')
})

document.addEventListener('scroll', ()=>{
    const positionY = window.scrollY
    console.log(positionY)
})

const url = 'https://swapi.dev/api/people/'

// jquary ajax method

$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        console.log('jquary ajax', response)
    },
    error: function(error){
        console.log(error)
    }
})

// xmlhttprequest

const req = new XMLHttpRequest()

req.addEventListener('readystatechange', ()=>{
    if(req.readyState===4){
        console.log('xhttp', JSON.parse(req.responseText))
    }
})

req.open('GET', url)
req.send()

//fetch method

fetch(url)
.then(resp=>resp.json()).then(data=>console.log('fetch',data))
.catch(err=> console.log(err))