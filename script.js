const typingElement = document.querySelector('.typing');
const text = typingElement.textContent;
typingElement.textContent = ''; // Clear the text initially
let index = 0;

function typeWriter() {
  typingElement.textContent += text.charAt(index);
  index++;

  if (index < text.length) {
    setTimeout(typeWriter, 150); // Adjust speed by changing the timeout
  } else {
    setTimeout(() => {
      typingElement.textContent = ''; // Clear the text after typing finishes
      index = 0;
      typeWriter(); // Restart typing effect
    }, 500); // Delay before restarting the effect (500ms here)
  }
}

// Start the typing effect
typeWriter();
document.querySelectorAll('.progress-bar').forEach(bar => {
    const value = bar.getAttribute('aria-valuenow');
    bar.style.width = `${value}%`;
  });
  // Function to toggle the visibility of the project details
function toggleDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    const toggleBtn = projectDetails.previousElementSibling.querySelector('.toggle-btn');
  
    // Toggle the 'show' class to show or hide the project details
    projectDetails.classList.toggle('show');
  
    // Change the "+" button to "-" when details are visible and vice versa
    if (projectDetails.classList.contains('show')) {
      toggleBtn.textContent = '−';  // Change to minus when open
    } else {
      toggleBtn.textContent = '+';  // Change back to plus when closed
    }
  }
  
  // Optional: Smooth scroll for internal links (project links)
  document.querySelectorAll('.project-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,  // Adjust for header or padding
          behavior: 'smooth'
        });
      }
    });
  });
  function goToResumePage() {
    // Smooth scroll to the resume section
    document.querySelector('#resume').scrollIntoView({
      behavior: 'smooth'
    });
  }
  function toggleDetails(projectId) {
    const projectDetails = document.getElementById(projectId);
    const toggleBtn = projectDetails.previousElementSibling.querySelector('.toggle-btn');

    if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
        projectDetails.style.display = "block";
        toggleBtn.textContent = "-";
    } else {
        projectDetails.style.display = "none";
        toggleBtn.textContent = "+";
    }
}
  // project 
function toggleDetails(projectId) {
  const projectDetails = document.getElementById(projectId);
  const toggleBtn = projectDetails.previousElementSibling.querySelector('.toggle-btn');

  if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
      projectDetails.style.display = "block";
      toggleBtn.textContent = "-";
  } else {
      projectDetails.style.display = "none";
      toggleBtn.textContent = "+";
  }
}