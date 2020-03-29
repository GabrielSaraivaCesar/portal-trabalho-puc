const songs = [
    {
        image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/4/b/d/4/422911425933589.jpg',
        title: 'Avant Gardener',
        desc: 'Courtney Barnett',
        link: 'https://youtu.be/bcnIhzaDTd0',
        audio: 'avantg.m4a'
    },
    {
        image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/0/a/9/f/422921425933594.jpg',
        title: 'Elevator Operator',
        desc: 'Courtney Barnett',
        link: 'https://youtu.be/H-wm0EdoeN8',
        audio: 'elevator.m4a'
    },
    {
        image: 'https://i.ytimg.com/vi/TeaDE1magRk/maxresdefault.jpg',
        title: 'Thinking Of A Place',
        desc: 'The War On Drugs',
        link: 'https://youtu.be/TeaDE1magRk',
        audio: 'thinking.m4a'
    },
    {
        image: 'https://m.fringster.com/content/images/651.jpg',
        title: 'Can\'t Stop',
        desc: 'Red Hot Chili Peppers',
        link: 'https://youtu.be/8DyziWtkfBw',
        audio: 'cant.m4a'
    },
    {
        image: 'https://lastfm.freetls.fastly.net/i/u/770x0/a39c5950a6414a119e28333829b5a720.jpg',
        title: 'Like a Stone',
        desc: 'Audioslave',
        link: 'https://www.youtube.com/watch?v=7QU1nvuxaMA',
        audio: 'stone.m4a'
    },
    {
        image: 'https://ksr-ugc.imgix.net/assets/015/984/448/14750edeb1811814b2742cf1f6e3e9ed_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1552&h=873&fit=crop&v=1490329108&auto=format&frame=1&q=92&s=ebf99ce66a4c308cf99a158e94afba3a',
        title: 'Sea Of Dreams',
        desc: 'Oberhofer',
        link: 'https://www.youtube.com/watch?v=f1i2H63GDHs',
        audio: 'sea.m4a'
    },
]
const songsArea = document.querySelector('#songs-area');
const audioSource = document.querySelector('#audio-source');
const audioProvider = document.querySelector('#audio-provider');
const audioArea = document.querySelector('#audio-area');
var selected = 0;





function loadSongs() {
    let html = "";
    songs.map((song, index) => {
        html+= `
                    <div class="col-rev-5-3" >
                        <div class="col-10"  style="padding: 0;">
                            <div onClick="setSelected(${index})" class="news-image-box-tiny albun-image" data-image="${song.image}"></div>
                        </div>
                        <div class="col-10 news-info-area-tiny">
                            <div class="news-info">
                                <div class="news-title">${song.title}</div>
                                <div class="news-desc">${song.desc}</div>
                            </div>
                        </div>
                    </div>
        `
    });

    songsArea.innerHTML = html;
}

function setSelected(index) {
    selected = index;
    audioSource.src = `./assets/audio/${songs[selected].audio}`;
    document.querySelector('#audio-area').setAttribute('data-title', `${songs[selected].title} - ${songs[selected].desc}`)
    audioProvider.load();
    audioProvider.play();

}

loadSongs();
setSelected(0);