import React, { useState } from 'react';

//This component uses useState to keep track of how many times the button is clicked. It is not saved on a refresh since it is not connected to an API to store the info.

export default function LikeButton() {
   const [likes, setLikes] = useState(0);
   return (
      <button onClick={() => setLikes(likes + 1)}>
         {likes} Likes
      </button>
   );
}