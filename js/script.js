document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.getElementById('title');
    const contentElement = document.getElementById('title2');
    const homebtn = document.getElementById('home-btn');
    const aboutbtn = document.getElementById('about-btn');
    const projectbtn = document.getElementById('project-btn');
    const contactbtn = document.getElementById('contact-btn');
    const languageSelector = document.getElementById('languageSelector');
    const abouth2 = document.getElementById('about-h2');
    const description = document.getElementById('description');
    const projecth1 = document.getElementById('project-h1');
    const contacth1 = document.getElementById('contact-h1');
    const language = document.getElementById('language');

    // Define your content in different languages
    const content = {
        en: { title: "I'm Arlei Junior", content: 'Software Developer, Data Engineer & Content Designer', homebtn: "Home", aboutbtn: "About Me", projectbtn: "Projects", contactbtn: "Contact", abouth2:"About me", description: "Developer focused on creating solutions that add value to businesses. With experience in software development, data engineering, and e-commerce management, I consistently seek to integrate technology and strategy to deliver efficient and impactful solutions. Proficient in task automation, system integration, data processing and visualization, and implementing innovative solutions.", language:'Language' },
        pt: { title: "Eu sou Arlei Junior", content: "Desenvolvedor de Software, Engenheiro de Dados & Designer de Conteúdo", homebtn: "Início", aboutbtn: "Sobre Mim", projectbtn: "Projetos", contactbtn: "Contato", abouth2:"Sobre mim", description:"Desenvolvedor focado em criar soluções que agregam valor ao negócio. Com experiência em desenvolvimento de software, engenharia de dados e administração de e-commerce, busco constantemente integrar tecnologia e estratégia para oferecer soluções eficientes e impactantes. Tenho habilidades em automação de tarefas, integração de sistemas, tratamento e apresentação de dados e implementação de soluções inovadoras.", language:'Idioma' },
        es: { title: 'Soy Arlei Junior', content: 'Desarrollador de Software, Ingeniero de Datos & Diseñador de Contenido', homebtn: "Inicio", aboutbtn: "Quién Soy", projectbtn: "Proyectos", contactbtn: "Contacto", abouth2:"Quién Soy", description:"Desarrollador enfocado en crear soluciones que agreguen valor a los negocios. Con experiencia en desarrollo de software, ingeniería de datos y gestión de comercio electrónico, busco constantemente integrar tecnología y estrategia para ofrecer soluciones eficientes e impactantes. Tengo habilidades en automatización de tareas, integración de sistemas, procesamiento y visualización de datos, e implementación de soluciones innovadoras.", language:'Idioma' }
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
        description.textContent = content[selectedLanguage].description;
        projecth1.textContent = content[selectedLanguage].projectbtn;
        contacth1.textContent = content[selectedLanguage].contactbtn;
        
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


