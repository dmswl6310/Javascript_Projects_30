
var video=document.querySelector("video");
var playButton=document.querySelector(".player__button");
var volumeSlider=document.querySelector("input[name='volume']");
var rateSlider=document.querySelector("input[name='playbackRate']");

const handleClick = (e) => {
    if(e.target.innerText==="►"){
        
        e.target.innerText="❚ ❚";
        video.play();

    }else{

        e.target.innerText="►";
        video.pause();

    }
  };

  const handleVolume=(e)=>{
    video.volume=e.target.value;
  }
  const handleRate=(e)=>{
    video.playbackRate=e.target.value;
  }

playButton.addEventListener("click", handleClick)
volumeSlider.addEventListener("input",handleVolume);
rateSlider.addEventListener("input",handleRate);
