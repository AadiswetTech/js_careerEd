async function openCamera()
{
    try{
        const stream=await navigator.mediaDevices.getUserMedia({video:true})
        const videoElement=document.getElementById('cameraFeed');
       videoElement.srcObject=stream;
        videoElement.style.display='block'
    }
    catch(error)
    {

    }
}
  async function speech()
{

    const text=document.getElementById()
     const utterence=new SpeechSynthesisUtterance(text);
   await window.speechSynthesis.speak(utterence);

}
