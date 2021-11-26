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


create table Votos (
idvoto int primary key auto_increment,
categoria varchar(45),
fk_usuario int,
FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
)auto_increment = 100;

select * from usuario;
