const apiKey = 'AIzaSyAeKF7r_QH0cFRjfxiqlDdz0wezqlwx-d8';

function requestAPI(id) {

    var requestURL = `https://www.googleapis.com/youtube/v3/search?channelId=${id}&key=${apiKey}&order=date&part=snippet`;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.onload = function() {
        var videos = request.response['items'];
        for (var j = 0; j < videos.length; j++) {

            var video = videos[j];
        
            switch (video['snippet']['liveBroadcastContent']) {
                case 'live':
                    var content = document.querySelector('#liveTemplate').content;
                    break;
                case 'upcoming':
                    var content = document.querySelector('#upcomingTemplate').content;
                    break;
                default:
                    var content = null;
            }

            if (content) {
                content.querySelector('a').href = 'https://www.youtube.com/watch?v=' + video['id']['videoId'];
                content.querySelector('a').textContent = video['snippet']['channelTitle'] + '　' + video['snippet']['title'];
                content.querySelector('img').src = video['snippet']['thumbnails']['default']['url'];
                var clone = document.importNode(content, true);
                document.body.appendChild(clone);
            }
        
        }
    };
    request.send();

}

requestAPI(channels['月ノ美兎']);
requestAPI(channels['樋口楓']);
requestAPI(channels['静凛']);
