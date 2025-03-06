const positions = [
    { top: "0%", left: "0%"},
    { top: "0%", left: "10%"},
    { top: "0%", left: "60%"},
    { top: "16%", left: "15%"},
    { top: "16%", left: "40%"},
    { top: "16%", left: "90%"},
    { top: "32%", left: "50%"},
    { top: "32%", left: "75%"},
    { top: "48%", left: "0%"},
    { top: "48%", left: "35%"},
    { top: "64%", left: "30%"},
    { top: "64%", left: "50%"},
    { top: "64%", left: "90%"},
    { top: "80%", left: "20%"},
    // { top: "80%", left: "70%"},
];

const images = document.querySelectorAll(".gallery__image img");

// Gallery Image
const image = document.querySelectorAll(".gallery__image");

gsap.set(image, {
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%) scale(0)"
})

gsap.to(image, {
    scale: 1,
    width: "300px",
    height: "400px",
    stagger: 0.2,
    duration: 0.75,
    ease: "power1.out",
    delay: 1,
    onComplete: scatterAndShrink,
})

// Text Paragraph
const text = document.querySelectorAll(".text__paragraph");

gsap.from(text, {
    y: 40,
    duration: 1,
    ease: "power4.inOut",
    delay: 0.5,
    stagger: {
        amount: 0.2
    }
})

gsap.to(text, {
    top: "40px",
    ease: "power4.inOut",
    duration: 1,
    stagger: {
        amount: 0.2
    },
    delay: 4,
    onComplete: () => {
        document.querySelector(".container__intro").remove();
    }
})

const link = document.querySelectorAll("#header-link");

gsap.from(link, {
    y: 20,
    opacity: 0,
    duration: 1,
    stagger: {
        amount: 0.2
    },
    delay: 5,
    ease: "power2.out",
})

function scatterAndShrink() {
    gsap.to(image, {
        top: (i) => positions[i].top,
        left: (i) => positions[i].left,
        transform: "none",
        width: "75px",
        height: "100px",
        stagger: 0.075,
        duration: 0.75,
        ease: "power2.out",
    })
}

const messages = document.querySelectorAll(".message");

messages.forEach((message, index) => {
    const image = images[index];
    if (!image) return; // Prevent errors if images/messages don't match

    message.addEventListener("click", () => {
        message.style.display = "none";
    });

    image.addEventListener("click", () => {
        message.style.display = "flex";
    });
});
