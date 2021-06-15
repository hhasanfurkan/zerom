module.exports = {
    name: "bot-engel-aç",
    code: `
    $setServerVar[botengel;açık]
    $setServerVar[botengellog;$mentionedChannels[1]]
    $customEmoji[ptick;$getVar[emojisw1]] | Artık Sunucuya Bot Giremiyicek
    $onlyIf[$getServerVar[botengel]!=açık;$customEmoji[pcross;$getVar[emojisw1]] | Bu Zaten Açık] 
    $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
    $onlyBotPerms[ban;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin Rolümün \`Üyeleri Yasakla\` İzni Açık Olmalı]
$onlyIf[$mentionedChannels[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]bot-engel-aç #log]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

    `
}
