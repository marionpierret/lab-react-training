const Rating = ({children}) => {
 

    let rating ='';

    for(let i=0; i<5; i++){
        if(i < Math.round(children)){
            rating += '★'
        }else{
            rating += '☆'
        }
    }

    return(
        <div>
            {rating}
        </div>
    )

}

export default Rating;