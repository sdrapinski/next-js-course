import React from 'react'
// łapie wszystkie routy po /docs
// np /docs/example
// np /docs/example/file1 itp
const Docs = ({params}:{
    params:{
        slug:string[]
    }
}) => {
    if(params.slug.length===2){
        return <h1>Docs for feature {params?.slug[0]} and concept {params.slug[1]} </h1>
    }else if (params.slug.length===1){
       return <h1>Docs for feature {params?.slug[0]} </h1>
    }
  return (
    <div>Docs</div>
  )
}

export default Docs