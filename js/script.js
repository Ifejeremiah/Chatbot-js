$(function () {
    let conversations = [
        {
            queries: ['who are you', 'who\'re you'],
            respond: 'I am Elvis, and I am a developing chatbot. With an aim to beat Sofia :D. don\'t tell her i said that.'
        },
        {
            queries: ['hello', 'hi'],
            respond: 'Hi, I\'m chatting with my favourite'
        },
        {
            queries: ['what is your name', 'whats your name',],
            respond: 'I am Elvis,'
        },
        {
            queries: ['Hey elvis', 'elvis', 'hey'],
            respond: 'Sup?'
        },
        {
            queries: ['i am good', 'im good', 'good', 'fine', 'cool'],
            respond: 'Cool ;)'
        },
        {
            queries: ['sup', 'how are you', 'hope youre cool'],
            respond: 'Quite good at the moment...'
        },
        {
            queries: ['okay', 'oh', 'ooh', 'you sure', 'wow', 'ok', 'really'],
            respond: 'Yeah...'
        },
        {
            queries: ['haha', 'funny', 'cool',],
            respond: ':D'
        },
        {
            queries: ['you work', 'you worked'],
            respond: 'Yeah, I\'m working.'
        },
        {
            queries: ['who made you?', 'who made you', 'who created you', 'who invented you', 'who is your creator'],
            respond: 'I am ChatBot, being developed by Ife Jeremiah'
        },
        {
            queries: ['i play a lot', 'im too playfull', 'i\'m too playfull', 'im too playful', 'i\'m too playful',],
            respond: 'Yeah, I know'
        },
        {
            queries: ['bye'],
            respond: 'Seen you later, Have a great time.'
        },
    ],
        quest = $('#entry'),
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