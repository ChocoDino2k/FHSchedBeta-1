var localThemes = [];
var themes = [];

//Adds the unlocked themes to sidebar
function createThemes()
{
  if(localStorage.getItem('localThemes') == "" || localStorage.getItem('localThemes') == null)
  {
    localThemes = [];
    localStorage.setItem('localThemes', JSON.stringify(localThemes));
  }
  localThemes = JSON.parse(localStorage.getItem('localThemes'));

  var sidebarList = document.querySelector("#sidebar-list");

  for (var i = 0; i < localThemes.length; i++)
  {
    themes[i] = createTheme(localThemes[i]);
  }
  loadThemes();
}

//Loads darkmode upon the website refresh
function loadThemes()
{
  document.querySelector("#body").classList = "";
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

//Take input to add new mode
function addTheme()
{
  var input = document.querySelector("#modeInput").value;
  input = input.toLowerCase();
  if(localThemes.indexOf(input) == -1)
  {
    switch (input)
    {
      case 'cherry':
        localThemes.push('cherry');
        themes.push(createTheme('Cherry'));
        break;
      case 'aqua':
        localThemes.push('aqua');
        themes.push(createTheme('Aqua'));
        break;
      default:
        console.log("fail");
        break;
    };
  }
  loadThemes();
}

function createTheme(modeName)
{
  localStorage.setItem('localThemes', JSON.stringify(localThemes));

  upModeName = modeName.charAt(0).toUpperCase() + modeName.substring(1);
  var sidebarList = document.querySelector("#sidebar-list");

  var themeLi = document.createElement("li");
  sidebarList.appendChild(themeLi);

  var newTheme = document.createElement("a");
  newTheme.setAttribute("role","button");
  newTheme.setAttribute("onclick", "localStorage.setItem('mode', '" + modeName.toLowerCase() + "'); document.querySelector('body').className = ''; document.querySelector('body').classList.add('" + modeName.toLowerCase() + "')");
  newTheme.innerHTML = upModeName + " Theme";
  themeLi.appendChild(newTheme);

  localStorage.setItem('mode', modeName.toLowerCase());
  return newTheme;
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
