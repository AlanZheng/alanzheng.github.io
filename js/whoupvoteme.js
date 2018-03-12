steem.api.setOptions( { url: 'https://api.steemit.com' });
            document.getElementById('fetch').addEventListener('click', CalcUpVoted);
            
            function CalcUpVoted()
            {
                // call the main function
                whoUpvotedMe(document.getElementById('user').value);
            }
            
            function whoUpvotedMe(username)
            {
                return steem.api.getDiscussionsByAuthorBeforeDate(
                           username, '', new Date().toISOString().split('.')[0], document.getElementById('nb').value, function (err, posts){
                    var allUpvoters = getAllUpvoters(posts);
                    return countUpvoters(allUpvoters);
                });
            }
            
            function getUpvoters(post)
            {
                //return post.active_votes.map(upvote => upvote.voter);
                return post.active_votes.map( function(upvote) { return upvote.voter; } );
            }
            
            function getAllUpvoters(posts)
            {
                /*
                return posts.reduce(
                (all, currentPost) => {
                    var upvoters = getUpvoters(currentPost);
                    return all.concat(upvoters);
                }, []);
                */
                return posts.reduce(
                function(all, currentPost){
                    var upvoters = getUpvoters(currentPost);
                    return all.concat(upvoters);
                }, []);
            }
            
            function countUpvoters(allUpvoters)
            {
                /*
                var ret = allUpvoters.reduce((upvoteCounts, upvoter) => {
                    upvoteCounts[upvoter] = (upvoteCounts[upvoter] || 0) + 1;
                    return upvoteCounts;
                },{});
                */
                var ret = allUpvoters.reduce(function(upvoteCounts, upvoter){
                    upvoteCounts[upvoter] = (upvoteCounts[upvoter] || 0) + 1;
                    return upvoteCounts;
                },{});
                
                var xarray = [];
                var yarray = [];
                for (var k in ret)
                {
                    var a = '<a href = "https://steemit.com/@' + k  + '"' + ' target=_blank>' + k + '</a>';
                    xarray.push(a);
                    yarray.push(ret[k]);
                }
                
                var trace1 = {
                  x: xarray,
                  y: yarray,
                  mode: 'lines+markers',
                  type: 'scatter'
                };

                var data = [trace1];
                var layout = {
                    title: 'The steemitians who upvoted you',
                    displayLogo: false, // this one also seems to not work
                    showlegend: false,
                };
                var options = {
                    displayLogo: false, // this one also seems to not work
                    scrollZoom: true, // lets us scroll to zoom in and out - works
                    showLink: false, // removes the link to edit on plotly - works
                    modeBarButtonsToRemove: ['sendDataToCloud'],
                    displayModeBar: true, //this one does work
                };
                Plotly.newPlot('counter', data, layout, options);
                    
                //document.getElementById('counter').innerText += JSON.stringify(ret, null, 2);
                return ret;
            }