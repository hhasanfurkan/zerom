module.exports = {
name:"uyarı-sayı",
code:`
$title[Ohayoo]
$description[**<@$mentioned[1]> Adlı Üyenin Toplam \`$getServerVar[warnsayı;$mentioned[1]]\` Uyarısı Var Son Uyarı Sebebi $getServerVar[wsebep;$mentioned[1]]**]
$footer[Zero Two Uyarı Sistemi; $authorAvatar]
$color[ffccff]
$onlyIf[$message!=; $customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]uyarı-sayı @zerotwo]
$onlyIf[$mentioned[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | Birini Etiketle]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
`
}
