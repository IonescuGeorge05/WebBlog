// Function to return the page to the beginning
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Show or hide the back button based on page position
window.onscroll = function() { scrollFunction(); };  // corect: apel funcție fără punct suplimentar

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block"; // eliminat punctul după id
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}
