//GALLERY HOME PAGE

const images = ["./Images/gallery1.png", "./Images/gallery2.png", "./Images/gallery3.png",  "./Images/gallery4.png"];
let currentIndex = 0;

function showImage(index) {
    const mainImage = document.getElementById("mainImage");
    currentIndex = (index + images.length) % images.length;
    mainImage.src = images[currentIndex];
}

function changeImage(step) {
    showImage(currentIndex + step);
}

//GALLERY PAGE
const imagesGallery = ["../Images/gallery1.png", "../Images/gallery2.png", "../Images/gallery3.png",  "../Images/gallery4.png"];
let currentIndexGallery = 0;

function showImageGallery(indexGallery) {
    const mainImageGallery = document.getElementById("mainImageGallery");
    currentIndexGallery = (indexGallery + imagesGallery.length) % imagesGallery.length;
    mainImageGallery.src = imagesGallery[currentIndexGallery];
}

function changeImageGallery(step) {
    showImageGallery(currentIndexGallery + step);
}

 // CHANGE HEADER BG COLOR WHEN USER SCROLLS THE PAGE
 window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.style.backgroundColor = "#BFC2B4";
        // header.style.height = "100px";
        header.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"; // Increased shadow effect
    } else {
        header.style.backgroundColor = "#EAF1F7"; // Revert to default color
        header.style.boxShadow = "none"; // Remove the shadow
        // header.style.height = "150px";
    }
});
// document.addEventListener("scroll", function() {
//     var activePage = document.getElementById("active-page");
//     var scrollPosition = window.scrollY;

//     // Define a threshold value for when to change the background color
//     var threshold = 50;

//     if (scrollPosition > threshold) {
//         // Change the background color and border radius of the active page
//         activePage.style.backgroundColor = "#EAF1F7";
//         activePage.style.borderRadius = "16px";
//         activePage.style.border = "4px solid #EAF1F7";
//     } else {
//         // Revert to the default background color and border radius
//         activePage.style.backgroundColor = "#EAF1F7";
//         activePage.style.borderRadius = "0px 0 0px 0px";
//         activePage.style.border = "4px solid #EAF1F7";
        
//     }
// });






// HIDDEN CONTENT FUNCTION
 document.addEventListener('DOMContentLoaded', function() {
    var loadMoreBtn = document.getElementById('load-more-btn');
    var hiddenContainer = document.getElementById('hidden-container');
    var attractionsContainer = document.getElementById('attractions-container');

    loadMoreBtn.addEventListener('click', function(event) {
      // Prevent the default behavior of the anchor element
      event.preventDefault();

      // Move entire cards from hidden container to attractions container
      while (hiddenContainer.firstChild) {
        attractionsContainer.appendChild(hiddenContainer.firstChild);
      }

      // Hide the "Load More" button if there are no more hidden items
      if (hiddenContainer.children.length === 0) {
        loadMoreBtn.style.display = 'none';
      }
    });
  });

  //TYPE TITLE
  document.addEventListener("DOMContentLoaded", function () {
    // Get the title and button elements
    var imgTitle = document.getElementById("img-title");
    var imgButton = document.getElementById("img-button");
  
    // Check if elements exist before proceeding
    if (imgTitle && imgButton) {
      // Add a delay for a better visual effect
      setTimeout(function () {
        // Clear the existing text content
        imgTitle.textContent = "";
  
        // Show the title with a typing effect
        typeText(imgTitle, "The Mother Nature Camping");
        imgTitle.classList.remove("hidden");
        imgTitle.style.opacity = 1;
  
        // Show the button with a fade-in effect after a longer delay (e.g., 500 milliseconds)
        setTimeout(function () {
          imgButton.classList.remove("hidden");
          imgButton.style.opacity = 1;
        }, 2500);
      }, 300);
  
      function typeText(element, text) {
        var index = 0;
        var typingSpeed = 100; // Adjust typing speed in milliseconds
  
        function typeCharacter() {
          element.textContent += text[index];
          index++;
  
          if (index < text.length) {
            setTimeout(typeCharacter, typingSpeed);
          }
        }
  
        typeCharacter();
      }
    }
  });
  
  // Add a media query for mobile styles
  if (window.matchMedia("(max-width: 768px)").matches) {
    var mobileImgTitle = document.getElementById("img-title");
    var mobileImgButton = document.getElementById("img-button");
  
    // Check if elements exist before proceeding
    if (mobileImgTitle && mobileImgButton) {
      mobileImgTitle.style.fontSize = "24px"; // Adjust the font size for mobile screens
      mobileImgButton.style.fontSize = "14px"; // Adjust the font size for the button on mobile screens
      mobileImgButton.style.height = "15px";
      mobileImgButton.style.width = "240px";
      mobileImgButton.style.color = "#1F311F";
    }
  }

// BURGUER MENU
function toggleMenu() {
    const headerMenu = document.querySelector('.header-menu');
    headerMenu.classList.toggle('show');

    // Change the logo URL for mobile
    const logo = document.getElementById('logo-img');
    if (headerMenu.classList.contains('show')) {
        logo.src = "./Images/logomobile.svg"; // Replace with the desired mobile logo URL
    } else {
        logo.src = "./Images/Logo.svg"; // Replace with the original logo URL
    }

    // Toggle a class on the burger menu
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.classList.toggle('active');
}

//SHOW ANSWERS
function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
}