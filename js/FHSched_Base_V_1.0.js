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
    var upTheme = localThemes[i].charAt(0).toUpperCase() + localThemes[i].substring(1);
    addLink(upTheme);
  }
  loadThemes();
}

//Loads darkmode upon the website refresh
function loadThemes()
{
  document.querySelector("#body").classList = "";

  var theme = localStorage.getItem('mode');
  document.querySelector("#body").classList.add(theme);
}

//Take input to add new mode
function addTheme()
{
  var input = document.querySelector("#modeInput").value;
  input = input.toLowerCase();
  var upInput = input.charAt(0).toUpperCase() + input.substring(1);
  if(localThemes.indexOf(input) == -1)
  {
    $.ajax({
      url:'http://fhsched.com/css/' + upInput + '_Mode_1.0.css',
      error: function()
      {
        console.log("t");
      },
      success: function()
      {
        localThemes.push(input);
        themes.push(createTheme(upInput));
        addLink(upInput);
      }
    });
  }
  loadThemes();
}

function addLink(file)
{
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', 'css/' + file + '_Mode_1.0.css');
  document.getElementsByTagName('head')[0].appendChild(link);
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
