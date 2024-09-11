

tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        backgroundColor: {
          dark: "black",
        },
      
      },
    },
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelector(".theme-controller")
      .addEventListener("change", function () {
        if (this.checked) {
          document.documentElement.classList.add("dark");
          document.documentElement.setAttribute("data-theme", "black");
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.setAttribute("data-theme", "light");
        }
      });
  });
  


 



document.addEventListener('DOMContentLoaded', function() {
  dayjs.locale('fr');
  dayjs.extend(window.dayjs_plugin_updateLocale);
  dayjs.updateLocale('fr', {
      formats: {
          LLL: 'dddd D MMMM YYYY'
      }
  });

  function updateTime() {
      const date = dayjs();
      const currentTimeElement = document.querySelector('.current-time');
      if (currentTimeElement) {
          currentTimeElement.innerHTML = `
              <span class="date">${date.format('dddd D MMMM YYYY, HH:mm:ss').toUpperCase()}</span>
             
          `;
      }
  }

  setInterval(updateTime, 1000);

});

updateTime();