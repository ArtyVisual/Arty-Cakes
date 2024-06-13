
const unsplashAccessKey = 'a2AiO9K1Zbsvn1KGp7JH7X8NCK0KGVZOdCBo2JEP6ok';
const query = 'Cakes & pastry'; // Change this to the specific item you want images of
const imgElement = document.getElementById('random-image');
const attributionElement = document.getElementById('attribution');

async function fetchRandomImage() {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${unsplashAccessKey}`);
    const data = await response.json();
    imgElement.src = `${data.urls.raw}&w=720&h=600&fit=crop`;
    imgElement.alt = data.alt_description;
    attributionElement.innerHTML = `Photo by <a href="${data.user.links.html}" target="_blank">${data.user.name}</a> on <a href="https://unsplash.com" target="_blank">Unsplash</a>`;
  } catch (error) {
    console.error('Error fetching random image:', error);
  }
}

window.onload = fetchRandomImage;