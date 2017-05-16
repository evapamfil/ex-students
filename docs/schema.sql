CREATE DATABASE evaluations; 
USE evaluations;

CREATE TABLE students(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(124),
    lastname VARCHAR(128),
    age INT,
    class INT,
    gender VARCHAR(10) 
);

CREATE TABLE notes(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    student INT,
    mark INT
);


#TEST
INSERT INTO students (firstname, lastname, age, class, gender) VALUES ('Romain', 'Jean', 20, 1, 'man');
SELECT * FROM students;

INSERT INTO notes (student, mark) VALUES (1, 15);
SELECT * FROM notes;

