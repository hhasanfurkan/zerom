module.exports = {
  name:"forceban",
  code:`
  $suppressErrors[$customEmoji[pcross;$getVar[emojisw1]] | Böyle Bir IDli Kullanıcı Bulamadım Tekrar Kontrol Edermisin !?]
  $ban[$message[1];Banlayan Yetkili: $userTag[$authorID] | $authorID
  
  Banlanma Sebebi: $message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10]
  
  Banlanma Tarihi: $day/$month/$year;1]
 $customEmoji[ztban;$getVar[emojisw2]] \`$username[$message[1]]#$discriminator[$message[1]]\` Adlı Üye Sunucudan Force-Ban İle Yasaklanmıştır 
  $onlyIf[$isNumber[$message[1]]!=false;$customEmoji[pcross;$getVar[emojisw1]] | Bu Bir ID Değil Benimi Trollüyon?]
  $onlyIf[$message!=;$customEmoji[pcross;$getVar[emojisw1]] | Bir ID Girmelisiniz]
  $onlyPerms[ban;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin \`Üyeleri Yasakla\` İzin Olmalı!]
  $onlyBotPerms[ban;$customEmoji[pcross;$getVar[emojisw1]] | Bunun İçin Rolümün \`Üyeleri Yasakla\` İznim Açık Olmalı]
$onlyIf[$getGlobalUserVar[karaliste]!=evet;**$customEmoji[azerotwo;$getVar[emojisw2]] | Üzgünüm \`$getGlobalUserVar[ksebep]\` Sebebinden Kara Listedesiniz Komutlarımı Kullanamazsınız**]
  `
} 