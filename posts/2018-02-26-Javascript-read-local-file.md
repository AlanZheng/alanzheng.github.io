---
layout:post
title: How to use javascript read local file
tags:[javascript read file]
---

```
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

readTextFile("file:///C:/your/path/to/file.txt");
```

[refer](https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file)
