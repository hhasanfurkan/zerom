module.exports = {
    name: "bot-engel-kapat",
    code: `
    $setServerVar[botengel;kapalı]
    $setServerVar[botengellog;]
    $customEmoji[ptick;$getVar[emojisw1]] | Artık Sunucuya Bot Girebilicek
    $onlyIf[$getServerVar[botengel]!=kapalı;$customEmoji[pcross;$getVar[emojisw1]] | Bu Zaten Kapalı] 
    $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` Yetkin Olmalı]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
    `
}
