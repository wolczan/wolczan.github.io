var nav = document.getElementById("nav");
var links = nav.getElementsByTagName("a");

// Function to add "active" class to a link and its previous sibling
function setActiveLink(link) {
    // Remove "active" class from all links
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
    
    // Add "active" class to the clicked link and its previous sibling
    link.classList.add("active");
    var previousSibling = link.previousElementSibling;
    if (previousSibling) {
        previousSibling.classList.add("active");
    }
}

// Add click event listeners to the links
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
        setActiveLink(this);
      }, { passive: true });
}


function submitSearch(event) {
  event.preventDefault(); // prevent form submission
  const query = document.getElementById("search-input").value;
  const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
  window.open(searchUrl, "_blank"); // open in new tab
  document.getElementById("search-input").value = ""; // reset input field
}

let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
  if (counter == 90 ) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 28,77);

let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
  if (counter2 == 80 ) {
    clearInterval();
  } else {
    counter2 += 1;
    number2.innerHTML = counter2 + "%";
  }
}, 28);
let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
  if (counter3 == 70 ) {
    clearInterval();
  } else {
    counter3 += 1;
    number3.innerHTML = counter3 + "%";
  }
}, 27);
let number4 = document.getElementById("number4");
let counter4 = 0;
let intervalId = setInterval(() => {
  if (counter4 === 70) {
    clearInterval(intervalId);
  } else {
    counter4 += 1;
    number4.innerHTML = counter4 + "%";
  }
}, 27);

/*const backToTopButton = document.querySelector('#back-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 400) { // Change the value to adjust the scroll position at which the element should appear
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});     */

const backToTopButton = document.querySelector('#back-to-top');
let shouldDisplayButton = false;

function toggleBackToTopButton() {
  if (window.scrollY > 400) {
    shouldDisplayButton = true;
  } else {
    shouldDisplayButton = false;
  }

  if (shouldDisplayButton) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
}

window.addEventListener('scroll', toggleBackToTopButton);

 // Scroll the page to the top when the page is loaded
 document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
      window.scrollTo(0, 0);
  }, 500); // Adjust the delay time as needed
});



document.addEventListener('DOMContentLoaded', function() {
  var delay = 1000;
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Get the target element's top position
      document.cookie = "user_preferences=value; SameSite=None; Secure";
     

      
      var target = document.querySelector(this.getAttribute('href')); 
      var top = target.getBoundingClientRect().top + window.scrollY;
      
      // Scroll to the target element's position with a smooth effect
      window.scrollTo({
          top: top,
          behavior: 'smooth'
      });
      
      // Add a delay before scrolling to the target element
      setTimeout(function() {
          window.location.hash = this.getAttribute('href');
      }.bind(this), delay);
    }); // <-- Closing brace for anchor event listener
  });
}); // <-- Closing brace for DOMContentLoaded event listener




  window.onload = function() {
    window.scrollTo(0, 0);
  };
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } 
  
  var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };
  
  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
  
      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
      var that = this;
      var delta = 200 - Math.random() * 100;
  
      if (this.isDeleting) { delta /= 2; }
  
      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }
  
      setTimeout(function() {
      that.tick();
      }, delta);
  };
  
  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
  };
  
  
 function showMessage() {
  var name = encodeURIComponent(document.getElementById('fname').value);
  var email = encodeURIComponent(document.getElementById('lname').value);
  var enquiryType = encodeURIComponent(document.getElementById('type').value);
  var message = encodeURIComponent(document.getElementById('subject').value);

  var subject = "Enquiry from " + name + " (" + enquiryType + ")";
  var body = "Name: " + name + "\nEmail: " + email + "\nEnquiry Type: " + enquiryType + "\n\nMessage:\n" + message;

  window.location.href = 'mailto:abc@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}

function resetForm() {
  showMessage(); // Call showMessage first
  document.getElementById('myForm').reset();
}

document.getElementById('submitButton').addEventListener('click', resetForm);


 





  
  


  
