DELIMITER $$

CREATE PROCEDURE productCRUD(
    IN action_type VARCHAR(100),
    IN p_id INT,
    IN p_name VARCHAR(100),
    IN p_price BIGINT,
    IN p_qty INT,
    IN p_description TEXT,
    IN p_image VARCHAR(100)
)

BEGIN

    IF action_type = 'CHECK' THEN
       SELECT *FROM product
       WHERE name = p_name;

    ELSEIF action_type = 'INSERT' THEN
      INSERT INTO product(name, price, qty, description, image)
      VALUES (p_name, p_price,p_qty, p_description, p_image);

    ELSEIF action_type = 'UPDATE' THEN
       UPDATE product 
       SET
          price = IFNULL(p_price, price), 
          qty = IFNULL(p_qty, qty), 
          description = IFNULL(p_description, description), 
          image = IFNULL(p_image, image)
        WHERE id = p_id;

    SELECT *FROM product WHERE id = p_id;

    ELSEIF action_type = 'DELETE' THEN
    DELETE FROM card WHERE productid = p_id;
    DELETE FROM product WHERE id = p_id;

    ELSEIF action_type = 'SELECTALL' THEN
    SELECT *FROM product;

    END IF;
  END$$

DELIMITER ;  
