import React, { lazy, Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import Nav from './nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const Headers = () => {
  const Header = styled.div`
    display: inline-block;
    text-align: center;
    border: 5px solid black;
  `
  return <thead class='thead-dark'>
      <tr style={{}}>
        <th scope='col' style={{width: '30%%', paddingLeft:"25px", fontFamily:'Syne Mono'}} class="h4">TITLE</th>
        <th scope='col' style={{width: '20%', fontFamily:'Syne Mono'}} class="h4">Normal Price</th>
        <th scope='col' style={{width: '15%', fontFamily:'Syne Mono'}} class="h4">Sale Price</th>
      </tr>
    </thead>
}

const Game = ({ game }) => {
  const GameSpace = styled.div`
  `
  const Img = styled.img`
    max-width:140px;
    max-height:45px;
  `
  return (

    <tr style={{padding:'0px'}}>
      <td style={{width:'37%', padding:'0px', paddingBottom:'0px'}}>
        <td
        style={{float:'left',display:'inline-block', width:'120px', height:'45px', textAlign:'center', padding:'0px 0px 0px 0px', border:'0px solid', backgroundColor:'black', }}>
          <Img src={game.thumb} class="img-fluid" style={{padding:'0px'}}/>
        </td>
        <div style={{marginTop:'10px'}}>
        <a
          style={{float:'left'}}
          href={`https://www.cheapshark.com/redirect?dealID=${game.dealID}`}>
          {game.title}
        </a>
        </div>
      </td>
      <td style={{padding:'10px 0px 0px 0px'}}>Normal Price -{game.normalPrice}</td>
      <td style={{padding:'10px 0px 0px 0px'}}>Sale Price-{game.salePrice}</td>
    </tr>
  )
}

const AllGames = ({ games }) => {

  return <div style={{width:'74%', backgroundColor:'white', position:'relative', left:'12%', border:'25px solid grey', borderRadius:'25px'}}><table class="table table-border" style={{width:'100%'}}><Headers /><tbody>{games ? games.map(g => <Game game={g} />) : <div></div>}</tbody></table></div>
}

