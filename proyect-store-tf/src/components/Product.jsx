
import "./Product.css"

function Product({data}){
    console.log(data)

    return (
      
 
        <div class="col place-items-center border-2 border-purple-300 m-1 ">
            <div className="card " >
            <img src={data.image}  className="card-img-top min-h-24 max-h-60  rounded-2xl" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{data.price}</h5>
                <h5 className="card-text">{data.title}</h5>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
            </div>

    </div>



    )

}
export default Product