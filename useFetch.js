import  { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    
  const isMounted = useRef(true);
  const [state, setstate] = useState({data:null,loading: true, error: null});
  useEffect(()=>{
    return () =>{
      isMounted.current = false;
    }
  },[]);
        
  useEffect( ()=> {
    setstate({loading: true,error: null,data:null});
    
      fetch(url)
      .then( resp => resp.json())
      .then(data => {
        //setTimeout(()=>{
          if( isMounted.current){

         
          setstate({
            loading: false,
            error: null,
            data
        })
      }
     //   },4000)

        
      })
      .catch(()=>{
        setstate({
          data: null,
          loading: false,
          error: 'no se pudo cargar la info'
        })
      }) ;

  },[url]);
  return state;
}


