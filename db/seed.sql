create table users(
    id serial primary key,
    username varchar(20),
    password varchar(20),
    profile_pic text
);

alter table users
alter column password set data type text;

create table posts(
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id int references users (id)
);