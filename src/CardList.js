import React from  'react';
import Card from './Card';
import Robots from './Robots'

const CardList = ( {Robots}) => {
     
    const CardComponents = Robots.map((user,i) => {
        return <Card  key ={i} id={Robots[i].id} name={Robots[i].name} email={Robots[i].email} />
    })
     return (<div>  
        {CardComponents}
        </div>
     );
}
export default CardList ;
