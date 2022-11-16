export function customFetchAll(prods, time) {
    const aa = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(prods)
        }, time)
    })
    return aa
}

export function customFetchById(prods, time, id) {
    const aa = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(prods.filter((item)=> item.product_id === id)           
            )
        }, time)
    })
    return aa
}



