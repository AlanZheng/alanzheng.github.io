steem.api.setOptions({ url: 'https://api.steemit.com' });
    document.getElementById('fetch').addEventListener('click', Upvote);
    
    function Upvote()
    {
        accounts = $("#votee").val().split(/\s+/);
        accounts.forEach(function (element,i,array)
        {
            if( $("#permlink").val() != "" )
            {
                steem.broadcast.vote($("#wif").val(), $("#voter").val(), $("#votee").val(), $("#permlink").val(), Number($("#nb").val())*100, function(err1, res) 
                {
                    if( !err1 )
                        document.getElementById("info").innerHTML = JSON.stringify(res, undefined, 2);
                    else
                        document.getElementById("info").innerHTML = JSON.stringify(err1.message, undefined, 2);
                });
            }
            else
            {
                var count = 1;
                steem.api.getDiscussionsByAuthorBeforeDate(element,null, new Date().toISOString().split('.')[0],count, function(err, response)
                {
                    response.forEach(function (e,i,a)
                    {
                            steem.broadcast.vote($("#wif").val(), $("#voter").val(), element, e.permlink, Number($("#nb").val())*100, function(err1, res) 
                            {
                                if( !err1 )
                                    document.getElementById("info").innerHTML = JSON.stringify(res, undefined, 2);
                                else
                                    document.getElementById("info").innerHTML = JSON.stringify(err1.message, undefined, 2);
                            });
                    });
                });
            }
        });
    }