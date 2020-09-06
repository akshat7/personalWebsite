let rotator_list = ["Software Developer.", "TEDx Speaker.", "IIIT-A alumnus.", "Photography Blogger."];
let i = 0;
rotator = document.getElementsByClassName("rotator")[0];

setInterval(() => {
    rotator.textContent = rotator_list[i];
    i = (i + 1) % rotator_list.length;
}, 1000);