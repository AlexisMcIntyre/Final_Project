import React, { useState } from 'react';


export default function DislikeButton() {
   const [dislikes, setDislikes] = useState(0);
   return (
      <button onClick={() => setDislikes(dislikes + 1)}>
         {dislikes} Dislikes
      </button>
   );
}