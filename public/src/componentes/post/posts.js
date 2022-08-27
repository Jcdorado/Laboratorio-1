class Post extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = ` 
        <link rel= "stylesheet" href="./src/componentes/post/styles.css">

        <section class="fondoDePantalla">

        <img id="logo" src="./assets/logo.png">
        <h1 id="Username">jcdorado2001</h1>
        <h2 id="Ubicacion">Cali</h2>
        <img id="info" src="./assets/info.png">
        <img id="post" src="./assets/post.png">
        <img id="likes" src="./assets/likes.png">
        <img id="likesicon" src="./assets/likesicon.png">
        <img id="Heart" src="./assets/Heart.png">
        <img id="comment" src="./assets/comment.png">
        <img id="shareicon" src="./assets/shareicon.png">
        <img id="save" src="./assets/Save.png">
        <img id="scroll" src="./assets/scroll.png">
        <h3 id="comentario"><strong>jcdorado2001:</strong> Aprendiendo un poco de HTML, JS, NODE, CSS</h3>
        

        </section>`;
  }
}

customElements.define("my-post", Post);
export default Post;