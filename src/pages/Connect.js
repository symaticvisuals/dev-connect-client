import React from 'react'
import styled from 'styled-components';
import {  useEffect, useState } from "react";


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

    let [people, setPeople] = useState([]);

    const fetchPeople = async () => {
        const response = await fetch("/.netlify/functions/getPeople", );
        const responseBody = await response.json();
        setPeople(responseBody.data.users_by_roles.values);
    };
    
    useEffect(() => {
        fetchPeople();
    }, []);
    return (
        <div>
            <Tags>
                {roles.map((tags) => (
                    <Tag><p>{tags.value}</p></Tag>
                ))}
                
            </Tags>
            <CardContainer>
            {people.map((p) => (
                <Cards style={{background:`url(${p.profile_pic})`}}>
                    
                    <Content>
                    <h2>{p.first_name}{p.last_name}</h2>
                    <button>+</button>
                    <button>Connect</button>
                    </Content>
                   
                </Cards>
             ))}
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
margin: 20px;
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
