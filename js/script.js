$(function () {
    let quest = $('#entry'),
        chat = $('#chat');

    $('.btn').on('click', () => {
        let input = quest.val();
        quest.val('');
        if (input) {
            $('.chats').scrollTop(0);
            $('<li>', {
                text: input,
            }).appendTo(chat)
        }

        conversations.forEach(function (convers) {
            convers.queries.forEach(function (query) {
                if (input.trim().toLowerCase() === query.trim().toLowerCase()) {
                    if (convers.respond) {
                        $('<h1>', {
                            text: convers.respond,
                        }).appendTo(chat);
                    }
                }
            });
        });
    });
});