import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
  const ninjaList = ninjas.map(ninja => {
    return ninja.age > 1 ? (
      <div className='ninja' key={ninja.id}>
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>Job: { ninja.job }</div>
        <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
      </div>
    ) : null;
  });
  
  return(
    <div className="ninja-list">
      {ninjaList}
    </div>
  )
}

export default Ninjas;