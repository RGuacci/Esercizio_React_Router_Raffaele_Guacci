export const getAllPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
}

export const getSinglePost = async ( { params} ) => {
    //Json Posts
    const posts_response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const posts_data = await posts_response.json();
    

    //Json commenti 
    const comments_response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`);
    const comments_data = await comments_response.json();
    
    return [ posts_data , comments_data ];
}