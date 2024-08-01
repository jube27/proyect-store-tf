
import "./Product.css"

function Product({data}){
    //console.log(data.images[0])
let imag=[]
    return (
      
 
    <div class="col place-items-center  m-1 ">
            <div className="card" >
                <figure>
                <img src={data.image}  className="card-img-top min-h-24 max-h-60  rounded-2xl" alt=""/>
                </figure>
                <div className="card-body">
                    <h5 className="card-title m-2">{data.title}</h5>
                    <h5 className="card-price m-2">{data.price} $</h5>
                </div>
                <a href="#" className="btn btn-danger m-2">Compra Rápida</a>
            </div>

    </div>



    )

}
export default Product