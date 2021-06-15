module.exports = {
  name:"hgbb",
  code:`
 $customEmoji[ptick;$getVar[emojisw1]] |  Hoşgeldin Bay Bay Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı
  $setServerVar[hgbb;$mentionedChannels[1]]
  $onlyPerms[admin;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Yönetici\` İznin Olmalı]
  $onlyIf[$mentionedChannels[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]hgbb #hgbb]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]

`}
 
 