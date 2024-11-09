import image from './assets/image.png'

function ImageButton() {

    let count = 0;


    const handleClickEvent = (e) => {
        console.log(e);
        e.target.style.display = 'none';
    }

    return(
        <>
        <img src={image} alt="" onDoubleClick={(e) => handleClickEvent(e)} />
        </>
    )
}

export default ImageButton;