const App = () => {
  let [games, setGames] = useState();
  const fetchData = async () => {
    const response = await fetch('https://www.cheapshark.com/api/1.0/deals?');
    const data = await response.json();
    await setGames(data)
    await console.log(data)
    // console.log(games)
  }
  useEffect(fetchData, [])
  const Background = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxARERANEhAVEhAPDxAWEhIQEBAQERAPFREWGBYRFRMYHSggGBolGxkfITEhJSorLi4uFx8zODMsNzQtLisBCgoKDg0OGxAQGy0fIB83Ly8tLS0uKy0tLS0uLTctKy0tLS0rLS0tKzUtLS0tLTctLS8tLSstLS03LS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQBBQYCB//EAEEQAAIBAgQCBgUKBAUFAAAAAAABAgMRBBIhMUFRBQYTImFxMoGRktEHFEJEUqGxwdLwQ1NUYhUkguHxFyM0crP/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQIDBP/EACoRAQEAAgEBBgQHAAAAAAAAAAABAhEDMRITIUFCUQQUUmEiIzJxgcHR/9oADAMBAAIRAxEAPwD4aAALmGexbVS+n43KFKXtLUJeH/BXS2114KSjGb0jNySejTcXZ8RQoxd7q/d01as+eh5VWWVQzPLFtqN7pN725FjCQTUm2k4xVuD9JLQItWKUFZJcEjbR6ZwkMP2UacXVmk6lStCnOSsneFPjF3S47ew1EHYp9IU/prTNo/F/v8CLNolW411LvLSLbtdq6XC46W6YVKNPD9jGayRqOTlNNuS0WjtZLT1my6v4elOnBSSzqfdbv3u9e1o768Xc0fXuNsZNee2q9OWifFeRWat0ixV/xpfyI+/U+Jj/ABpfyI+/U+JqQXuEpqNzHpxL+BH36nxJodZLfV4e/V+JoAUvDhfJHYxdNDrc19Wp+/V+JYh15kvq1P36v6jkQVvw3FfJXusPZ2sPlCqL6rS9+t+olj8pVVfVaXv1v1HCgpfg+C+lHccfs75fKfW/pKPv1v1Gf+qNb+ko+/W/UcACPkfh/piPl+P6XfP5T639JR9+t+ojl8pNV/VaXv1v1HCgn5Lg+mJ7jj9naT+UGo/qtL3636iCfXiT+rU/fq/qOSBafCcM9Ke5w9nSz62t/Voe/V+JBPrJf6vD36vxNCC04OOdInu8fZuZdOp/wI+/U+JDU6WT17GKfhOp8TWAvOPGJ7Mdd0fUUqGIlly3o0na97N4iKbTfDur2lKiXujqF8LJ2ung1tz+dRt7N/Ua2GJypX1Vt1wfiRx9apOtWm7akNObzWPaxMm4ycIKFtFd6q2veW8vzR67N2z2ajzOmJbvoZJvvbfibHHYGEY3itLXfGxoej8Q0zosNik1+9Tr474M8p47cd0ild8zSV4nVdM4dXbivNbW8b8jmsZa78zm5ZqtcaoswepHkwXAABPQdncuwd9yjSLUG76EC1FWV77cyWlPQiVNtK/Phx0JVStbZeL2XixCrPbKKu9rflsVKzlUVOakrWqd1P0XF7yW92mtdtHbZ2RxFSEmoz7rSTV+7OL+jKL0a8yel0jKLzKFLNqrulF63vm8X4si7JpsMDRqwp0ZKcowlNNxaa73aNJZebS5cUavrw387qNu7vL/AOkz2ukZvJmtKMGnZ6Xs72vyKnWmq51o1GrOpSjOyd0szk9/WVnUvVpwAaAAAAAAAAAAAAAAAAAAAAAA7noSjKWEq2V0sHFtLl87jr95pKcFaSldLlyR1PVCU/mOOcUtMBS8/wDy1r6jV06Shhnip2lUquUYxe0U24uTVt9G/DQx4fHPP7f4wl/FWuwEqcXNVYZ4RpzjC7acaslaLfO2r87CVeT+jp4J5dFz2IVUUpPgpPVJJewlbjFKOeSScteOr0u16zqnRdLDENLs3Fq3o30ab3VuTubHoqblJXen70NRThObg91KShGba9JJNRb4aP7i9hoKF6b9ON8zlJ6q+lvO3/Bpjlqli10niYKNr3zt3tZtRW+vn+Zy+Jje7S8/Au4x95q27b5/cijXnK7bb1+8rnl2r4pxmlKR5PUzyYrgAAlgX8OlbMa+BvMO1OjJQjapn4L0qejy+FmtyuWWlpjtmM+FnoyDFVETVKThB1G9U7SSi+6ns2/yKE5N2/u21X38vWJdq2aO1JMNNKUZSjmjdOzulK3pfg0Q1KTWrt/pnTl9ybYrVpNQjJu0I2jtpG/D7yaJ6MLyy3tG7u7aRjwb5cP9zHWGV50bKyWGpLe+ye/iKOKS7SGXuVMq9JqUVGV1ZvRvTivZqZ6yRSqU1F3XzelbS2mpn61PU1IANVwAAAAAAAAAAAAAAAAAAAAB9L6pYq3R2MWiSwdJOTs3eWKdoJcm/wADlMdWdllei4bWb3aR1fUfoupiKNShSyuVXBZG5XShJ12077bRt/qOFxGaDlCacZxk4yjJWcZJ2lFrwZy8OU7zP9/6YYdaTqvSXFev1GVjHonyt6inKZ5c2de22l14u0VFPVzcnyTSSi/Pc2fT/WJ4p0rUY0506cYZozlJ1LK12m7R1105u5z2Y9U6tteKGzTfOtF3022zO6au/Dlb2muxVW6/exVliX+2yKU2y1yRp5kYAKLAAA9Rdi1TxslsUwBdnj5tNZn5aWK/bS5/gRAjUE0a8lrdmJ1W9Xv5JEYGhNGo/bvbkbHrK+/Q0t/laOzbTdndp+ZUpdGV5UniY0ZuhGWV1cjVJT+zn2v4F3rTXc54eWWMbYLDpRpq0FZPbV+fncpf1T+VfNpQAaLAAAAAAAAAAAAAAAAAAAAAD6F1YxeFhgcRDERqWq4NqHZZZ3mq6ySlBtJuM7NJvZPQ5LH0Yyz1O2vlbXfUs85N3e19dd3ppudJ0DhauIwXzelRvKPGDinPNVhJTm5O3dUHxSST9fI4vD5JzgqkJqEpJTjJOMkn6S8Dl4pO3l77Y4db4q7MFmjUyvVwkte7NSlHVWvtp6uSI8V2eb/t5srS0lZuL4rNpdeNkdLXaEwZMEpAAAAAAAAAAAAPcYL7SXqYHg29DppKlGhLC0JKF7VVSUa+vOa0l60yhChB/wAVLzUiVYOH86H3lMuzeqmWr1bCWPz0401iqqptxdXDVZ1FTlJS+g6acXpbVxTT5mOtuDlRqUYSpunmwtGUYSabjTldxTa304uz8CDDYBJqfawt/cu6+Gt3YuddKbjUw6c1NvBUHeMlKP0tItN6Gc125r7ox1vwc8ADdoAAAAAAAAAAAAAAAAAAAAAPpfVno6vHonGYynGVKl83gpVZSgo1JqpOM4RbezUkmrL1nzqdGW+XTmu8vaj7H8nFF/4XXnUrQWH7OEZU51oxpqm6sszlFqdqjtZPLyPnvWh4eVeUcE4U8PHSLclGrK6WbPLM82uz004I4uHL8zKa82GN1lXMgsVMI1tKMv8A1knYj+bz+y/Vqdm423EQJVh5/Yl7rMOhNbwl7rG4biMAEpAAAAAAAAD1nZ5AEscRJcvXGLLcMRV3Th7af4XKdCk5vLdLi272SW7dtfZdirGKbSbaT3y2v42uVslVsjb0OkKmV06kIVIPWPCdOXOErO1+Ks0+R765dJPEVqVVxUWsLQjlSSSUU0tEkvYkaaVRX7sUlwu8z9r+Bd6agk6CSt/lqd7NNOTvdqxTsyZSomOq1oANVwAAAAAAAAAAAAAAAAAAAAB9T6qdKQqdF1uj5yjh8tBShWmkoSqutJx7R8VdJarTmfP63ziN7x0W7UYyVvteXidX1HwFKphMaqkYubowdNyyuNoyk0mk75sy4+Bx+MxFaMnFzklFOCsnTXZ66JK2mu3icvFjJnlIxk/FVepipveXs7v4HjtpfaftZ4B06jXT26kvtP2s8tmASkAAAAAAAAMmDICwsAAJpVrxUWtuN73fPX8iEATYbCzqN5IyllV5WXoxX0m+CJ+lZtuk27vsKa08L6FajUadszjGWksr3jfVW4+RJj2rxttkVubWusvEr6keasACyQAAAAAAAAAAAAAAAAAAAAB0PR0r4atCdTKlSi4JXbbVTSLttdvfxKeDp1pxq9jTUoxpyz/ScKfGVpPR+NiOnlyd1p3prPmVnmz3yrmrJakNByheSc4wknF5HfN/a7O1vMymM8VNdVUyTYqCWW1tY30bb14NcGQmm1tstHk9JmGgMGDJglIAAAAAyDBkAAAAAAzFokxMpNq/CKS0SWXhaxCe6k27X4JJeCXADwAAAAAAAAAAAAAAAAAAAAAAACyqjUUtEnHhvu93zIpzbSXL72Yz6Jcl7dTyRpGgyYBKWRcwABgyYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z"
  return (
    <div style={{
      // background:`url(${Background})`
      backgroundColor:'black'
      }}>
      <Nav/>
      <AllGames games={games} />
    </div>
  )
}

export default App;
