import styled from 'styled-components'

export const Container = styled.div`
    background: #3838;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: #FFF;
    padding: 30px 20px;
    border-radius: 5px;

    ul {
        padding: 0;
        margin-top: 60px;
    }
`

export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 40px;
    width: 340px;
`

export const Button = styled.button`
    background: #8052EC ;
    border-radius: 5px;
    height: 40px;
    border: none;
    color: #FFF;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    width: 130px;
`

export const ListItem = styled.div`
    background: #E4E4E4;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0 10px;
    width: 500px;

    li {
        list-style: none;
    }
`