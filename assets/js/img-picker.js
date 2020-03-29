const labels = {
    "U.S Labels": ['https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg', 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'],
    "Labels (Outside U.S)": ['https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80', 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'],
    "publishing": ['https://pbs.twimg.com/profile_images/653700295395016708/WjGTnKGQ_400x400.png', 'https://pbs.twimg.com/profile_images/653700295395016708/WjGTnKGQ_400x400.png', 'https://pbs.twimg.com/profile_images/653700295395016708/WjGTnKGQ_400x400.png', 'https://pbs.twimg.com/profile_images/653700295395016708/WjGTnKGQ_400x400.png', 'https://pbs.twimg.com/profile_images/653700295395016708/WjGTnKGQ_400x400.png', 'https://pbs.twimg.com/profile_images/653700295395016708/WjGTnKGQ_400x400.png', 'https://pbs.twimg.com/profile_images/653700295395016708/WjGTnKGQ_400x400.png', 'https://pbs.twimg.com/profile_images/653700295395016708/WjGTnKGQ_400x400.png', 'https://pbs.twimg.com/profile_images/653700295395016708/WjGTnKGQ_400x400.png']
}
selectedLabel = Object.keys(labels)[0];

const imgActionLeft = document.querySelector('.img-action.left');
const imgActionRight = document.querySelector('.img-action.right');
const scrollContainer = document.querySelector('.img-slider-container');
const labelsActions = document.querySelector('#labels-actions');
const imgPickerImagesContainer = document.querySelector('#img-picker-images');


imgActionLeft.addEventListener('click', goLeft);
imgActionRight.addEventListener('click', goRight);

function goLeft() {

    scrollContainer.scrollBy(-120, 0)
}

function goRight() {
    scrollContainer.scrollBy(120, 0)
}

function generateActions() {
    let html = '';

    Object.keys(labels).map((labelName, index) => {
        html+= `
        <div onClick="setImgPickerItems('${labelName}')" class="section-action ${labelName == selectedLabel ? 'selected' : ''}">
            ${labelName}
        </div>
        `
    });
    labelsActions.innerHTML = html;
}

function setImgPickerItems(index) {
    selectedLabel = index;
    generateActions();

    let html = '';
    labels[index].map(label => {
        html += `
            <div class="img-item"  style="background: url(${label})"></div>
        `
    });
    console.log(imgPickerImagesContainer)
    imgPickerImagesContainer.innerHTML = html;
}


generateActions();
setImgPickerItems(Object.keys(labels)[0]);