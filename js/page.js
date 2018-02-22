function logobtn()
{
    var s = document.getElementsByClassName("sidebar");
    for (var i = 0; i < s.length; i++)
    {
        s[i].classList.toggle('active')
    }
}