import "./Product.css"

function Product(props) {

        return(
            <div className='resultCard'>
                <div id='resultImg'></div>
                <h1 id='resultName'></h1>
                <h2 id='resultPrice'></h2>
                <h4 id='resultDesc'></h4>
                <button id='buyBtn'></button>
            </div>
        )
}

export default Product;
