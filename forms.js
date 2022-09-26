function submitResults(){
    const form = document.getElementById('bruh');
    var elements = form.elements['Javascript'];
    console.log(elements)
};

window.onload=function(){
    const form = document.getElementById('bruh');
    form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('bruh')
    })
}
