/**
 *
 */
const sections = document.querySelectorAll(".translate");
const proyectoItem = document.querySelectorAll(".proyecto_item");
const formacionItem = document.querySelectorAll(".formacion_item");
const hobbiesItem = document.querySelectorAll(".hobbies_item");
const skillsItem = document.querySelectorAll(".skills_item");

const observar = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      entrada.target.classList.toggle("show", entrada.isIntersecting);
      if (entrada.isIntersecting) observar.unobserve(entrada.target);
    });
  },
  {
    rootMargin: "-50px",
  }
);

sections.forEach((section) => {
  observar.observe(section);
});

proyectoItem.forEach((item) => {
  observar.observe(item);
});

formacionItem.forEach((item) => {
  observar.observe(item);
});

hobbiesItem.forEach((item) => {
  observar.observe(item);
});

skillsItem.forEach((item) => {
  observar.observe(item);
});
/**
 *
 */
