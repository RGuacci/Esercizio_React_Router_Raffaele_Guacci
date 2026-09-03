import { useLoaderData } from "react-router";
import { Link } from "react-router";

export default function Info () {

    const posts = useLoaderData();

    return (
       <main className ="container">
        <section className="row justify-content-center">
            <div className="col-6 d-flex flex-column align-items-center">
         <h1 className=" my-5">Pagina Info</h1>
         <h2 className=" my-3">Lista Informazioni:</h2>
         <ul>
            {posts.map((post) => {
                return (<li className="lead mt-2" key={post.id}>{post.title} : Dettagli <Link to={`/info/details/${post.id}`}>Visualizza</Link></li>)
            })}
         </ul>
           </div>
          </section>
        </main>
    )
}