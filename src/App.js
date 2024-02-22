import React from 'react';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import PicturesPage from './Pages/PicturesPage';
import AboutPage from './Pages/AboutPage';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom/cjs/react-router-dom';
import BlogsPage from './Pages/BlogsPage';
import RecipesPage from './Pages/RecipesPage';


export default function App() {

  return (
    <>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/blogs">
            <BlogsPage />
          </Route>
          <Route exact path="/pictures">
            <PicturesPage />
          </Route>
          <Route exact path="/recipes">
            <RecipesPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

//   return e('div', {class:'container'},
//           e(NavBar, {}, null)




// //     <Router>
// //     <div class= "navbar">
// //         <div class="pagetitle">
// //             <h1>Alexis's Travel Blog</h1>
// //         </div>
// //         <div class="links">
// //             <p class="navtext">
// //                 <Link to="/Posts">Posts</Link>
// //             </p>
// //             <p class="navtext">
// //                 <Link to="/Pictures">Pictures</Link>
// //             </p>
// //             <p class="navtext">
// //                 <Link to="/About">About</Link>
// //             </p>
// //             <Switch>
// //                 <Route path='/Posts'>
// //                     <Posts posts={posts} />
// //                 </Route>
// //                 <Route path='/Pictures'>
// //                     <Friends names={['Renato', 'Alexis', 'Kevin']} />
// //                 </Route>
// //                 <Route path='/About'>
// //                   {About}
// //                 </Route>
// //             </Switch>
// //         </div>
// //     </div>
// // </Router>
//   );
// }

// function Home() {
//   return (
//       <h2>HOME</h2>
//   );

// }

// function Friends(props) {
//   const { names } = props;

//   return (
//     <div>
//       <ul>
//         {names.map((friend, index) => (
//         <li key={index}>{friend}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Posts({ posts }) {
//   const match = useRouteMatch(); 
//   const findPostById = (id) =>
//     posts.filter((post) => post.id == id)[0];

//   return (
//     <div>
//       <h2>Posts</h2>
//       <ul>
//         {posts.map((post, index) => {
//         return (
//           <li key={index}>
//             <Link to={`${match.url}/${post.id}`}>
//               {post.title}
//               </Link> 
//           </li>
//         );
//       })}
//       </ul>
//       <Switch>
//         <Route
//           path={`${match.path}/:postId`}
//           render={(props) => (
//             <Post
//               {...props}
//               data={findPostById(props.match.params.postId)}
//             />
//           )}
//           />
//           <Route path={match.path}>
//             <h3>Please select Post.</h3>
//           </Route>
//       </Switch>
//     </div>
//   );
// }

// function Post(props) {
//   const { data } = props;
//   return (
//     <div>
//       <h3>{data.title}</h3>
//       <h4>{data.date}</h4>
//       <p>{data.content}</p>
//     </div>
//   );
// }


// function About() {
//         return (
//           <div>
//             <h2>ABOUT</h2>
//           </div>
//         );
//     }