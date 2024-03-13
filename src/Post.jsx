export default function Post ({post}) {
   const {title, body} = post;
   return (
      <div>
         <h4>Tittle: {title}</h4>
         <p>Body: {body}</p>
      </div>
   )
}