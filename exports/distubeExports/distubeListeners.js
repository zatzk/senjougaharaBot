const distube = require('./distubeCreate');

// DisTube event listeners
distube
    .on('playSong', (queue, song) =>
        queue.textChannel?.send(
            `Tocando \`${song.name}\` - \`${
                song.formattedDuration
            }\`\nSelecionada por: ${song.user}`,
        ),
    )
    .on('addSong', (queue, song) =>
        queue.textChannel?.send(
            `Adicionou ${song.name} - \`${song.formattedDuration}\``,
        ),
    )
    .on('addList', (queue, playlist) =>
        queue.textChannel?.send(
            `Adicionou \`${playlist.name}\` playlist (${
                playlist.songs.length
            } songs) a fila`,
        ),
    )
    .on('error', (textChannel, e) => {
        console.error(e)
        textChannel.send(
            `An error encountered: ${e.message.slice(0, 2000)}`,
        )
    })
    .on('finish', queue => queue.textChannel?.send('Cabô as musicas <(＿　＿)>'))
    .on('disconnect', queue =>
        queue.textChannel?.send('Desconectei ＞︿＜'),
    )
    .on('empty', queue =>
        queue.textChannel?.send(
            'O canal está vazio (┬┬﹏┬┬) Saindo do canal...',
        ),
    )



module.exports = distube;