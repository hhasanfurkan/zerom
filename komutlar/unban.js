module.exports = {
       name:"unban",
       code:`
$unban[$message[1]]
$customEmoji[ptick;$getVar[emojisw1]] | \`$username[$message[1]]#$discriminator[$message[1]]\` adlı üyenin banı açılmıştır!
$onlyIf[$hasPerms[$authorID;ban]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Üyeleri Banla\` İznine Olmalı!]
$onlyIf[$isNumber[$message[1]]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Girilen Bir ID Değil !]
$onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | Banını Kaldırıcağım Kişinin ID Sini Giriniz]
$onlyBotPerms[ban;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin Rolümün \`Üyeleri Yasakla\` İzni Olmalı]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
}

 