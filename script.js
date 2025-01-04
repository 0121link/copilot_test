function toggleMenu() {
    // Get the navigation menu element
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle the 'active' class on the menu
    navMenu.classList.toggle('active');
    
    // Optional: Toggle aria-expanded for accessibility
    const hamburger = document.querySelector('.hamburger');
    const isExpanded = navMenu.classList.contains('active');
    hamburger?.setAttribute('aria-expanded', isExpanded);

    console.log('Menu toggled:', isExpanded);
}

function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    console.log('Projects filtered by category:', category);
}

function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'block';
    console.log('Lightbox opened for image:', img.src);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    console.log('Lightbox closed');
}

function validateForm() {
    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    if (!name.value.trim()) {
        nameError.classList.add('active');
        isValid = false;
    } else {
        nameError.classList.remove('active');
    }

    if (!email.value.trim() || !email.validity.valid) {
        emailError.classList.add('active');
        isValid = false;
    } else {
        emailError.classList.remove('active');
    }

    if (!message.value.trim()) {
        messageError.classList.add('active');
        isValid = false;
    } else {
        messageError.classList.remove('active');
    }

    console.log('Form validation status:', isValid);
    return isValid;
}

// Real-time validation feedback
document.getElementById('name').addEventListener('input', () => {
    const nameError = document.getElementById('name-error');
    if (document.getElementById('name').value.trim()) {
        nameError.classList.remove('active');
    } else {
        nameError.classList.add('active');
    }
    console.log('Name input changed:', document.getElementById('name').value);
});

document.getElementById('email').addEventListener('input', () => {
    const emailError = document.getElementById('email-error');
    if (document.getElementById('email').validity.valid) {
        emailError.classList.remove('active');
    } else {
        emailError.classList.add('active');
    }
    console.log('Email input changed:', document.getElementById('email').value);
});

document.getElementById('message').addEventListener('input', () => {
    const messageError = document.getElementById('message-error');
    if (document.getElementById('message').value.trim()) {
        messageError.classList.remove('active');
    } else {
        messageError.classList.add('active');
    }
    console.log('Message input changed:', document.getElementById('message').value);
});

// Add event listener to the hamburger button
document.querySelector('.hamburger').addEventListener('click', toggleMenu);