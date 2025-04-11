console.log('hello world detail')

const backBtn = document.getElementById('back-btn')
const url = window.location.href + "data/"
const spinnerBox = document.getElementById('spinner-box')

// Go back when back button is clicked
backBtn.addEventListener('click', () => {
    history.back();
});

// AJAX call to fetch post detail data
$.ajax({
    type: 'GET',
    url: url,
    success: function(response){
        console.log(response)

        spinnerBox.classList.add('not-visible')
    },
    error: function(error){
        console.log(error)
    }
})
