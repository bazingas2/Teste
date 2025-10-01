const filmes = [
    {titulo: "Iron Man (2008)", descricao: "Tony Stark cria a armadura do Homem de Ferro e se torna um herói.", imagem: "https://www.impawards.com/2008/posters/iron_man_ver3_xlg.jpg"},
    {titulo: "The Incredible Hulk (2008)", descricao: "Bruce Banner luta contra o exército e sua própria fúria como o Hulk.", imagem: "https://www.impawards.com/2008/posters/incredible_hulk_xlg.jpg"},
    {titulo: "Thor (2011)", descricao: "O deus do trovão aprende humildade e se torna digno de seu martelo.", imagem: "https://www.impawards.com/2011/posters/thor_ver4_xlg.jpg"},
    {titulo: "Captain America: The First Avenger (2011)", descricao: "Steve Rogers se torna o Capitão América para lutar na Segunda Guerra.", imagem: "https://www.impawards.com/2011/posters/captain_america_the_first_avenger_ver6_xlg.jpg"},
    {titulo: "The Avengers (2012)", descricao: "Os maiores heróis da Terra se unem contra Loki e seu exército.", imagem: "https://tse3.mm.bing.net/th/id/OIP.vEkljgJ1qVoCcf2DRqSRnwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"},
    {titulo: "Guardians of the Galaxy (2014)", descricao: "Um grupo improvável de heróis protege uma poderosa joia do infinito.", imagem: "https://www.impawards.com/2014/posters/guardians_of_the_galaxy_ver2_xlg.jpg"},
    {titulo: "Avengers: Age of Ultron (2015)", descricao: "Os Vingadores enfrentam o robô Ultron, criado por Tony Stark.", imagem: "https://www.impawards.com/2015/posters/avengers_age_of_ultron_ver11_xlg.jpg"},
    {titulo: "Ant-Man (2015)", descricao: "Scott Lang se torna o Homem-Formiga e deve salvar o mundo em escala microscópica.", imagem: "https://www.impawards.com/2015/posters/ant_man_ver5_xlg.jpg"},
    {titulo: "Doctor Strange (2016)", descricao: "Um cirurgião aprende as artes místicas para proteger o multiverso.", imagem: "https://www.impawards.com/2016/posters/doctor_strange_ver15_xlg.jpg"},
    {titulo: "Black Panther (2018)", descricao: "T’Challa assume o trono de Wakanda e protege seu povo como Pantera Negra.", imagem: "https://www.impawards.com/2018/posters/black_panther_ver9_xlg.jpg"},
    {titulo: "Spider-Man: Homecoming (2017)", descricao: "Peter Parker tenta equilibrar a vida de estudante com a de herói.", imagem: "https://c8.alamy.com/comp/2A7JF01/spider-man-homecoming-2017-directed-by-jon-watts-and-starring-tom-holland-michael-keaton-and-robert-downey-jr-peter-parker-takes-on-the-vulture-and-his-alien-technology-2A7JF01.jpg"},
    {titulo: "Avengers: Infinity War (2018)", descricao: "Os heróis da Marvel enfrentam Thanos em busca das Joias do Infinito.", imagem: "https://www.impawards.com/2018/posters/avengers_infinity_war_ver19_xlg.jpg"},
    {titulo: "Avengers: Endgame (2019)", descricao: "Os Vingadores tentam reverter o estalo de Thanos e salvar o universo.", imagem: "https://www.impawards.com/2019/posters/avengers_endgame_ver45_xlg.jpg"},
    {titulo: "Captain Marvel (2019)", descricao: "Carol Danvers descobre seus poderes cósmicos e protege a galáxia.", imagem: "https://www.impawards.com/2019/posters/captain_marvel_ver2_xlg.jpg"},
    {titulo: "Shang-Chi and the Legend of the Ten Rings (2021)", descricao: "Shang-Chi precisa enfrentar seu passado e os Dez Anéis.", imagem: "https://www.impawards.com/2021/posters/shangchi_and_the_legend_of_the_ten_rings_ver2_xlg.jpg"},
    {titulo: "Eternals (2021)", descricao: "Um grupo de imortais deve proteger a Terra de criaturas antigas.", imagem: "https://www.impawards.com/2021/posters/eternals_xlg.jpg"},
    {titulo: "Batman Begins (2005)", descricao: "Bruce Wayne se torna o Cavaleiro das Trevas para proteger Gotham.", imagem: "https://th.bing.com/th/id/R.9a1f7026e1a4fd189b93a83172c0e986?rik=zlO5maRRSoLDBg&pid=ImgRaw&r=0"},
    {titulo: "The Dark Knight (2008)", descricao: "Batman enfrenta o Coringa em uma guerra pelo futuro da cidade.", imagem: "https://www.impawards.com/2008/posters/dark_knight_ver5_xlg.jpg"},
    {titulo: "The Dark Knight Rises (2012)", descricao: "O retorno do Batman para enfrentar Bane e salvar Gotham novamente.", imagem: "https://www.impawards.com/2012/posters/dark_knight_rises_ver8_xlg.jpg"},
    {titulo: "Man of Steel (2013)", descricao: "Clark Kent descobre sua verdadeira origem e se torna o Superman.", imagem: "https://www.impawards.com/2013/posters/man_of_steel_xlg.jpg"}
];

const catalogo = document.getElementById("catalogo");

filmes.forEach(filme => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${filme.imagem}" alt="${filme.titulo}">
                      <h2>${filme.titulo}</h2>
                      <p>${filme.descricao}</p>`;
    catalogo.appendChild(card);
});
