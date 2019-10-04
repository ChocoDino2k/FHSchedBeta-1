var cookieThemes = ['Cherry','Aqua'];
var themes = [];

function createThemes()
{
  var sidebarList = document.querySelector("#sidebar-list");

  for (var i = 0; i < cookieThemes.length; i++)
  {
    var themeLi = document.createElement("li");
    sidebarList.appendChild(themeLi);

    themes[i] = document.createElement("a");
    themes[i].setAttribute("role","button");
    themes[i].setAttribute("onclick", "localStorage.setItem('mode', '" + cookieThemes[i].toLowerCase() + "'); document.querySelector('body').className = ''; document.querySelector('body').classList.add('" + cookieThemes[i].toLowerCase() + "')");
    themes[i].innerHTML = cookieThemes[i] + " Mode";
    themeLi.appendChild(themes[i]);
  }
  loadThemes();
}

//Loads darkmode upon the website refresh
function loadThemes()
{
  document.querySelector("#body").classList.remove('dark');
  switch (localStorage.getItem('mode'))
  {
    case 'classic':
      document.querySelector("#body").classList.remove('dark');
      break;
    case 'dark':
      document.querySelector("#body").classList.add('dark');
      break;
    case 'cherry':
      document.querySelector("#body").classList.add('cherry');
      break;
    case 'aqua':
      document.querySelector("#body").classList.add('aqua');
      break;
    default:
      document.querySelector("#body").classList.add('dark');
      break;
  };
}

//Changes styles for the sidebar
function showSidebar()
{
  document.querySelector("#sidebar").classList.toggle('active');
  document.querySelector("#ham-a").classList.toggle('active');
}

//Changes styles for National Guard Banner
function showNGBanner()
{
  document.querySelector("#national-guard-banner").classList.toggle('active');
}
