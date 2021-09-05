import React from 'react'
import styled from 'styled-components';
import { createContext, useEffect, useState } from "react";




function Connect() {
    let [roles, setRoles] = useState([]);
    const fetchData = async () => {
        const response = await fetch("/.netlify/functions/getRoles");
        const responseBody = await response.json();
        setRoles(responseBody.data.roles.values);
    };
    useEffect(() => {
    fetchData();
    }, []);
    return (
        <div>
            <Tags>
                {roles.map((tags) => (
                    <Tag><p>{tags.value}</p></Tag>
                ))}
                
            </Tags>
            <CardContainer>
                <Cards>
                    <Content>
                    <h2>Name Surname</h2>
                    <button>+</button>
                    <button>Connect</button>
                    </Content>
                </Cards>
            </CardContainer>
        </div>
    )
}

export default Connect

const Tags = styled.div`
box-sizing: border-box;
display: flex;
max-width: 100vw;
padding: 50px;
flex-wrap: wrap;
`;
const Tag = styled.div`
display: flex;
align-items: center;
background-color: #f1f1f1;
border-radius: 20px;
height: 30px;
margin: 10px 15px;
p{
    padding: 0 25px;
    margin: 25px 20px;
}
`;
const CardContainer = styled.div`
max-width: 100vw;
padding: 50px;
display: flex;
flex-wrap: wrap;
`;
const Cards = styled.div`
position: relative;
width: 260px;
height: 310px;
padding: 10px;
background: #C4C4C4;
border-radius: 19px;
`;
const Content = styled.div`
    position: absolute;
    bottom: 10px;
    left: 10px;
h2{
    margin: 10px 5px;
}
button{
    margin: 0 5px;
}
`;
