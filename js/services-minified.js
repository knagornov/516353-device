var servicesButtons=document.querySelectorAll(".services-button"),servicesSlides=document.querySelectorAll(".services-slides-item");servicesButtons[0].classList.add("current-service"),servicesSlides[0].classList.add("service-show"),servicesButtons[0].addEventListener("click",function(s){if(s.preventDefault(),!servicesButtons[0].classList.contains("current-service")){for(var e=0;e<servicesButtons.length;e++)servicesButtons[e].classList.remove("current-service"),servicesSlides[e].classList.remove("service-show");servicesButtons[0].classList.add("current-service"),servicesSlides[0].classList.add("service-show")}}),servicesButtons[1].addEventListener("click",function(s){if(s.preventDefault(),!servicesButtons[1].classList.contains("current-service")){for(var e=0;e<servicesButtons.length;e++)servicesButtons[e].classList.remove("current-service"),servicesSlides[e].classList.remove("service-show");servicesButtons[1].classList.add("current-service"),servicesSlides[1].classList.add("service-show")}}),servicesButtons[2].addEventListener("click",function(s){if(s.preventDefault(),!servicesButtons[2].classList.contains("current-service")){for(var e=0;e<servicesButtons.length;e++)servicesButtons[e].classList.remove("current-service"),servicesSlides[e].classList.remove("service-show");servicesButtons[2].classList.add("current-service"),servicesSlides[2].classList.add("service-show")}});