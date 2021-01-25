import React from 'react'
// import { Link } from 'react-router-dom'

const Featured = () => {  

        const [produto, setProduto] = React.useState([])
    
        React.useEffect(() => {
            async function fetchData() {
                const url = "http://localhost:3001/produtos";
                const response = await fetch(url)
                setProduto(await response.json())
            } fetchData();
        }, [])

       

}

export default Featured;