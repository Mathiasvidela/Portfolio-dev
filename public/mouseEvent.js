conteGradient = document.querySelector('.conte-gradient');


conteGradient.addEventListener('mousemove' , (e) =>{
    const x = e.clientX + window.scrollX;
    const y = e.clientY + window.scrollY;

    conteGradient.style.background = `radial-gradient(circle at ${x}px ${y}px, #28253B, #1A191F 400px)`
})