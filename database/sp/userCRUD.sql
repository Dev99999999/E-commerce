DELIMITER $$

CREATE PROCEDURE userCRUD(
    IN action_type VARCHAR(10),
    IN u_id INT,
    IN u_phone BIGINT,
    IN u_email VARCHAR(255)
    IN u_name VARCHAR(30),
    IN u_city INT,
    IN u_gender VARCHAR(30),
    IN u_password VARCHAR(100),
    IN u_hobbies VARCHAR(255),
    IN u_image VARCHAR(255),
    IN u_role VARCHAR(255)
)

BEGIN
    IF action_type = 'CHECK' THEN
    SELECT *FROM users 
    WHERE phone = u_phone;
    
    ELSEIF action_type = 'INSERT' THEN
        INSERT INTO users (phone, email, name, city, gender, password, hobbies, image, role)
        VALUES (u_phone, u_email, u_name, u_city, u_gender, u_password, u_hobbies, u_image, u_role);

    ELSEIF action_type = 'UPDATE' THEN
    UPDATE users
    SET
        email = IFNULL(u_email, email)
        name = IFNULL(u_name, name),
        city = IFNULL(u_city, city),
        gender = IFNULL(u_gender, gender),
        hobbies = IFNULL(u_hobbies, hobbies),
        image = IFNULL(u_image, image)
    WHERE id = u_id;

    SELECT * FROM users WHERE id = u_id;

    ELSEIF action_type = 'DELETE' THEN
        DELETE FROM users
        WHERE id = u_id;

    ELSEIF action_type = 'SELECTALL' THEN
    SELECT users.*,
    -- city.id AS city_id,
    JSON_OBJECT(
           'city_id', city.id,
           'city_name', city.city
       ) AS city
    FROM users
    JOIN city
    ON users.city = city.id;

    ELSEIF action_type = 'TOTALCOUNT' THEN
    SELECT COUNT(*) AS total_user FROM users;

    END IF;
END$$

DELIMITER ;