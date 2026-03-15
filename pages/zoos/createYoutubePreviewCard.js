const createYoutubePreviewCard = (videoInfo, selectedId) => {
    return `
    <div class="youtube-preview-thumbnail-container" ${videoInfo.id === selectedId ? 'selected-yt-preview' : ''} id="${videoInfo.id}">
    <div class="cam-container">
        <span class="subheader">cam ${videoInfo.index}</span>
        <img src="../../assets/icons/live_cam_icon.png" alt="live cam icon"/>
    </div>
    <img src="https://img.youtube.com/vi/${videoInfo.id}/maxresdefault.jpg" class="carousel-yt-img " alt="Youtube thumbnail" width="320px" height="210px">
    </div>
   `;
};
export default createYoutubePreviewCard;
