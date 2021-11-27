create database Feelings_Music;



use Feelings_Music;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
); 


create table categoria (
idcategoria int primary key auto_increment,
categoria varchar(45)
)auto_increment = 100;

create table votos (
idvoto int primary key auto_increment,
fk_categoria int,
foreign key (fk_categoria) references categoria(idcategoria)
);

insert into categoria values 
(null, 'Felicidade'),
(null, 'Sofrencia'),
(null, 'Animada'),
(null, 'Relaxar');


select * from votos;

select * from categoria join votos on fk_categoria = idcategoria;

select count(fk_categoria) as 'Quantidade de votos', categoria from votos join categoria on fk_categoria = idcategoria 
group by fk_categoria;
