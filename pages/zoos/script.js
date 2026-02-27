import zoosData from "../../data/zoos_data.js";

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const didYouKnowTextElement = document.getElementById('didYouKnow');
const youtubePreviewContainerElement = document.getElementById('youtubePreviewContainer');
youtubePreviewContainerElement.innerHTML = `
    <iframe 
        width="560"
        height="315"
        src="${zoosData[id].youtubePreviewSrc}"
        title="YouTube video player"
        frameborder="0" 
        allow="accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share"
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
    </iframe>
`;

didYouKnowTextElement.innerText = zoosData[id].didYouKnowText;