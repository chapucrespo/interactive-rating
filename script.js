const selectRating = (id) => {
    localStorage.setItem('rating', id)

    for (var i = 1; i < 6; i++) {
        if(i == id) {
        document.getElementById(id).classList.add('clicked-rating')
        } else {
            if(document.getElementById(i).classList.contains('clicked-rating')) {
            document.getElementById(i).classList.remove('clicked-rating')
            }
        }
    }   
}

const clickSubmit = () => {
    location.href = 'success.html'
}