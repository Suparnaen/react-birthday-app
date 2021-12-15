import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {
        people.map((person) => {            //person represent each and every object
          const { id, name, age, image } = person;
          return (
            <article key={id} className='person'>
              <img src={image} alt={name} />

              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>

            </article>


          )


        })
      }

    </>
  );
};

export default List;

/*destructure the list using following const and assigning it to person

*/
