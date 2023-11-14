document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.getElementById('title');
    const contentElement = document.getElementById('title2');
    const homebtn = document.getElementById('home-btn');
    const aboutbtn = document.getElementById('about-btn');
    const projectbtn = document.getElementById('project-btn');
    const contactbtn = document.getElementById('contact-btn');
    const languageSelector = document.getElementById('languageSelector');
    const abouth2 = document.getElementById('about-h2')

    // Define your content in different languages
    const content = {
        en: { title: "Hi, I'm Arlei Junior", content: 'Software Developer, Front End & Content Designer', homebtn: "Home", aboutbtn: "About Me", projectbtn: "Projects", contactbtn: "Contact", abouth2:"About me" },
        pt: { title: "Olá, Eu sou Arlei Junior", content: "Software Developer, Front End & Content Designer", homebtn: "Início", aboutbtn: "Sobre Mim", projectbtn: "Projetos", contactbtn: "Contatos", abouth2:"Sobre mim" },
        es: { title: 'Hola, soy Arlei Junior', content: 'Software Developer, Front End & Content Designer', homebtn: "Inicio", aboutbtn: "Sobre mi", projectbtn: "Projetos", contactbtn: "Contatos", abouth2:"Sobre mi" }
    };

    // Function to update the content based on the selected language
    function updateContent() {
        const selectedLanguage = languageSelector.value;
        titleElement.textContent = content[selectedLanguage].title;
        contentElement.textContent = content[selectedLanguage].content;
        homebtn.textContent = content[selectedLanguage].homebtn;
        aboutbtn.textContent = content[selectedLanguage].aboutbtn;
        projectbtn.textContent = content[selectedLanguage].projectbtn;
        contactbtn.textContent = content[selectedLanguage].contactbtn;
        abouth2.textContent = content[selectedLanguage].abouth2;

    }

    // Add an event listener to the language selector to call the updateContent function
    languageSelector.addEventListener('change', updateContent);

    // Call the updateContent function to set the initial content
    updateContent();
});



function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}
function changeText(newText) {
    document.getElementById("text").innerHTML = newText;
}


var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});


