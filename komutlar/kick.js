module.exports = {
  name: "kick",
  code: `
  $kick[$mentioned[1];$replaceText[**$noMentionMessage**;****;Sebep Belirtilmedi;-1]]
  Atılan Kişi = $userTag[$mentioned[1]]
  
  Atılma Sebebi = $replaceText[**$noMentionMessage**;****;Sebep Belirtilmedi !;-1]
  
  $onlyPerms[kick;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Üyeleri At\` İznin Olmalı!]
  $onlyBotPerms[kick;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin Rolümün \`Üyeleri At\` İzni Açık Olmalı]
  $onlyIf[$mentioned[1]!=;$customEmoji[pcross;$getVar[emojisw1]] | **Kullanım:** $getServerVar[Prefix]kick @zerotwo sevmek]
  $onlyIf[$mentioned[1]!=$authorID; $customEmoji[pcross;$getVar[emojisw1]] | Kendini Kicklemek İstiyorsan Daha Üst Bir Yetkiliden İste]
  $onlyIf[$mentioned[1]!=; $customEmoji[pcross;$getVar[emojisw1]] | Kimi Kicklemem Gerek Bunu Tüm Gün Düşünücem]
$onlyIf[$mentioned[1]!=$ownerID; $customEmoji[pcross;$getVar[emojisw1]] | İstesemde Ownerı Banlayamam]
$suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Rolümden/Rolünden Üstte Birini Kickleyemem]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
};
