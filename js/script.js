let readMoreButtons = document.querySelectorAll('.readMore_btn');

readMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let hideText = button.previousElementSibling; 
        hideText.classList.toggle('visible');
        
        if (hideText.classList.contains('visible')) {
            button.innerHTML = 'Leer menos';
        } else {
            button.innerHTML = 'Leer más';
        }
    });
});

function openModal(imgElement) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "flex";
    modalImg.src = imgElement.src; 
    captionText.innerHTML = imgElement.alt;

    modalImg.style.transform = "scale(1)";
    scale = 1; 
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

var scale = 1; 


var modalImg = document.getElementById("modalImage");
modalImg.onwheel = function(event) {
    event.preventDefault(); 
    if (event.deltaY < 0) {
        scale += 0.1; 
    } else {
        scale -= 0.1; 
    }

    
    if (scale < 1) scale = 1;
    if (scale > 3) scale = 3;

    modalImg.style.transform = `scale(${scale})`;
}


const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {
    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

window.addEventListener('load', function() {
    const audio = document.getElementById('miAudio');
    audio.play().catch((error) => {
        
        console.log("Autoplay bloqueado, esperando interacción del usuario");
        document.addEventListener('click', () => {
            audio.play();
        }, { once: true });
    });
});
