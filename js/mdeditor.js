var today = new Date().toISOString().split('T')[0];
            document.getElementById('filename').value = today + "-" + "unnamed.md";
            
            var testEditor;
            $(function() {
                testEditor = editormd("test-editormd", {
                    width   : "100%",
                    height  : "500",
                    watch : false,
                    path    : "/js/lib/",
                    toolbarIcons : function() {
                        return ["undo", "redo", "|", "h1", "h2", "h3", "h4", "h5", "h6","|", "bold", "del", "italic", "ucwords", "uppercase", "lowercase", "|",  "hr", "quote", "code", "code-block",  "table",  "list-ul", "list-ol",  "|",  "datetime", "pagebreak", "|", "file", "||", "watch", "fullscreen", "preview"]
                    },
                    
                    toolbarCustomIcons : {
                        file   : "<input type=\"file\" id=\"infile2\" accept=\".md\" />",
                    },
                    
                    onload : function(){
                        $("#infile2").bind("change", function(){
                            var file = document.getElementById('infile2').files[0];
                            var reader = new FileReader();
                            reader.onload = function(e) {
                                testEditor.cm.replaceSelection(reader.result);
                            }
                            reader.readAsText(file);
                        });
                    }
                });
            });
            
        // https://jsfiddle.net/k56eezxp/
        (function () {
            var textFile = null,
              makeTextFile = function (text) {
                var data = new Blob([text], {type: 'text/plain'});

                // If we are replacing a previously generated file we need to
                // manually revoke the object URL to avoid memory leaks.
                if (textFile !== null) {
                  window.URL.revokeObjectURL(textFile);
                }

                textFile = window.URL.createObjectURL(data);

                return textFile;
              };


              var save = document.getElementById('save');
              var textbox = document.getElementById('textbox');

              save.addEventListener('click', function ()
              {
                    var link = document.createElement('a');
                    var filename = document.getElementById('filename').value;
                    link.setAttribute('download', filename);
                    link.href = makeTextFile(textbox.value);
                    document.body.appendChild(link);

                    // wait for the link to be added to the document
                    window.requestAnimationFrame(function () {
                    var event = new MouseEvent('click');
                    link.dispatchEvent(event);
                    document.body.removeChild(link);
                    });
                
              }, false);
        })();
        
        $(document).ready(function () 
        {
			steem.api.setWebSocket("wss://steemd.steemitstage.com");
			$("#post").click(function () 
            {
				/** Broadcast a post */
                var permlink = md5( $("#title").val() );
                var author = $("#author").val();
                var tags = $("#tags").val().split(' ');
                var mainTag = tags[0];
                var title = $("#title").val();
                var postText = $("#textbox").val();
                var authorWif = $("#wif").val();
                steem.broadcast.comment(
                    authorWif,
                    '', // Leave parent author empty
                    mainTag,
                    author,
                    permlink,
                    title,
                    postText,
                    { tags: [ tags[1],tags[2],tags[3],tags[4] ] }, 
                    function(err, result) 
                    {
                        if(!err)
                            alert( JSON.stringify(result, undefined, 2) );
                        else
                            alert( JSON.stringify(err, undefined, 2) );
                    });	
            });
        });