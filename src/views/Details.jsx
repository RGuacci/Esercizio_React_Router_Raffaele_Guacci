import { useLoaderData } from "react-router";

export default function Details  () {

   const [ post , comments ] = useLoaderData();

    return (
        <main>
        <section className="row justify-content-center">
            <div className="col-8 d-flex flex-column align-items-center">
         <h1 className=" my-5">Pagina Dettagli</h1>
         <h2 className=" my-3">Dettagli Informazioni:</h2>
         <p className="lead mt-2" key={post.id}>Titolo: {post.title} </p>
         <p className="lead mt-2" key={post.id}>Contenuto: {post.body} </p>
           </div>
          </section>

            <section className="row justify-content-center mt-5">
                <div className="col-6">
                    <h3 className="my-3 h1 text-center">Commenti:</h3>
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment.id} className="lead mt-4">
                             Commento : {comment.body} - Da : {comment.email}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}