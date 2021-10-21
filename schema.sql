CREATE TABLE users (
    id                            uuid,
    first_name                    varchar(80),    
    last_name                     varchar(80),
    email                         varchar(100) UNIQUE,
    password                      varchar(100),
    cellphone                     varchar UNIQUE,
    created_at                    TIMESTAMPTZ DEFAULT Now(),
    created_by                    uuid references users(id),
	PRIMARY KEY(id)
);