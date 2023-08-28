import { useState, useEffect } from "react";

const useFetch  = (url) =>
{
    
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
       fetch(url)
       .then(response => {
        if(!response.ok){
            throw Error(
                "Could not find the data"
            );
        }
        return response.json()
       })
       .then(data =>{
        setData(data);
        setPending(false);
        setError(null);
       } )
       .catch((e)=>
       {
        setError(e.message);
        setPending(false);
       })
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;