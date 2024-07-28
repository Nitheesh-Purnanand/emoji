const followDiv = document.querySelector('.follow-div');
let container = document.querySelector(".container");
let width = container.style.width;

let isDragging = false;

document.addEventListener('mousedown', (event) => {
    isDragging = true;
    followDiv.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    followDiv.style.cursor = 'grab';
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        followDiv.style.left = `${event.clientX - followDiv.offsetWidth / 2}px`;
        followDiv.style.top = `${event.clientY - followDiv.offsetHeight / 2}px`;
        
        if( event.clientY - followDiv.offsetHeight/2 <= 0 && event.clientX - followDiv.offsetWidth / 2 <= 0){
            followDiv.style.top = '0px';
            followDiv.style.left = '0px';
        }
       else if( event.clientY - followDiv.offsetHeight/2 >= 150 && event.clientX - followDiv.offsetWidth / 2 <= 0){
            followDiv.style.top = '150px';
            followDiv.style.left = '0px';
        }
        else if( event.clientY - followDiv.offsetHeight/2 >= 150 && event.clientX - followDiv.offsetWidth / 2 >= 150){
            followDiv.style.top = '150px';
            followDiv.style.left = '150px';
        }
        else if( event.clientY - followDiv.offsetHeight/2 <= 0 && event.clientX - followDiv.offsetWidth / 2 >= 150){
            followDiv.style.top = '0px';
            followDiv.style.left = '150px';
        }
        else if (event.clientX - followDiv.offsetWidth / 2 >= 150){
            followDiv.style.left = '150px';
        }
        else if (event.clientY - followDiv.offsetHeight/2 >= 150 ){
            followDiv.style.top = '150px';
        }
        else if (event.clientX - followDiv.offsetWidth / 2 <= 0){
            followDiv.style.left = '0px';
        }
        else if( event.clientY - followDiv.offsetHeight/2 <= 0){
            followDiv.style.top = '0px';
        }
    }
});



const followDiv1 = document.querySelector('.follow-div1');
let container1 = document.querySelector(".container1");
let width1 = container.style.width;

let isDragging1 = false;

document.addEventListener('mousedown', (event) => {
    isDragging1 = true;
    followDiv1.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging1 = false;
    followDiv1.style.cursor = 'grab';
});

document.addEventListener('mousemove', (event) => {
    if (isDragging1) {
        followDiv1.style.left = `${event.clientX - followDiv1.offsetWidth / 2}px`;
        followDiv1.style.top = `${event.clientY - followDiv1.offsetHeight / 2}px`;
        
        if( event.clientY - followDiv1.offsetHeight/2 <= 0 && event.clientX - followDiv1.offsetWidth / 2 <= 0){
            followDiv1.style.top = '0px';
            followDiv1.style.left = '0px';
        }
       else if( event.clientY - followDiv1.offsetHeight/2 >= 150 && event.clientX - followDiv1.offsetWidth / 2 <= 0){
            followDiv1.style.top = '150px';
            followDiv1.style.left = '0px';
        }
        else if( event.clientY - followDiv1.offsetHeight/2 >= 150 && event.clientX - followDiv1.offsetWidth / 2 >= 150){
            followDiv1.style.top = '150px';
            followDiv1.style.left = '150px';
        }
        else if( event.clientY - followDiv1.offsetHeight/2 <= 0 && event.clientX - followDiv1.offsetWidth / 2 >= 150){
            followDiv1.style.top = '0px';
            followDiv1.style.left = '150px';
        }
        else if (event.clientX - followDiv1.offsetWidth / 2 >= 150){
            followDiv1.style.left = '150px';
        }
        else if (event.clientY - followDiv1.offsetHeight/2 >= 150 ){
            followDiv1.style.top = '150px';
        }
        else if (event.clientX - followDiv1.offsetWidth / 2 <= 0){
            followDiv1.style.left = '0px';
        }
        else if( event.clientY - followDiv1.offsetHeight/2 <= 0){
            followDiv1.style.top = '0px';
        }
    }
});