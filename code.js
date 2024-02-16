const slides = [{
    src: 'https://github.com/bellamoss77/gsapSlider/blob/main/images/Ap1.png?raw=true',
    alt: 'Dogs',
    title: 'Apollo 1',
}, {
    src: 'images/At1.png',
    alt: 'Dogs',
    title: 'Athena 1',
}, {
    src: 'images/Ap2.png',
    alt: 'Dogs',
    title: 'Apollo 2',
}, {
    src: 'images/At2.png',
    alt: 'Dogs',
    title: 'Athena 2',
}, {
    src: 'images/Ap3.png',
    alt: 'Dogs',
    title: 'Apollo 3',
}, {
    src: 'images/At3.png',
    alt: 'Dogs',
    title: 'Athena 3',
}, {
    src: 'images/Ap4.png',
    alt: 'Dogs',
    title: 'Apollo 4',
}, {
    src: 'images/At4.png',
    alt: 'Dogs',
    title: 'Athena 4',
}, {
    src: 'images/Ap5.png',
    alt: 'Dogs',
    title: 'Apollo 5',
}, {
    src: 'images/At5.png',
    alt: 'Dogs',
    title: 'Athena 5',
}, {
    src: 'images/Ap6.png',
    alt: 'Dogs',
    title: 'Apollo 6',
}, {
    src: 'images/At6.png',
    alt: 'Dogs',
    title: 'Athena 6',
}, {
    src: 'images/Ap7.png',
    alt: 'Dogs',
    title: 'Apollo 7',
}, {
    src: 'images/At7.png',
    alt: 'Dogs',
    title: 'Athena 7',
}, {
    src: 'images/Ap8.png',
    alt: 'Dogs',
    title: 'Apollo 8',
}, {
    src: 'images/At8.png',
    alt: 'Dogs',
    title: 'Athena 8',
}, {
    src: 'images/Ap9.png',
    alt: 'Dogs',
    title: 'Apollo 9',
}, {
    src: 'images/At9.png',
    alt: 'Dogs',
    title: 'Athena 9',
}, {
    src: 'images/Ap10.png',
    alt: 'Dogs',
    title: 'Apollo 10',
}, {
    src: 'images/At10.png',
    alt: 'Dogs',
    title: 'Athena 10',
}, {
    src: 'images/Ap11.png',
    alt: 'Dogs',
    title: 'Apollo 11',
}, {
    src: 'images/At11.png',
    alt: 'Dogs',
    title: 'Athena 11',
}, {
    src: 'images/Ap12.png',
    alt: 'Dogs',
    title: 'Apollo 12',
}, {
    src: 'images/At12.png',
    alt: 'Dogs',
    title: 'Athena 12',
}, {
    src: 'images/Ap13.png',
    alt: 'Dogs',
    title: 'Apollo 13',
}, {
    src: 'images/At13.png',
    alt: 'Dogs',
    title: 'Athena 13',
}, {
    src: 'images/Ap14.png',
    alt: 'Dogs',
    title: 'Apollo 14',
}, {
    src: 'images/At14.png',
    alt: 'Dogs',
    title: 'Athena 14',
}, {
    src: 'images/Ap15.png',
    alt: 'Dogs',
    title: 'Apollo 15',
}, {
    src: 'images/At1.png',
    alt: 'Dogs',
    title: 'Athena 15',
}, {
    src: 'images/ApAt1.png',
    alt: 'Dogs',
    title: 'Apollo & Athena 1',
}, {
    src: 'images/ApAt2.png',
    alt: 'Dogs',
    title: 'Apollo & Athena 2',
}, {
    src: 'images/ApAt3.png',
    alt: 'Dogs',
    title: 'Apollo & Athena 3',
}, {
    src: 'images/ApAt4.png',
    alt: 'Dogs',
    title: 'Apollo & Athena 4',
}, {
    src: 'images/ApAt5.png',
    alt: 'Dogs',
    title: 'Apollo & Athena 5',
}
]

let currentSlideIndex = 0;

document.addEventListener('DOMContentLoaded', (event) => {
   addSlides();
   addNavButtons();
   updateSlideVisibility();
})

const slidesContainer = document.getElementById('slides');
const savedTitlesContainer = document.getElementById('savedTitlesContainer');
    

const addSlides = () => {
    slides.forEach((slideObject) => {
        const slide = document.createElement('li');
        slide.classList.add('slide');

        const image = document.createElement('img');
        image.src = slideObject.src;
        image.alt = slideObject.alt;

        const briefcaseIcon = document.createElement('span'); 
        briefcaseIcon.innerHTML = `<i class="fa-solid fa-briefcase"></i>`;
        briefcaseIcon.addEventListener('click', () => {
        const savedImgList = document.getElementById('saved-img-list');
        const savedImgListItem = document.createElement('li');
        savedImgListItem.textContent = slideObject.title;
        savedImgList.appendChild(savedImgListItem);
            })
        slide.appendChild(image);
        slide.appendChild(briefcaseIcon);
        slidesContainer.appendChild(slide);
    });
};

    addSlides();

    const addNavButtons = () => {
        const prevBtn = document.createElement('button');
        prevBtn.innerHTML = `<i class="fa-solid fa-circle-chevron-left"></i>`;
        prevBtn.classList.add('prev');
        prevBtn.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex > 0) ? currentSlideIndex - 1 : slides.length - 1;
            updateSlideVisibility();
        });

        const nextBtn = document.createElement('button');
        nextBtn.innerHTML = `<i class="fa-solid fa-circle-chevron-right"></i>`;
        prevBtn.classList.add('next');
        nextBtn.addEventListener('click', () => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            updateSlideVisibility();
        })

        slidesContainer.appendChild(prevBtn);
        slidesContainer.appendChild(nextBtn);
    }

    const updateSlideVisibility = () => {
        const slideElements = document.querySelectorAll('.slide');
        slideElements.forEach((slide, index) => {
            slide.style.display = (index === currentSlideIndex) ? 'block' : 'none';
        })
    }
