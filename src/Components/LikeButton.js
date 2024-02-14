import React, { useState } from 'react';


export default function LikeButton() {
   const [likes, setLikes] = useState(0);
   return (
      <button onClick={() => setLikes(likes + 1)}>
         {likes} Likes
      </button>
   );
}