DELIMITER $$

CREATE PROCEDURE cardCRUD(
    IN action_type VARCHAR(100),
    IN c_id INT,
    IN c_userid INT,
    IN c_productid INT,
    IN c_qty INT,
    IN c_added TIMESTAMP
)

BEGIN 

    IF action_type = 'INSERT' THEN
    INSERT INTO card(userid, productid, qty)
    VALUES (c_userid, c_productid, c_qty);

    ELSEIF action_type = 'DELETE' THEN
    DELETE FROM card 
    WHERE userid = c_userid 
    AND id = c_id;
    IF ROW_COUNT() = 0 THEN
    SELECT 'Card not found' AS message, 0 AS success;
    ELSE
    SELECT 'Card deleted successfully' AS message, 1 AS success;
    END IF; 


    ELSEIF action_type = 'UPDATE' THEN
    UPDATE card
    SET 
       qty = c_qty
       WHERE id = c_id AND userid = c_userid;

    ELSEIF action_type = 'SELECT BY ID' THEN
    SELECT
            c.id
            c.userid,
            u.name AS username,
            c.productid,
            p.name AS productname,
            c.qty,
            p.price,
            (c.qty * p.price) AS total
        FROM card c
        JOIN users u ON c.userid = u.id
        JOIN product p ON c.productid = p.id
        WHERE c.userid = c_userid;

    ELSEIF action_type = 'SELECTALL' THEN
    SELECT
            c.userid,
            u.name AS username,
            c.productid,
            p.name AS productname,
            c.qty,
            p.price,
            (c.qty * p.price) AS total
        FROM card c
        JOIN users u ON c.userid = u.id
        JOIN product p ON c.productid = p.id;       

    END IF ;
    END $$

DELIMITER ;

