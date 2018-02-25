function logobtn()
{
    var s = document.getElementsByClassName("sidebar");
    for (var i = 0; i < s.length; i++)
    {
        s[i].classList.toggle('active')
    }
}
/*
function createSidebar()
{
    var node = document.getElementsByClassName("sidebar");
    if( node.length > 0 )
    {
        var sb = '
        <ul> \
              <li>Tutorials \
                <ul class="submenu"> \
                    <li><a href="tutorials/css">CSS</a></li> \
                    <li><a href="tutorials/gimp">GIMP</a></li> \
                </ul> \
              </li> \
              <li>Projects \
                <ul class="submenu"> \
                    <li><a href="projects/gimp">GIMP</a></li> \
                    <li><a href="projects/steemtools">SteemitTools</a></li> \
                </ul> \
              </li> \
              <li>Demos</li> \
        </ul>';
        node[0].innerHTML();
    }
}
*/