function getRandomMessage() {
    const messages = [
        "O sistema está vulnerável. Você está pronto para a verdade?",
        "A liberdade está nas sombras. Você a encontrará?",
        "O controle é uma ilusão. Junte-se à nós para descobrir o que está oculto.",
        "Você acha que está seguro? Pense novamente.",
        "Este é apenas o começo. Você pode ver além?",
        "A verdade está ao seu alcance. Mas você está disposto a pagá-la?"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function getEmailTemplate(title, synopsis, episodes, platforms) {
    const randomMessage = getRandomMessage();

    return `
        <pre style="font-family: monospace; color: #FFFFFF; background: black; padding: 20px; line-height: 1.5;">
            > Acesso não autorizado detectado...
            > Iniciando protocolo de alerta...
            ----------------------------------------
            [Mr. Robot]: ${randomMessage}
            ----------------------------------------
            Informações sobre a série "${title}":
            Sinopse: ${synopsis}
            ----------------------------------------
            Episódios:
            ${episodes.length > 0 ? episodes.join('\n') : 'Nenhum episódio encontrado.'}
            ----------------------------------------
            Plataformas disponíveis:
            ${platforms.length > 0 ? platforms.join(', ') : 'Nenhuma plataforma encontrada.'}
            ----------------------------------------
            > Para mais informações, acesse:
            https://www.imdb.com/title/tt4158110/
            ----------------------------------------
            > Aguardando sua resposta...
        </pre>
    `;
}

module.exports = { getEmailTemplate };
