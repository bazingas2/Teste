const filmes = [
    {titulo: "Iron Man (2008)", descricao: "Tony Stark cria a armadura do Homem de Ferro e se torna um herói.", imagem: "https://tse2.mm.bing.net/th/id/OIP.S2h1r-JxXgy_w3ONOrqA3QHaLH?rs=1&pid=ImgDetMain&o=7&rm=3", trailer: "https://www.youtube.com/watch?v=2bVct5-ZxCQ"},
    {titulo: "The Incredible Hulk (2008)", descricao: "Bruce Banner luta contra o exército e sua própria fúria como o Hulk.", imagem: "https://image.tmdb.org/t/p/original/2nBpExDoInX3VreBsIm9qOTqXs8.jpg", trailer: "https://www.youtube.com/watch?v=xbqNb2PFKKA"},
    {titulo: "Thor (2011)", descricao: "O deus do trovão aprende humildade e se torna digno de seu martelo.", imagem: "https://th.bing.com/th/id/R.2d9fc3377fc302ecd6376d01a122b45c?rik=qoaf%2fTpUXKpdyA&pid=ImgRaw&r=0", trailer: "https://www.youtube.com/watch?v=GI-NJq82kH8"},
    {titulo: "Captain America: The First Avenger (2011)", descricao: "Steve Rogers se torna o Capitão América para lutar na Segunda Guerra.", imagem: "https://tse3.mm.bing.net/th/id/OIP.Rj445AFR_99Coys2OYf2swHaLH?rs=1&pid=ImgDetMain&o=7&rm=3", trailer: "https://www.youtube.com/watch?v=JerVrbLldXw"},
    {titulo: "The Avengers (2012)", descricao: "Os maiores heróis da Terra se unem contra Loki e seu exército.", imagem: "https://tse3.mm.bing.net/th/id/OIP.vEkljgJ1qVoCcf2DRqSRnwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3", trailer: "https://www.youtube.com/watch?v=eOrNdBpGMv8"},
    {titulo: "Guardians of the Galaxy (2014)", descricao: "Um grupo improvável de heróis protege uma poderosa joia do infinito.", imagem: "https://resizing.flixster.com/px7dQq0mA98UjreqN7fgjxmxKYg=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10108283_v_v13_ah.jpg", trailer: "https://www.youtube.com/watch?v=d96cjJhvlMA"},
    {titulo: "Avengers: Age of Ultron (2015)", descricao: "Os Vingadores enfrentam o robô Ultron, criado por Tony Stark.", imagem: "https://m.media-amazon.com/images/I/71-WYpqSfEL._UF894,1000_QL80_.jpg", trailer: "https://www.youtube.com/watch?v=tmeOjFno6Do"},
    {titulo: "Ant-Man (2015)", descricao: "Scott Lang se torna o Homem-Formiga e deve salvar o mundo em escala microscópica.", imagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSJrEYEc1eChMUTxN7rje8qvtl_rvu2DLk5_E54Ci2qZIrOjvtyUNVzbnEDn2SPmkWtIcUsDbrbx5kAfIE63u3cScI37M4bHb57AdXufoU", trailer: "https://www.youtube.com/watch?v=pWdKf3MneyI"},
    {titulo: "Doctor Strange (2016)", descricao: "Um cirurgião aprende as artes místicas para proteger o multiverso.", imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRbXES1B0nNgHU4zALPbYBy98wZ4boyIeW4SOMSrpYCk5UDP75PPHsxNrHH3WrAE8eQoKIwoy06O-ZwctWAWocMNwfgXklqoFG0ifsg0aQ", trailer: "https://www.youtube.com/watch?v=Lt-U_t2pUHI"},
    {titulo: "Black Panther (2018)", descricao: "T’Challa assume o trono de Wakanda e protege seu povo como Pantera Negra.", imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQtj8vPLyKFmrGZPkPzwjMorKcNB5SDVASzzuX5-kpa_Sr8BjTEZlpZ2Rii4l6ch9OqnnAtK_lAPV5Dt8_FG4m2DwtWa9H4z6GcWWOksIo", trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU"},
    {titulo: "Spider-Man: Homecoming (2017)", descricao: "Peter Parker tenta equilibrar a vida de estudante com a de herói.", imagem: "https://c8.alamy.com/comp/2A7JF01/spider-man-homecoming-2017-directed-by-jon-watts-and-starring-tom-holland-michael-keaton-and-robert-downey-jr-peter-parker-takes-on-the-vulture-and-his-alien-technology-2A7JF01.jpg", trailer: "https://www.youtube.com/watch?v=rk-dF1lIbIg"},
    {titulo: "Avengers: Infinity War (2018)", descricao: "Os heróis da Marvel enfrentam Thanos em busca das Joias do Infinito.", imagem: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_FMjpg_UX1000_.jpg", trailer: "https://www.youtube.com/watch?v=6ZfuNTqbHE8"},
    {titulo: "Avengers: Endgame (2019)", descricao: "Os Vingadores tentam reverter o estalo de Thanos e salvar o universo.", imagem: "https://marvelheroeslibrary.com/images/movies/avengers-endgame-movie-2019-poster-m.jpg", trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c"},
    {titulo: "Captain Marvel (2019)", descricao: "Carol Danvers descobre seus poderes cósmicos e protege a galáxia.", imagem: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTbWGxTB-TQobIbWe79TR09nALefwtXqokwKo_pC9hd4qCShe8Bo_Q-JxIoDi1PqKz7qOqDtxEbVjSRm1Eo_46-egqgwZcbc32vt0XFTbo", trailer: "https://www.youtube.com/watch?v=Z1BCujX3pw8"},
    {titulo: "Shang-Chi and the Legend of the Ten Rings (2021)", descricao: "Shang-Chi precisa enfrentar seu passado e os Dez Anéis.", imagem: "https://i0.wp.com/arcadiapod.com/wp-content/uploads/2022/01/shangchi_and_the_legend_of_the_ten_rings.jpg?ssl=1", trailer: "https://www.youtube.com/watch?v=8YjFbMbfXaQ"},
    {titulo: "Eternals (2021)", descricao: "Um grupo de imortais deve proteger a Terra de criaturas antigas.", imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT0oi3fH6OmJ2gITOIKEy66TlyRsQhVh6Ch2wDlZGwsGse3tjxZ4ZtQ9ZNG5WBU1xe0LoCxh2UhvA1KQSnmoXS2zy43GjtkO1ZmMyv-cg", trailer: "https://www.youtube.com/watch?v=x_me3xsvDgk"},
    {titulo: "Batman Begins (2005)", descricao: "Bruce Wayne se torna o Cavaleiro das Trevas para proteger Gotham.", imagem: "https://th.bing.com/th/id/R.9a1f7026e1a4fd189b93a83172c0e986?rik=zlO5maRRSoLDBg&pid=ImgRaw&r=0", trailer: "https://www.youtube.com/watch?v=neY2xVmOfUM"},
    {titulo: "The Dark Knight (2008)", descricao: "Batman enfrenta o Coringa em uma guerra pelo futuro da cidade.", imagem: "https://m.media-amazon.com/images/I/91KkWf50SoL._UF894,1000_QL80_.jpg", trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"},
    {titulo: "The Dark Knight Rises (2012)", descricao: "O retorno do Batman para enfrentar Bane e salvar Gotham novamente.", imagem: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQT6DMOgyWGvc1B4JDO07Gb9DR8U8FOawokItbZ8FR5K5a0-q1sstj6oYqUlrKqt9bwJEqJJp4TPjRFa5k4h4faLin9aRecPEFtm-xNgw", trailer: "https://www.youtube.com/watch?v=g8evyE9TuYk"},
    {titulo: "Man of Steel (2013)", descricao: "Clark Kent descobre sua verdadeira origem e se torna o Superman.", imagem: "https://m.media-amazon.com/images/I/91D-8DmsurL._UF1000,1000_QL80_.jpg", trailer: "https://www.youtube.com/watch?v=T6DJcgm3wNY"}
];

const catalogo = document.getElementById("catalogo");

filmes.forEach(filme => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${filme.imagem}" alt="${filme.titulo}">
        <h2>${filme.titulo}</h2>
        <p>${filme.descricao}</p>
    `;

    const botao = document.createElement("button");
    botao.textContent = "Ver Trailer";
    botao.addEventListener("click", () => {
        window.open(filme.trailer, "_blank");
    });

    card.appendChild(botao);
    catalogo.appendChild(card);
});