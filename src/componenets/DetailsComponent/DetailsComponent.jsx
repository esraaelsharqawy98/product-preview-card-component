import './DetailsComponent.css'
import CartIcon from '../../assets/images/icon-cart.svg'
function DetailsComponent(){
    return(
        <section id="ProductDetailsContainer">
            <p id="ProductCategory">Perfume</p>
            <h1 id="ProductTitle">Gabrielle Essence Eau De Parfum</h1>
            <p id="ProductDescription">A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.</p>
            <div id="PriceContainer">
                <p id="ProductPrice">$149.99</p>
                <p id="ProductOriginalPrice"><s>$169.99</s></p>
            </div>
            <button id="ProductButton">
               <img src={CartIcon} alt="cart icon" id='CartIcon'></img>
               Add to Cart
            </button>
       </section>
    )
}
export default DetailsComponent;