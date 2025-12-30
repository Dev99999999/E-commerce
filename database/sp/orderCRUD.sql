DELIMITER $$

CREATE PROCEDURE orderCRUD(
    IN action_type VARCHAR(100),
    IN o_id INT,
    IN o_email VARCHAR(225),
    IN o_message TEXT
)

BEGIN 

    IF action_type = "SEND" THEN
    

    END $$

DELIMITER ;