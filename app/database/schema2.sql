DROP DATABASE if exists tc3zp2hrkk60ub3v;
CREATE DATABASE tc3zp2hrkk60ub3v;
USE tc3zp2hrkk60ub3v;

CREATE TABLE friend_list (
  friend_id INT(11) AUTO_INCREMENT NOT NULL,
  friend_name VARCHAR(100) NOT NULL,
  friend_photo_url VARCHAR(250) NOT NULL,
  q1 INT(11) NOT NULL,
  q2 INT(11) NOT NULL,
  q3 INT(11) NOT NULL,
  q4 INT(11) NOT NULL,
  q5 INT(11) NOT NULL,
  q6 INT(11) NOT NULL,
  q7 INT(11) NOT NULL,
  q8 INT(11) NOT NULL,
  q9 INT(11) NOT NULL,
  q10 INT(11) NOT NULL,
  q_sum INT(11) NOT NULL,
  PRIMARY KEY (friend_id)
);