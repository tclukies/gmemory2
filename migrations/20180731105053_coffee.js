exports.up = function(knex, Promise) {
    return knex.schema.createTable("coffee", table => {
        table
            .increments("id")
            .primary()
            .unsigned();
        table.text("name");
        table.text("roaster");
        table.integer("aroma");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("coffee");
};
