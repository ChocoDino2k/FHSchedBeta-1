var localThemes = ['dark'];
var themes = [];

//Adds the unlocked themes to sidebar
function createThemes()
{
  if(localStorage.getItem('localThemes') == "" || localStorage.getItem('localThemes') == null || localStorage.getItem('localThemes') == "[]" )
  {
    localThemes = ['dark'];
    localStorage.setItem('localThemes', JSON.stringify(localThemes));
  }
  localThemes = JSON.parse(localStorage.getItem('localThemes'));
  //localStorage.setItem('localThemes', JSON.stringify(['dark','example']));

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
  document.querySelector("#modeInput").value = '';
  input = input.toLowerCase();
  var upInput = input.charAt(0).toUpperCase() + input.substring(1);
  if(localThemes.indexOf(input) == -1)
  {
    var cssLength = document.styleSheets.length;
    testCss = addLink(upInput);
    setTimeout(testThemes, 500, cssLength,testCss,input,upInput);
  }
}

function testThemes(cssLength,testCss,input,upInput)
{
  if (document.styleSheets[cssLength].cssRules.length == 0)
  {
    document.querySelector("#modeInput").setAttribute('placeholder','Invalid');
    testCss.parentNode.removeChild(testCss);
  }
  else
  {
    localThemes.push(input);
    themes.push(createTheme(upInput));
    localStorage.setItem('mode', input);
    document.querySelector("#modeInput").setAttribute('placeholder','Accepted');
    loadThemes();
  }
}

function addLink(file)
{
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', isHomePage + 'css/' + file + '_Mode_1.0.css');
  document.getElementsByTagName('head')[0].appendChild(link);
  return link;
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

  return newTheme;
}

//Changes styles for the sidebar
function showSidebar()
{
  document.querySelector("#sidebar").classList.toggle('active');
  document.querySelector("#ham-a").classList.toggle('active');
  document.querySelector("#add-theme").classList.remove('active');
}

//Changes styles for National Guard Banner
function showNGBanner()
{
  document.querySelector("#national-guard-banner").classList.toggle('active');
}

//Changes styles for + Theme
function showAddTheme()
{
  document.querySelector("#add-theme").classList.toggle('active');
}

function shuttleBus()
{
  console.log("test");
  if(localStorage.getItem('shuttleBus') == "true")
  {
    localStorage.setItem('shuttleBus', "false");
    document.querySelector("#shuttle-bus-toggle").textContent = "Shuttle Bus Off";
    console.log("f");
  }
  else
  {
    localStorage.setItem('shuttleBus', "true");
    document.querySelector("#shuttle-bus-toggle").textContent = "Shuttle Bus On";
    console.log("t");
  }
  takeShuttleBus = JSON.parse(localStorage.getItem('shuttleBus'));
  checkCurPeriod();
  updateClock();
}

document.addEventListener('click', function(event)
{
  var isClickInside = document.querySelector("#sidebar").contains(event.target) || document.querySelector("#ham-a").contains(event.target);

  if (!isClickInside && document.querySelector("#sidebar").classList.contains('active'))
  {
    showSidebar();
  }
});
