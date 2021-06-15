module.exports = ({
name: "ban", 
code: `$ban[$mentioned[1];Banlayan Yetkili: $userTag[$authorID] | $authorID

Banlanma Sebebi: $noMentionMessage

Banlanma Tarihi: $day/$month/$year

Banı Açmak İçin zt?unban $mentioned[1] Yazın;1]
$color[GREEN]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]ban @zerotwo sevmek]
$description[
$customEmoji[ztban;$getVar[emojisw2]] **Banlanan Üye:** <@$mentioned[1]>
$customEmoji[ztban;$getVar[emojisw2]] **Banlayan Yetkili:** <@$authorID>
$customEmoji[ztban;$getVar[emojisw2]] **Sebep:** $replaceText[*$noMentionMessage*;**;Sebep Belirtilmedi;-1]]
$image[https://cdn.discordapp.com/attachments/821109719955013663/824690430334599168/New_Project_24_37F84D2.gif]
$onlyPerms[ban;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Üyeleri Yasakla\` İznin Olmalı]
$onlyBotPerms[ban;{title:hata}{description:Bu Komutu Kullanabilmek İçin **"Üyeleri Engelle"** Yetkisine sahip olmam gerekiyor}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
$onlyIf[$mentioned[1]!=$authorID; $customEmoji[pcross;$getVar[emojisw1]] | Eğer Kendini Banlatmak İstiyosan Daha Üst Bir Yetkiliye Yaptır]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | Kimi Banlamalıyım Bunu Tüm Gün Düşünücem]
$onlyIf[$mentioned[1]!=$ownerID; $customEmoji[pcross;$getVar[emojisw1]] | İstesemde Ownerı Banlayamam]
$suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Rolümden/Rolünden Üstte Veya Eşit Birini Banlayamam]

$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

`
})



