import './ImageComponent.css'
import PerfumeImageDesktop from '../../assets/images/image-product-desktop.jpg'
import PerfumeImageMobile from '../../assets/images/image-product-mobile.jpg'

function ImageComponent(){
     return(
        <section id="ImageContainer">
            <picture id="ProductImage">
                <source srcSet={PerfumeImageDesktop} media="(min-width: 638px)"></source>
                <img src={PerfumeImageMobile} alt="product img"></img>
            </picture>
        </section>
     )
}
export default ImageComponent;